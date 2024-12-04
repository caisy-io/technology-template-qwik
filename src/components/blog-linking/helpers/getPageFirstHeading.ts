import type { IGenPage_Components, Maybe, Scalars } from "~/services/graphql/__generated/sdk";

type TPageComponents = Maybe<Array<Maybe<IGenPage_Components>>>;

type TRichText = Maybe<Scalars["JSON"]["output"]>;

export const getPageFirstHeading = (pageComponentsArr: TPageComponents): string | undefined => {
    const isValidComponentHeading = (key: string, value: any): boolean =>
        key !== "__typename" && key !== "id" && typeof value === "string" && !!value;

    const getHeadingInRichtext = (richtext: TRichText): string | undefined => {
        if (!richtext || !richtext.content) return undefined;
        return richtext.content.find((item) => item?.type === "heading")?.content?.[0]?.text;
    };

    for (const component of pageComponentsArr!) {
        for (const [componentObjKey, componentObjValue] of Object.entries(component!)) {
            if (isValidComponentHeading(componentObjKey, componentObjValue)) {
                return componentObjValue;
            }

            const headingFromRichText = getHeadingInRichtext(componentObjValue?.json);
            if (headingFromRichText) {
                return headingFromRichText;
            }
        }
    }

    return undefined; // If no title is found
};
