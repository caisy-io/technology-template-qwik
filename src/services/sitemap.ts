import type { RequestHandler } from "@builder.io/qwik-city";
import { getFullSlugFromPage } from "../utils/getFullSlugFromPage";
import { getAllPages } from "./content/getAllPages";
import { getSdkWithEnv } from "./graphql/getSdk";
import { DEFAULT_LOCALE, LOCALES } from "./i18n";

export const onGetSitemap: RequestHandler = async (ev) => {
    const { headers, url } = ev.request;
    const host = headers.get("host") || url.split("/")[2];
    const locale = DEFAULT_LOCALE;
    const env = ev.env;
    const caisySDK = getSdkWithEnv(env!);

    const baseUrl = `https://${host}`;

    const navigationRequest = caisySDK.Navigation({ locale });

    const [allPages] = await Promise.all([getAllPages({ env, locale })]);
    const navigation = (await navigationRequest)?.Navigation;

    const sitemap = [
        `<?xml version="1.0" encoding="UTF-8"?>`,
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">`,
        ...allPages
            .map((Page) => {
                const { _meta } = Page;
                if (Page.slug === navigation?.homePage?.slug) {
                    return {
                        slug: "",
                        _meta,
                        priority: 1,
                    };
                }

                const slug = getFullSlugFromPage(Page);
                const amountOfSlashes = slug.split("/").length - 1;
                const priority = 0.9 - amountOfSlashes * 0.1;
                return {
                    slug,
                    _meta,
                    priority,
                };
            })
            .filter(({ slug }) => slug !== navigation?.notFoundPage?.slug)
            .sort((a, b) => {
                return a?.priority > b?.priority ? -1 : 1;
            })
            .map(({ slug, _meta, priority }) => {
                const defaultLangUrl = slug == "" ? baseUrl : `${baseUrl}/${slug}`;
                let alternateString = "";
                LOCALES.filter((lang) => lang !== DEFAULT_LOCALE).forEach((lang) => {
                    const langUrl = `${baseUrl}/${lang}${slug == "" ? "" : `/${slug}`}`;
                    alternateString += `<xhtml:link rel="alternate" hreflang="${lang}" href="${langUrl}"/>`;
                });

                return (
                    `<url>` +
                    `<loc>${defaultLangUrl}</loc>` +
                    alternateString +
                    `<lastmod>${new Date(_meta?.publishedAt).toISOString()}</lastmod>` +
                    `<changefreq>weekly</changefreq>` +
                    `<priority>${priority}</priority>` +
                    `</url>`
                );
            }),
        `</urlset>`,
    ].join("\n");

    console.log(` allPages.length`, allPages.length);
    console.log(` sitemap`, sitemap);

    const response = new Response(sitemap, {
        status: 200,
        headers: {
            "content-type": "text/xml",
            "cache-control": `max-age=${60 * 60 * 1}`,
        },
    });

    ev.send(response);
};
