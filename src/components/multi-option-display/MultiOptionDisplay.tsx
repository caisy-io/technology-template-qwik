import LinesBackground from "@/common-components/line-parts/LinesBackground";
import LinesBottom from "@/common-components/line-parts/LinesBottom";
import LinesTop from "@/common-components/line-parts/LinesTop";
import { gridLayout, gridMaxWidth, gridPadding } from "@/constants/grid";
import type { IGenMultiOptionDisplay } from "@/services/graphql/__generated/sdk";
import { component$ } from "@builder.io/qwik";

import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { inViewBlurLeft } from "~/constants/animationInView";
import { cn } from "~/utils/tailwind-helper";
import { getInspectProps } from "../../utils/getInspectProps";
import OptionDisplay from "./display-option/OptionDisplay";

interface Props extends IGenMultiOptionDisplay {
    componentIndex: number;
}

export const MultiOptionDisplay = component$<Props>(({ id, componentIndex, headline, optionsDisplay, text }) => {
    const theme = "light";

    return (
        <div class="multi-option-display relative overflow-hidden bg-white">
            <LinesBackground theme={theme} />
            <LinesTop theme={theme} />
            <div class="h-12 w-full silver:h-16 gold:h-12"></div>
            <div class={gridPadding}>
                <div class={`${gridMaxWidth} ${gridLayout} h-full`}>
                    <div class="col-span-4 silver:col-span-6 silver:col-start-2 gold:col-span-10 gold:col-start-2">
                        {headline && (
                            <h1
                                {...getInspectProps({ id, fieldName: "headline" })}
                                class="text-center font-montserrat text-[36px] font-semibold leading-[normal] -tracking-[0.36px] text-gray-800 silver:text-[42px] silver:-tracking-[0.42px] gold:text-[48px] gold:-tracking-[0.48px]"
                            >
                                <AnimatedHeadline headline={headline} componentIndex={componentIndex} isTextCentered />
                            </h1>
                        )}
                        <div class="h-2.5 w-full silver:h-8 gold:h-2.5"></div>
                        {text?.json && (
                            <div
                                data-animate={componentIndex > 0}
                                {...getInspectProps({ id, fieldName: "text", key: text?.json })}
                                class={cn(
                                    "font-sans text-[16px] font-normal leading-[150%] tracking-normal text-gray-500 [&_>*]:!text-center",
                                    inViewBlurLeft,
                                    "[&.in-view]:motion-delay-[400ms]",
                                )}
                            >
                                <RichTextRenderer node={text.json} />
                            </div>
                        )}
                        <div class="h-4 w-full silver:h-9 gold:h-12"></div>
                        <OptionDisplay
                            {...getInspectProps({ id, fieldName: "optionsDisplay", key: optionsDisplay })}
                            optionsDisplay={optionsDisplay}
                            componentIndex={componentIndex}
                            theme={theme}
                        />
                    </div>
                </div>
            </div>
            <LinesBottom theme={theme} bottomRight />
            <div class="flex h-8 w-full items-center justify-center silver:h-20 gold:h-24">
                <div class="-ml-[1px] hidden h-full w-px bg-slate-200 silver:block"></div>
            </div>
        </div>
    );
});
