import type { RequestHandler } from "@builder.io/qwik-city";
import { getFullSlugFromPage } from "../utils/getFullSlugFromPage";
import { getAllPages } from "./content/getAllPages";
import { DEFAULT_LOCALE, LOCALES } from "./i18n";

export const onGetRobots: RequestHandler = async (ev) => {
    const { headers, url } = ev.request;
    const host = headers.get("host") || url.split("/")[2];
    const baseUrl = `https://${host}`;

    const locale = DEFAULT_LOCALE;
    const env = ev.env;
    const [allPages] = await Promise.all([getAllPages({ env, locale })]);
    const noIndexPages = allPages.filter((page) => page.noIndex);

    let noIndexLines = "";

    noIndexPages.forEach((page) => {
        const slug = getFullSlugFromPage(page);

        LOCALES.filter((lang) => lang !== DEFAULT_LOCALE).forEach((lang) => {
            noIndexLines += `Disallow: /${lang}/${slug}\n`;
        });

        noIndexLines += `Disallow: /${slug}\n`;
    });

    const body = `
User-agent: *
Allow: /

Disallow: /api/
Disallow: /v1/
${noIndexLines}

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml
`;

    const response = new Response(body, {
        status: 200,
        headers: {
            "content-type": "text/plain",
        },
    });

    ev.send(response);
};
