import type { IGenExternalLink, IGenPage } from "../services/graphql/__generated/sdk";

type Item = IGenPage | IGenExternalLink;

interface Group {
    name: string;
    items: Item[];
}

function isSplitter(item: any): boolean {
    return item && (item.__typename === "FooterSection" || item.__typename === "NavigationCategory");
}
export function groupItems(items: any[] | undefined | null): Group[] {
    if (!items) {
        return [];
    }

    const groups: Group[] = [];
    let currentGroup: Group | null = null;

    if (!items.some((item) => isSplitter(item))) {
        return [
            {
                name: "",
                items: items,
            },
        ];
    }

    for (const item of items) {
        if (isSplitter(item)) {
            if (currentGroup) {
                groups.push(currentGroup);
            }
            currentGroup = {
                name: item.name || "",
                items: [],
            };
        } else {
            if (!currentGroup) {
                currentGroup = {
                    name: "",
                    items: [],
                };
            }
            currentGroup.items.push(item);
        }
    }

    if (currentGroup) {
        groups.push(currentGroup);
    }

    return groups;
}
