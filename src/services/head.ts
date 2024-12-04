import type { DocumentHeadValue } from "@builder.io/qwik-city";
import { handlePage } from "../hooks/useNavigation";
import type { IGenNavigation, IGenPage } from "./graphql/__generated/sdk";
import { LOCALES } from "./i18n";

const tranformUrlToRrightSize = (url: string) => {
    if (url) {
        const u = new URL(url);
        u.searchParams.set("w", "1200");
        u.searchParams.set("h", "630");
        return u.toString();
    }
    return url;
};

export const getDocumentHeadValue = (props: {
    Page?: null | IGenPage;
    locale: string;
    baseUrl: string;
    Navigation?: null | IGenNavigation;
}) => {
    const ogImageSrc = props.Page?.ogImage?.src;
    const ogImageAlt = props.Page?.ogImage?.description;

    return {
        ...(props.Page?.title && { title: props.Page?.title }),
        meta: [
            // Basic meta tags
            {
                charset: "UTF-8",
            },
            {
                name: "viewport",
                content: "width=device-width",
            },
            // Description tags
            props.Page?.description && {
                name: "description",
                content: props.Page?.description,
            },
            // Open Graph basic tags
            {
                property: "og:locale",
                content: props.locale,
            },
            {
                property: "og:type",
                content: "website",
            },
            props.Page?.title && {
                property: "og:title",
                content: props.Page?.title,
            },
            props.Page?.description && {
                property: "og:description",
                content: props.Page?.description,
            },
            // Twitter Card tags
            {
                name: "twitter:card",
                content: "summary_large_image",
            },
            props.Page?.title && {
                name: "twitter:title",
                content: props.Page?.title,
            },
            props.Page?.description && {
                name: "twitter:description",
                content: props.Page?.description,
            },
            // OG Image tags
            ogImageSrc && {
                property: "og:image:type",
                content: "image/jpeg",
            },
            ogImageSrc && {
                property: "og:image:width",
                content: "630",
            },
            ogImageSrc && {
                property: "og:image:height",
                content: "1200",
            },
            ogImageSrc && {
                property: "og:image",
                content: `${tranformUrlToRrightSize(ogImageSrc)}?f=jpeg&w=1200&h=630`,
            },
            ogImageSrc && {
                property: "og:image:secure_url",
                content: `${tranformUrlToRrightSize(ogImageSrc)}?f=jpeg&w=1200&h=630`,
            },
            ogImageSrc && {
                name: "twitter:image",
                content: `${tranformUrlToRrightSize(ogImageSrc)}?f=jpeg&w=1200&h=630`,
            },
            ogImageAlt && {
                property: "og:image:alt",
                content: ogImageAlt,
            },
            // NoIndex if specified
            props.Page?.noIndex && {
                name: "robots",
                content: "noindex, nofollow",
            },
        ].filter(Boolean),
        links: [
            {
                rel: "icon",
                type: "image/svg+xml",
                href: "/favicon.svg",
            },
            // Canonical and alternate language links
            props.Page && {
                rel: "canonical",
                href: `${props.baseUrl}${handlePage({ page: props.Page, currentUrl: new URL("https://example.com"), homePage: props.Navigation?.homePage, currentLocale: props.locale }).href}`,
            },
            ...LOCALES.filter((l) => l != props.locale && !!props.Page)
                .map((l) => ({
                    rel: "alternate",
                    hreflang: l,
                    href: `${props.baseUrl}${handlePage({ page: props.Page!, currentUrl: new URL("https://example.com"), homePage: props.Navigation?.homePage, currentLocale: l }).href}`,
                }))
                .filter(Boolean),
        ].filter(Boolean),
    } as DocumentHeadValue;
};
