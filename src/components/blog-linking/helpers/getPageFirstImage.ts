import type { IGenAsset, IGenPage_Components, Maybe } from "~/services/graphql/__generated/sdk";

type TPageComponents = Maybe<Array<Maybe<IGenPage_Components>>>;

export const getPageFirstImage = (pageComponentsArr: TPageComponents): IGenAsset | undefined => {
    const isAsset = (item) => item?.__typename === "Asset";

    const findAssetInConnections = (richtextConnectionsArr: any[]) => {
        return Array.isArray(richtextConnectionsArr) ? richtextConnectionsArr.find(isAsset) : undefined;
    };

    for (const component of pageComponentsArr!) {
        for (const componentObjValue of Object.values(component!)) {
            if (isAsset(componentObjValue)) {
                return componentObjValue;
            }

            const assetInConnections = findAssetInConnections(componentObjValue?.connections);
            if (assetInConnections) {
                return assetInConnections;
            }
        }
    }

    return undefined; // No image asset found
};
