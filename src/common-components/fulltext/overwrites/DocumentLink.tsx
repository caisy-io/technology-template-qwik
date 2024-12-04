import { component$ } from "@builder.io/qwik";
import type { IGenAsset } from "../../../services/graphql/__generated/sdk";
import { Asset } from "./Asset";

export const DocumentLink = component$<{ connections: any; node: any; componentIndex: number }>(
    ({ connections, node, componentIndex }) => {
        return (
            <>
                {connections?.map(
                    (component: IGenAsset) =>
                        component?.__typename == "Asset" &&
                        node?.attrs?.documentId == component.id && (
                            <Asset key={component.id} {...component} componentIndex={componentIndex} />
                        ),
                )}
            </>
        );
    },
);
