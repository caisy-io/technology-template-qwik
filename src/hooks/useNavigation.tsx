import { useLocation } from "@builder.io/qwik-city";
import { useCMSData } from "../services/content/loader/useCMSData";
import type { IGenButton, IGenExternalLink, IGenPage } from "../services/graphql/__generated/sdk";
import { DEFAULT_LOCALE } from "../services/i18n";
import { getFullSlugFromPage } from "../utils/getFullSlugFromPage";
import { useCurrentLocale } from "./useCurrentLocale";

const ensureUrl = (url: string) => {
    if (!url) return url;
    if (!url.startsWith("http") && !url.startsWith("/")) {
        return `http://${url}`;
    }

    return url.replace("http://", "https://");
};

export const handlePage = ({
    page,
    currentUrl,
    homePage,
    currentLocale,
}: {
    page: IGenPage;
    currentUrl: URL;
    homePage?: IGenPage | null;
    currentLocale?: string;
}) => {
    const slug = getFullSlugFromPage(page);

    const unlocalizedHref = slug === "/" ? `/` : `/${slug}`;
    const href = currentLocale != DEFAULT_LOCALE ? `/${currentLocale}${unlocalizedHref}` : unlocalizedHref;

    const active = isHrefCurrentActive({ href, currentUrl, homePage, currentLocale });

    if (homePage && `/${homePage.slug}` === unlocalizedHref) {
        return {
            href: currentLocale == DEFAULT_LOCALE ? "/" : `/${currentLocale}`,
            name: page.name || page.slug || "",
            active,
            description: page.description ?? undefined,
        };
    }

    return { href, name: page.name || page.slug || "", active, description: page.description ?? undefined };
};

export function isHrefCurrentActive({
    href,
    currentUrl,
    homePage,
    currentLocale,
}: {
    href?: string;
    currentUrl: URL;
    homePage?: IGenPage | null;
    currentLocale?: string;
}): boolean {
    const currentUrlPathCleaned = currentUrl.pathname.replace(/\/$/, "");
    if (homePage) {
        const homePageDirctLink = handlePage({ page: homePage, currentUrl, currentLocale });
        if (currentUrlPathCleaned === homePageDirctLink.href?.replace(/\/$/, "")) {
            return true;
        }
        if (currentUrl.pathname === "/" && homePageDirctLink.href?.replace(/\/$/, "") === href?.replace(/\/$/, "")) {
            return true;
        }
    }

    return currentUrlPathCleaned === href?.replace(/\/$/, "");
}

export function withTitle(props: any) {
    let title: string | undefined = undefined;

    if (props.title) {
        title = props.title;
    }

    if (!title && props.name) {
        if ((props.name && props.name.length > 8) || !props.description) {
            title = props.name;
        }
    }

    if (!title && props.description) {
        title = props.description;

        if (title && title.length > 40) {
            title = title.substring(0, 40) + "...";
        }
    }

    return {
        ...props,
        title,
    };
}

export function useNavigation() {
    const location = useLocation();
    const cmsData = useCMSData();
    const homePage = cmsData.value?.Navigation?.homePage;
    const currentLocale = useCurrentLocale();

    const getLink = (
        element?: IGenPage | IGenExternalLink | IGenButton | null,
    ): {
        href?: string;
        target?: string;
        name: string;
        active?: boolean;
        description?: string;
    } => {
        if (element?.__typename === "Button") {
            const button = element as IGenButton;
            if (button.linkToPage) {
                return handlePage({ page: button.linkToPage, currentUrl: location.url, homePage, currentLocale });
            }
            if (button.externalLink && button.externalLink != "") {
                return { href: ensureUrl(button.externalLink), target: "_blank", name: button.label || "" };
            }
        }

        if (element?.__typename === "Page") {
            const page = element as IGenPage;
            return handlePage({ page, currentUrl: location.url, homePage, currentLocale });
        }

        if (element?.__typename === "ExternalLink") {
            const externalLink = element as IGenExternalLink;
            if (externalLink.linkAddress) {
                return { href: externalLink.linkAddress, target: "_blank", name: externalLink.name || "" };
            }
        }

        return { name: "" };
    };

    return {
        getLink: (...props) => withTitle(getLink(...props)),
        currentLocale,
    };
}
