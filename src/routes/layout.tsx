import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/500.css";
// import "@fontsource/inter/600.css";
// import "@fontsource/inter/700.css";
// import "@fontsource/montserrat/400.css";
// import "@fontsource/montserrat/500.css";
// import "@fontsource/montserrat/600.css";

export const onGet: RequestHandler = async ({ cacheControl, url }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.dev/docs/caching/

    const incomingUrl = new URL(url);
    const previewToken = incomingUrl.searchParams.get("caisy_preview_access_token");
    if (previewToken && previewToken !== "") {
        cacheControl({
            public: false,
            maxAge: 0,
            sMaxAge: 0,
            staleWhileRevalidate: 0,
        });
        return;
    }
    const cacheRulesPublic = {
        // Always serve a cached response by default, up to a week stale
        // staleWhileRevalidate: 60 * 60 * 24 * 7,
        staleWhileRevalidate: 60 * 5,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        public: true,
        maxAge: 1,
        sMaxAge: 1,
    };

    // If you want the browser to use "stale-while-revalidate" or "s-maxage" Cache Control headers, you have to add the second cacheControl with "CDN-Cache-Control" or "Vercel-CDN-Cache-Control" on Vercel Edge
    cacheControl(cacheRulesPublic);
    cacheControl(cacheRulesPublic, "CDN-Cache-Control");
    cacheControl(cacheRulesPublic, "Vercel-CDN-Cache-Control");
};

export default component$(() => {
    return (
        <>
            <Slot />
        </>
    );
});
