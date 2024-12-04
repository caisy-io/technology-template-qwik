import { routeLoader$ } from "@builder.io/qwik-city";
import { DEFAULT_LOCALE, LOCALES } from "../../i18n";
import { getPageType, getProps } from "../getProps";

// eslint-disable-next-line qwik/loader-location
export const useCMSData = routeLoader$(async (ev) => {
    const slug = ev.params.slug;
    const { headers, url } = ev.request;
    const host = headers.get("host") || url.split("/")[2];
    const env = ev.env;
    const baseUrl = `https://${host}`;
    const urlParams = ev.url.searchParams;

    const allowPreview = env.get("PUBLIC_ALLOW_PREVIEW");
    const projectId = allowPreview ? env.get("CAISY_PROJECT_ID") : null;
    const previewToken = allowPreview ? urlParams.get("caisy_preview_access_token") : null;
    const locale = !slug ? DEFAULT_LOCALE : slug && LOCALES.includes(slug.split("/")[0]) ? slug.split("/")[0] : DEFAULT_LOCALE;
    const props = await getProps({ pageType: getPageType(slug), locale, slug, env });

    if (props.is404) {
        ev.status(404);
    }

    if (slug && props.redirectHome) {
        if (locale == DEFAULT_LOCALE) {
            throw ev.redirect(302, "/");
        } else {
            throw ev.redirect(302, `/${locale}`);
        }
    }

    return { ...props, projectId, previewToken, baseUrl, locale };
});


