import Fact from "@/common-components/fact-item/FactItem";
import type { IGenHighlight } from "@/services/graphql/__generated/sdk";
import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { inViewFade, inViewSlideLeft } from "~/constants/animationInView";
import { BREAKPOINTS } from "~/constants/mediaquery";
import FancyImage from "../../common-components/fancy-image/FancyImage";
import CornerCrosses from "./CornerCrosses";

interface HighlightProps extends IGenHighlight {
    index?: number;
    class: string;
    componentIndex: number;
}

const Highlight = component$<HighlightProps>(
    ({ image, headline, text, facts, index, class: className, componentIndex }) => {
        return (
            <div class={cn("flex h-full flex-col", className)}>
                {image && (
                    <div class="image relative w-full border-b border-t border-solid border-slate-600 p-2 silver:p-5 gold:p-2">
                        <CornerCrosses index={0} highlightIndex={index} />
                        <div data-animate={componentIndex > 0} class={cn(inViewFade)}>
                            <FancyImage
                                img={image}
                                lazyload={true}
                                responsiveAspectRatio={{
                                    bronze: 343 / 276,
                                    silver: 535 / 346,
                                    gold: 500 / 346,
                                    platinum: 588 / 381,
                                }}
                                responsiveFactor={{ bronze: 1, gold: 1 / 2 }}
                                responsiveMaxWidth={{
                                    platinum: BREAKPOINTS.PLATINUM / 2,
                                }}
                            />
                        </div>
                    </div>
                )}
                <div
                    class={cn(
                        "text relative h-full w-full border-b border-solid border-slate-600 px-2 py-6 silver:px-5",
                        !image && "border-t",
                    )}
                >
                    <CornerCrosses index={!image ? 0 : 1} highlightIndex={index} />
                    <h2 class="font-montserrat text-[26px] font-semibold leading-normal tracking-[-0.26px] text-white">
                        <AnimatedHeadline headline={headline} componentIndex={componentIndex} />
                    </h2>
                    <div class="h-6 w-full gold:hidden"></div>
                    <div
                        data-animate={componentIndex > 0}
                        class={cn(
                            "relative text-base font-normal leading-6 tracking-normal text-slate-200",
                            inViewSlideLeft,
                            "[&.in-view]:motion-delay-[200ms]",
                        )}
                    >
                        {text?.json && <RichTextRenderer node={text.json} />}
                    </div>
                </div>
                <div class="facts relative flex w-full flex-wrap justify-between">
                    <CornerCrosses index={!image ? 1 : 2} highlightIndex={index} />
                    {facts?.map((fact, factIndex) => (
                        <div
                            key={factIndex}
                            class={cn(
                                "min-w-[50%] border-solid silver:min-w-[33.33%]",
                                factIndex === 1 && "border-l border-slate-600 silver:border-l-0",
                                (factIndex === 0 || factIndex === 1) &&
                                    "border-b border-slate-600 silver:border-b-0 silver:border-r",
                            )}
                        >
                            <Fact {...fact} theme="dark" componentIndex={componentIndex} />
                        </div>
                    ))}
                </div>
            </div>
        );
    },
);

export default Highlight;
