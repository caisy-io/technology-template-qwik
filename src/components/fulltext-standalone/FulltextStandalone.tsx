import LinesBackground from "@/common-components/line-parts/LinesBackground";
import LinesTop from "@/common-components/line-parts/LinesTop";
import { gridLayout, gridMaxWidth, gridPadding } from "@/constants/grid";
import type { IGenFulltextStandalone } from "@/services/graphql/__generated/sdk";
import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";
import { inViewBlurLeft } from "~/constants/animationInView";
import { Fulltext } from "../../common-components/fulltext/Fulltext";
import LinesBottom from "../../common-components/line-parts/LinesBottom";
import { getInspectProps } from "../../utils/getInspectProps";

interface Props extends IGenFulltextStandalone {
    componentIndex: number;
}

export const FulltextStandalone = component$<Props>(({ id, text, componentIndex }) => {
    return (
        <div class="fulltext relative overflow-hidden bg-white">
            <LinesBackground theme="light" />
            <LinesTop theme="light" />
            <div class={cn(gridPadding, "z-10")}>
                <div class={cn(gridMaxWidth, gridLayout)}>
                    <div
                        {...getInspectProps({ id, fieldName: "text" })}
                        class="col-span-4 silver:col-span-6 silver:col-start-2 gold:col-span-8 gold:col-start-2 gold:-ml-5 gold:-mr-5"
                    >
                        {text?.json && (
                            <>
                                <div
                                    class={cn(
                                        "flex items-center justify-center",
                                        "gold:grid gold:items-start",
                                        "flex items-center justify-start",
                                        "gold:pt-10",
                                    )}
                                >
                                    <article
                                        data-animate={componentIndex > 0}
                                        class={cn("prose w-full p-5 gold:prose-xl gold:max-w-none", inViewBlurLeft)}
                                    >
                                        <Fulltext text={text} componentIndex={componentIndex} />
                                    </article>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <LinesBottom theme="light" bottomRight />
        </div>
    );
});
