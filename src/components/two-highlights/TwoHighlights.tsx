import Button from "@/common-components/button/Button";
import type { Component } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { inViewBlurLeft, inViewFade, inViewSlideLeft } from "~/constants/animationInView";
import LinesBackground from "../../common-components/line-parts/LinesBackground";
import LinesBottom from "../../common-components/line-parts/LinesBottom";
import LinesTop from "../../common-components/line-parts/LinesTop";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { useNavigation } from "../../hooks/useNavigation";
import type { IGenTwoHighlights } from "../../services/graphql/__generated/sdk";
import { getInspectProps } from "../../utils/getInspectProps";
import { cn } from "../../utils/tailwind-helper";
import Highlight from "./Highlight";

interface TwoHighlightsProps extends IGenTwoHighlights {
    componentIndex: number;
}

const TwoHighlights: Component<TwoHighlightsProps> = component$(
    ({ id, headline, highlights, text, buttonsBelowText, componentIndex }) => {
        const {getLink} = useNavigation();
        const highlightLeft = highlights?.[0];
        const highlightRight = highlights?.[1];
        const textJson = text?.json;

        return (
            <div class="two-highlights relative overflow-hidden">
                <div class="absolute h-full w-full">
                    <div class="pointer-events-none absolute top-0 z-10 h-full w-full overflow-hidden">
                        <div class="elipse-tr elipse-tr-gradient absolute left-[2%] top-0 h-[614px] w-[614px] rounded-[614px] opacity-30 blur-[157px] silver:left-1/2 gold:left-3/4 platinum:left-[60%]"></div>
                    </div>
                    <div class={cn(gridPadding, `h-full bg-primary-gradient`)}></div>
                </div>
                <LinesTop theme="dark" class="z-30" />
                <LinesBackground theme="dark" />
                <div class="text relative z-20">
                    <div class={cn(gridPadding)}>
                        <div
                            data-animate={componentIndex > 0}
                            class={cn(gridMaxWidth, gridLayout, `gap-x-5 gap-y-0`, inViewFade)}
                        >
                            <div class="col-span-4 justify-center silver:col-span-6 silver:col-start-2 silver:-ml-5 silver:-mr-5 gold:col-span-5 gold:col-start-2 gold:-ml-5 gold:-mr-2.5 gold:self-start">
                                <h1
                                    {...getInspectProps({ id, fieldName: "headline" })}
                                    class={cn(
                                        "px-0 pt-8 font-montserrat text-[36px] font-semibold leading-[normal] -tracking-[0.36px] text-white silver:px-5 silver:text-[42px] silver:-tracking-[0.42px] gold:text-[48px] gold:-tracking-[0.48px]",
                                    )}
                                >
                                    <AnimatedHeadline headline={headline} componentIndex={componentIndex} />
                                </h1>
                                <div class="h-6 w-full silver:h-8 gold:hidden"></div>
                                <div
                                    data-animate={componentIndex > 0}
                                    {...getInspectProps({ id, fieldName: "text" })}
                                    class={cn(
                                        "relative z-20 self-stretch text-base font-normal leading-6 tracking-normal text-slate-200 silver:px-5 gold:hidden",
                                        inViewSlideLeft,
                                        "[&.in-view]:motion-delay-[200ms]",
                                    )}
                                >
                                    {textJson && <RichTextRenderer node={textJson} />}
                                </div>
                                <div class="h-8 w-full silver:h-8 gold:hidden"></div>
                                <div
                                    data-animate={componentIndex > 0}
                                    {...getInspectProps({ id, fieldName: "buttonsBelowText" })}
                                    class={cn(
                                        "relative z-20 flex gap-4 silver:px-5 gold:hidden",
                                        inViewSlideLeft,
                                        "[&.in-view]:motion-delay-[200ms]",
                                    )}
                                >
                                    {buttonsBelowText?.map((button, index) => {
                                        const link = getLink(button);
                                        return (
                                            <a key={index} href={link.href}>
                                                <Button type={button?.type as any} label={button?.label} />
                                            </a>
                                        );
                                    })}
                                </div>
                                <div class="h-8 w-full silver:h-16 gold:h-12"></div>
                            </div>
                            <div
                                class={cn(
                                    "-ml-2.5 -mr-5 hidden self-start border-l border-solid border-slate-600 py-8 gold:col-span-5 gold:col-start-7 gold:block",
                                )}
                            >
                                <div
                                    data-animate={componentIndex > 0}
                                    {...getInspectProps({ id, fieldName: "text" })}
                                    class={cn(
                                        "relative z-20 self-stretch text-base font-normal leading-6 tracking-normal text-slate-200 silver:px-5",
                                        inViewBlurLeft,
                                        "[&.in-view]:motion-delay-[200ms]",
                                    )}
                                >
                                    {textJson && <RichTextRenderer node={textJson} />}
                                </div>
                                <div class="h-8 w-full silver:h-8"></div>
                                <div
                                    data-animate={componentIndex > 0}
                                    class={cn(
                                        "relative z-20 flex gap-4 silver:px-5",
                                        inViewSlideLeft,
                                        "[&.in-view]:motion-delay-[300ms]",
                                    )}
                                >
                                    {buttonsBelowText?.map((button, index) => {
                                        const link = getLink(button);
                                        return (
                                            <a key={index} href={link.href}>
                                                <Button type={button?.type as any} label={button?.label} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                            <div
                                {...getInspectProps({ id, fieldName: "highlights" })}
                                class="col-span-4 -ml-2 -mr-2 h-full silver:col-span-6 silver:col-start-2 silver:-ml-5 silver:-mr-5 gold:col-span-5 gold:col-start-2 gold:row-start-2 gold:-ml-5 gold:-mr-2.5"
                            >
                                {highlightLeft && (
                                    <Highlight {...highlightLeft} index={0} class="" componentIndex={componentIndex} />
                                )}
                            </div>
                            <div
                                {...getInspectProps({ id, fieldName: "highlights" })}
                                class="col-span-4 -ml-2 -mr-2 h-full silver:col-span-6 silver:col-start-2 silver:-ml-5 silver:-mr-5 gold:col-span-5 gold:col-start-7 gold:row-start-2 gold:-ml-2.5 gold:-mr-5"
                            >
                                {highlightRight && (
                                    <Highlight
                                        {...highlightRight}
                                        index={1}
                                        class="border-solid border-slate-600 gold:border-l"
                                        componentIndex={componentIndex}
                                    />
                                )}
                            </div>
                            <div class="col-span-4 h-0 justify-center silver:col-span-6 silver:col-start-2 gold:col-span-4 gold:col-start-2">
                                <div class="pointer-events-none relative z-10 h-0 w-full">
                                    <div class="elipse-bl absolute -right-4 top-16 h-[668px] w-[668px] overflow-hidden rounded-[908px] bg-elipse-bl-gradient opacity-30 blur-[157px] silver:-top-40 silver:right-2 silver:h-[908px] silver:w-[908px] gold:-right-[100px] gold:-top-[360px] platinum:-top-[360px] platinum:right-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LinesBottom theme="dark" />
            </div>
        );
    },
);

export default TwoHighlights;
