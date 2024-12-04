import { getFullSlugFromPage } from "../../utils/getFullSlugFromPage";
import { getSdkWithEnv } from "../graphql/getSdk";
import { changePathLocale, DEFAULT_LOCALE, LOCALES } from "../i18n";

export enum EPageType {
    Default = 1,
    Blog = 2,
    Index = 3,
    NotFound = 4,
}

export const getPageType = (slug: string): EPageType => {
    if (slug === null || slug === undefined) {
        return EPageType.Index;
    }

    if (slug === "") {
        return EPageType.Index;
    }

    if (slug === "404") {
        return EPageType.NotFound;
    }

    if (!slug || LOCALES.includes(slug.replaceAll("/", ""))) {
        return EPageType.Index;
    }

    return EPageType.Default;
};

export const getProps = async ({
    slug: fullSlug,
    pageType = EPageType.Default,
    env,
    locale = "en",
}: {
    slug?: string;
    pageType?: EPageType;
    locale?: string;
    env?: any;
}) => {
    const slugParts = fullSlug?.split("/") ?? [];
    let slug: string | undefined = slugParts[slugParts.length - 1];
    if (slug === "" || LOCALES.includes(slug)) {
        slug = undefined;
    }

    const caisySDK = getSdkWithEnv(env);
    const navigationRequest = caisySDK.Navigation({ locale });
    const footerRequest = caisySDK.Footer({ locale });

    const Navigation = await navigationRequest;

    if (slug === undefined && pageType == EPageType.Index) {
        slug = Navigation?.Navigation?.homePage?.slug ?? undefined;
    }
    if (slug === undefined && pageType == EPageType.NotFound) {
        slug = Navigation?.Navigation?.notFoundPage?.slug ?? undefined;
    }

    if (slug === undefined) {
        return {
            is404: true,
            Navigation: Navigation?.Navigation,
            Footer: (await footerRequest).Footer,
            BlogArticle: null,
            Page: null,
        };
    }

    const getPage = async (slug: string, pageType: EPageType) => {
        return (
            (await caisySDK.allPageBySlug({ slug, locale }).then(
                (r) =>
                    r.allPage?.edges?.filter((edge) => {
                        if (pageType == EPageType.Index || pageType == EPageType.NotFound) {
                            return true;
                        }

                        const page = edge?.node;
                        const pageFullSlug = page && getFullSlugFromPage(page);

                        if (locale != DEFAULT_LOCALE) {
                            return (
                                pageFullSlug !=
                                changePathLocale({ path: fullSlug, currentLocale: locale, newLocale: DEFAULT_LOCALE })
                            );
                        }
                        return pageFullSlug === fullSlug;
                    })[0]?.node,
            )) ?? null
        );
    };

    let Page = await getPage(slug, pageType);

    const redirectHome =
        Page?.slug === Navigation?.Navigation?.homePage?.slug && Page?.slug && fullSlug?.includes(Page?.slug);

    const is404 = Page === null;

    if (is404 && Navigation?.Navigation?.notFoundPage?.slug) {
        Page = await getPage(Navigation?.Navigation.notFoundPage.slug, EPageType.NotFound);
    }

    return {
        redirectHome,
        is404,
        Navigation: Navigation?.Navigation,
        Footer: (await footerRequest).Footer,
        Page,
    };
};
