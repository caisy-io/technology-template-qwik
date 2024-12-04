import type { IGenPage_Components, Maybe, Scalars } from "~/services/graphql/__generated/sdk";

type TPageComponents = Maybe<Array<Maybe<IGenPage_Components>>>;

type TRichText = Maybe<Scalars["JSON"]["output"]>;

const getRichtextsFromPageComponents = (pageComponents: TPageComponents) => {
    const richtextArr: TRichText[] = [];

    function collectRichtext(componentsArr: TPageComponents) {
        componentsArr?.forEach((component) => {
            for (const componentObjKey in component) {
                const componentObjValue = component?.[componentObjKey];
                if (componentObjValue?.json) {
                    richtextArr.push(componentObjValue.json);
                } else if (Array.isArray(componentObjValue)) {
                    collectRichtext(componentObjValue);
                }
            }
        });
    }

    collectRichtext(pageComponents);
    return richtextArr;
};

const getPlainTextFromRichTextArr = (richtextArr: TRichText[]) => {
    const textArr: String[] = [];

    function getText(richTextArray: TRichText[]) {
        richTextArray?.forEach((item) => {
            const itemText = item?.text;
            const itemContent = item?.content;
            if (itemText) {
                textArr.push(itemText);
            } else if (Array.isArray(itemContent)) {
                getText(itemContent);
            }
        });
    }

    getText(richtextArr);
    return textArr.join(" ").split(" ");
};

export const getPageReadTime = (pageComponents: TPageComponents): number => {
    const richtextArr = getRichtextsFromPageComponents(pageComponents);
    const plainText = getPlainTextFromRichTextArr(richtextArr);

    // 200 words is the human average reading speed per minute
    // ref: https://www.irisreading.com/what-is-the-average-reading-speed/
    return Math.round(plainText.length / 200);
};
