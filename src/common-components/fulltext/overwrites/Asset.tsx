import { component$ } from "@builder.io/qwik";

import type { IGenAsset } from "@/services/graphql/__generated/sdk";
import FancyImage from "../../../common-components/fancy-image/FancyImage";
export interface AssetProps extends IGenAsset {
    componentIndex: number;
}

export const Asset = component$<AssetProps>(({ componentIndex, ...props }) => {
    return (
        <>
            {props?.src && (
                <div class="richtext-image not-prose mt-6 flex flex-wrap items-center justify-center overflow-hidden">
                    <FancyImage img={props} class="w-full" lazyload={componentIndex > 0} />
                    {props?.description && (
                        <label class="mt-3 block text-center text-xs text-gray-400">{props.description}</label>
                    )}
                </div>
            )}
        </>
    );
});
