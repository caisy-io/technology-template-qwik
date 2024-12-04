import Button from "@/common-components/button/Button";
import Fact from "@/common-components/fact-item/FactItem"; // Note: Convert to Qwik component
import FancyImage from "@/common-components/fancy-image/FancyImage"; // Note: Convert to Qwik component
import SmallCrossWithCircle from "@/common-components/small-cross/SmallCrossWithCircle"; // Note: Convert to Qwik component
import type { IGenFacts } from "@/services/graphql/__generated/sdk";
import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer"; // Note: Find Qwik-compatible rich text renderer
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import RoundLineLeft from "~/common-components/round-lines/RoundLineLeft"; // Note: Convert to Qwik component
import { inViewBlurLeft, inViewFade, inViewSlideLeft } from "~/constants/animationInView";
import { gridLayout, gridMaxWidth, gridPadding } from "~/constants/grid";
import { firstLineLeft, firstLineRight } from "~/constants/lines";
import { BREAKPOINTS } from "~/constants/mediaquery";
import { useNavigation } from "../../hooks/useNavigation";
import { getInspectProps } from "../../utils/getInspectProps";

interface FactsProps extends IGenFacts {
    componentIndex: number;
}

export const Facts = component$<FactsProps>(({ button, id, factItems, headline, image, text, componentIndex }) => {
    const {getLink} = useNavigation();
    const buttonLink = getLink(button);

    return (
        <div class="facts relative overflow-hidden bg-white">
            {/* background and lines layout*/}
            <div class="absolute inset-0">
                {/* most outer bg lines */}
                <div class={cn(firstLineLeft, "h-full bg-slate-200")}></div>
                <div class={cn(firstLineRight, "h-full bg-slate-200")}></div>
                {/* background content lines */}
                <div class={cn(gridPadding, "h-full")}>
                    <div data-animate={componentIndex > 0} class={cn(gridMaxWidth, gridLayout, "h-full", inViewFade)}>
                        {/* Left outer column */}
                        <div class="col-span-1 hidden h-full w-full border-r border-slate-200 silver:block"></div>

                        {/* center column */}
                        <div class="col-span-10 col-start-2 hidden h-full w-px justify-self-center bg-slate-200 gold:block"></div>

                        {/* Right outer column */}
                        <div class="col-span-1 col-start-4 hidden h-full border-l border-slate-200 silver:col-start-8 silver:block gold:col-start-12"></div>
                    </div>
                </div>
            </div>
            {/* top bg style with lines */}
            <div class={cn(gridPadding, "h-9 w-full silver:h-12 gold:h-16")}>
                <div class={cn(gridMaxWidth, gridLayout, "h-full")}>
                    <RoundLineLeft theme="light" />
                    <div class="relative col-span-4 -ml-2 -mr-2 h-full border-b border-solid border-slate-200 silver:col-span-6 silver:col-start-2 silver:m-0 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-2">
                        <div class="absolute bottom-0 left-0 z-20">
                            <SmallCrossWithCircle />
                        </div>
                        <div class="hidden h-full justify-center silver:flex">
                            <div class="z-10 h-full w-px bg-slate-200 gold:hidden"></div>
                            <div class="absolute bottom-0 z-20">
                                <SmallCrossWithCircle />
                            </div>
                        </div>
                        <div class="absolute bottom-0 right-0 z-20">
                            <SmallCrossWithCircle />
                        </div>
                    </div>
                </div>
            </div>
            {/* spacer */}
            <div class="h-8 w-full silver:h-[42px] gold:h-2"></div>
            {/* content */}
            <div class={cn(gridPadding, "relative z-10")}>
                {/* Grid layout */}
                <div class={cn(gridMaxWidth, gridLayout)}>
                    {/* Left Section */}
                    <div class="col-span-4 h-full pb-8 silver:col-span-6 silver:col-start-2 silver:pb-12 gold:col-span-5 gold:col-start-2 gold:pb-0">
                        <div class="grid h-full grid-cols-1">
                            {/* Title and text */}
                            <div
                                class={cn(
                                    "text-content flex flex-col gap-8 gold:gap-7",
                                    factItems && factItems.length > 0
                                        ? "self-end pb-8 silver:pb-6 gold:pb-0"
                                        : "my-auto",
                                )}
                            >
                                {headline && (
                                    <h1
                                        {...getInspectProps({ id, fieldName: "headline" })}
                                        class="headline font-montserrat text-[36px] font-semibold leading-[normal] tracking-[-0.36px] text-gray-800 silver:text-[42px] silver:tracking-[-0.42px] gold:text-[48px] gold:tracking-[-0.48px]"
                                    >
                                        <AnimatedHeadline headline={headline} componentIndex={componentIndex} />
                                    </h1>
                                )}

                                {text?.json && (
                                    <div
                                        data-animate={componentIndex > 0}
                                        {...getInspectProps({ id, fieldName: "text" })}
                                        class={cn(
                                            "text font-sans text-base font-normal tracking-normal text-gray-500 platinum:w-[80%]",
                                            inViewBlurLeft,
                                            "[&.in-view]:motion-delay-[600ms]",
                                        )}
                                    >
                                        <RichTextRenderer node={text.json} />
                                    </div>
                                )}
                            </div>
                            {/* Fact Items */}
                            {factItems && factItems.length > 0 && (
                                <div
                                    {...getInspectProps({ id, fieldName: "factItems" })}
                                    class={cn(
                                        "fact__items relative flex flex-wrap items-baseline self-end silver:flex-nowrap",
                                        factItems.length === 1 ? "justify-center" : "justify-between",
                                    )}
                                >
                                    {/* Top/Bottom Lines with Silver breakpoint stars */}
                                    <div class="absolute inset-0 -mx-2 border-b border-t border-solid border-slate-200 silver:-mx-5 gold:-mr-[10px] gold:border-b-0">
                                        {/* Stars at Silver */}
                                        <div class="gold:hidden">
                                            {/* bottom left */}
                                            <div class="absolute bottom-0 left-0 z-10">
                                                <SmallCrossWithCircle />
                                            </div>
                                            {/* top left */}
                                            <div class="absolute left-0 top-0 z-10 silver:hidden">
                                                <SmallCrossWithCircle />
                                            </div>
                                            {/* center */}
                                            <div class="hidden h-full justify-center silver:flex">
                                                <div class="absolute bottom-0 z-10">
                                                    <SmallCrossWithCircle />
                                                </div>
                                            </div>
                                            {/* top right */}
                                            <div class="absolute right-0 top-0 silver:hidden">
                                                <SmallCrossWithCircle />
                                            </div>
                                            {/* bottom right */}
                                            <div class="absolute bottom-0 right-0 z-10">
                                                <SmallCrossWithCircle />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Middle line at bronze */}
                                    {factItems.length > 2 && (
                                        <div class="absolute -left-2 top-1/2 h-px w-[calc(100%_+_16px)] bg-slate-200 silver:hidden" />
                                    )}
                                    {/* Items */}
                                    {factItems.map(
                                        (item, index) =>
                                            item && (
                                                <div
                                                    key={index}
                                                    class={cn(
                                                        "relative",
                                                        factItems.length === 1 ? "w-auto" : "w-1/2 silver:w-full",
                                                    )}
                                                >
                                                    <Fact
                                                        componentIndex={componentIndex}
                                                        {...item}
                                                        theme="light"
                                                        class={cn(
                                                            index !== factItems.length - 1 &&
                                                                "border-r border-solid border-slate-200 gold:border-r-0",
                                                            factItems.length > 2 &&
                                                                (index + 1) / 2 === 1 &&
                                                                "border-r-0 silver:border-r",
                                                        )}
                                                    />
                                                    {index !== factItems.length - 1 && (
                                                        <div class="absolute right-0 top-0 hidden h-[calc(100%_+_8px)] w-px bg-slate-200 gold:block" />
                                                    )}
                                                </div>
                                            ),
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Right Section */}
                    {image && image.src && (
                        <div
                            {...getInspectProps({ id, fieldName: "image" })}
                            class="col-span-4 silver:col-span-6 silver:col-start-2 gold:col-span-5 gold:col-start-7"
                        >
                            {/* Image and Button */}
                            <div data-animate={componentIndex > 0} class={cn("relative gold:-mr-2.5", inViewFade)}>
                                <FancyImage
                                    img={image}
                                    responsiveAspectRatio={{
                                        bronze: 343 / 313,
                                        silver: 535 / 453,
                                        gold: 501 / 453,
                                        platinum: 576 / 443,
                                    }}
                                    lazyload={componentIndex > 0}
                                    responsiveMaxWidth={{ platinum: BREAKPOINTS.PLATINUM / 2 }}
                                    responsiveFactor={{ bronze: 1, gold: 1 / 2 }}
                                />
                                {button && button.label && (
                                    <div
                                        data-animate={componentIndex > 0}
                                        class={cn(
                                            "absolute -bottom-7 right-4 z-30 flex justify-center silver:right-10 platinum:right-16",
                                            inViewSlideLeft,
                                            "[&.in-view]:motion-delay-[200ms]",
                                        )}
                                    >
                                        <a href={buttonLink.href}>
                                            <Button type="special" label={button.label} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* spacer */}
            <div class="h-9 w-full silver:h-[89px] gold:h-2"></div>
            {/* bottom bg style with lines */}
            <div class={cn(gridPadding, "h-9 w-full silver:h-12 gold:h-16")}>
                <div class={cn(gridMaxWidth, gridLayout, "h-full")}>
                    <div class="relative col-span-4 -ml-2 -mr-2 h-full border-t border-solid border-slate-200 silver:col-span-6 silver:col-start-2 silver:m-0 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-2">
                        <div class="absolute left-0 top-0 z-20">
                            <SmallCrossWithCircle />
                        </div>
                        <div class="hidden h-full justify-center silver:flex">
                            <div class="z-10 h-full w-px bg-slate-200 gold:hidden"></div>
                            <div class="absolute top-0 z-20">
                                <SmallCrossWithCircle />
                            </div>
                        </div>
                        <div class="absolute right-0 top-0 z-20">
                            <SmallCrossWithCircle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Facts;
