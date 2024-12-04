import Button from "@/common-components/button/Button";
import LinesBackground from "@/common-components/line-parts/LinesBackground";
import LinesTop from "@/common-components/line-parts/LinesTop";
import SmallCrossWithCircle from "@/common-components/small-cross/SmallCrossWithCircle";
import TeaserGridBackgroundPattern from "@/icons/TeaserGridBackgroundPattern";
import type { IGenTeaserGrid } from "@/services/graphql/__generated/sdk";
import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { getCardsAnimationDelay, inViewBlurLeft, inViewFade, inViewSlideLeft } from "~/constants/animationInView";
import { gridLayout, gridMaxWidth, gridPadding } from "~/constants/grid";
import { useNavigation } from "../../hooks/useNavigation";
import { getInspectProps } from "../../utils/getInspectProps";
import GridItem from "./GridItem";

interface TeaserGridProps extends IGenTeaserGrid {
    componentIndex: number;
}

const TeaserGrid = component$<TeaserGridProps>(({ button, id, gridItems, headline, text, componentIndex }) => {
    const { getLink } = useNavigation();
    const buttonLink = getLink(button);

    return (
        <div class="teaser-grid relative overflow-hidden bg-white">
            {/* background and lines layout*/}
            <LinesBackground theme="light" />
            <LinesTop theme="light" rightRound={true} />

            {/* spacer */}
            <div class="h-8 w-full silver:h-[42px] gold:h-[69px]"></div>
            {/* content */}
            <div class={cn(gridPadding, "z-10")}>
                <div data-animate={componentIndex > 0} class={cn(gridMaxWidth, gridLayout, inViewFade)}>
                    <div class="teaser-grid__wrapper col-span-4 silver:col-span-6 silver:col-start-2 gold:col-span-10 gold:col-start-2">
                        <div class="text-content relative flex flex-col gap-8 pb-10 gold:pb-16">
                            {/* Background Pattern Vector */}
                            <div class="absolute -right-[10%] top-[25%] hidden gold:inline-block">
                                <TeaserGridBackgroundPattern />
                            </div>
                            {headline && (
                                <h1
                                    {...getInspectProps({ id, fieldName: "headline" })}
                                    class="headline z-10 font-montserrat text-[36px] font-semibold leading-[normal] tracking-[-0.36px] text-gray-800 silver:text-[42px] silver:tracking-[-0.42px] gold:w-[68%] gold:text-[48px] gold:tracking-[-0.48px] platinum:w-[58%]"
                                >
                                    <AnimatedHeadline headline={headline} componentIndex={componentIndex} />
                                </h1>
                            )}
                            <div
                                {...getInspectProps({ id, fieldName: "text" })}
                                class={cn("z-10 flex flex-col gap-6 gold:flex-row gold:justify-between")}
                            >
                                {text?.json && (
                                    <div
                                        data-animate={componentIndex > 0}
                                        class={cn(
                                            "text font-sans text-base font-normal tracking-normal text-gray-500 gold:w-[57%] platinum:w-[48%]",
                                            inViewBlurLeft,
                                            "[&.in-view]:motion-delay-[500ms]",
                                        )}
                                    >
                                        <RichTextRenderer node={text.json} />
                                    </div>
                                )}
                                <a
                                    data-animate={componentIndex > 0}
                                    href={buttonLink.href}
                                    class={cn("button", inViewSlideLeft, "[&.in-view]:motion-delay-[600ms]")}
                                >
                                    <Button type={button?.type as any} label={button?.label} />
                                </a>
                            </div>
                        </div>
                        {gridItems && gridItems.length > 0 && (
                            <div
                                {...getInspectProps({ id, fieldName: "gridItems" })}
                                class="cards__wrapper flex flex-col gap-6 gold:flex-row gold:gap-5"
                            >
                                {gridItems.map(
                                    (item, index) =>
                                        item &&
                                        item.image && (
                                            <div
                                                data-animate={componentIndex > 0}
                                                key={item.id}
                                                style={{ ...getCardsAnimationDelay(index) }}
                                                class={cn(inViewSlideLeft, "h-full w-full")}
                                            >
                                                <GridItem {...item} componentIndex={componentIndex} />
                                            </div>
                                        ),
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* spacer */}
            <div class="h-9 w-full silver:h-[49px] gold:h-[76px]"></div>
            {/* bottom bg style with lines */}
            <div class={cn(gridPadding, "h-9 w-full silver:h-12 gold:h-16")}>
                <div class={cn(gridMaxWidth, gridLayout, "h-full grid-flow-dense")}>
                    <div class="relative col-span-4 -ml-2 -mr-2 h-full border-t border-solid border-slate-200 silver:col-span-6 silver:col-start-2 silver:m-0 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-2">
                        <div class="absolute left-0 top-0 z-20">
                            <SmallCrossWithCircle />
                        </div>
                        <div class="absolute right-0 top-0 z-20">
                            <SmallCrossWithCircle />
                        </div>
                        <div class="hidden h-full justify-center silver:flex gold:col-span-10">
                            <div class="z-10 h-full w-px bg-slate-200"></div>
                            <div class="absolute top-0 z-20">
                                <SmallCrossWithCircle />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default TeaserGrid;
