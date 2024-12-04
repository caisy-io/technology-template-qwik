import type { IGenLinkedPageFragment, IGenPage } from "../services/graphql/__generated/sdk";

export const getFullSlugFromPage = (page: IGenLinkedPageFragment | IGenPage): string => {
    if (page === null) {
        return "";
    }

    const slugParts: string[] = [];
    let currentPage: IGenLinkedPageFragment | IGenPage | null = page;

    while (currentPage && currentPage.slug) {
        slugParts.unshift(currentPage.slug); // Add the current page's slug to the beginning of the array
        currentPage = currentPage.parentPage as IGenLinkedPageFragment | null;
    }

    // Join all parts with '/' and remove any leading or trailing slashes
    return slugParts.join("/").replace(/^\/+|\/+$/g, "");
};
