/* eslint-disable qwik/no-use-visible-task */
import { FancyImage } from "@/common-components/fancy-image/FancyImage";
import { Fulltext } from "@/common-components/fulltext/Fulltext";
import LinesBackground from "@/common-components/line-parts/LinesBackground";
import LinesTop from "@/common-components/line-parts/LinesTop";
import SmallCrossWithCircle from "@/common-components/small-cross/SmallCrossWithCircle";
import { gridLayout, gridMaxWidth, gridPadding } from "@/constants/grid";
import type { IGenFulltextWithHeader } from "@/services/graphql/__generated/sdk";
import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { inViewBlurLeft, inViewFade } from "~/constants/animationInView";
import { getInspectProps } from "../../utils/getInspectProps";

interface Props extends IGenFulltextWithHeader {
    componentIndex: number;
}

export const FulltextWithHeader = component$<Props>(({ componentIndex, headerHeadline, headerImage, id, text }) => {
    return (
        <div class="fulltext relative overflow-hidden bg-white">
            <LinesBackground theme="light" />
            <LinesTop theme="light" />
            <div class={cn(gridPadding, "z-10")}>
                <div data-animate={componentIndex > 0} class={cn(gridMaxWidth, gridLayout, inViewFade)}>
                    {headerImage && (
                        <div
                            class={cn(
                                "relative col-span-4 -ml-2 -mr-2 silver:col-span-6 silver:col-start-2 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-2",
                            )}
                        >
                            <div
                                {...getInspectProps({ id, fieldName: "headerImage", key: headerImage })}
                                class="relative z-10 h-full w-full p-2 silver:p-5"
                            >
                                <FancyImage
                                    img={headerImage}
                                    responsiveAspectRatio={{
                                        bronze: 343 / 276,
                                        silver: 535 / 436,
                                        gold: 1006 / 436,
                                        platinum: 1181 / 513,
                                    }}
                                />
                                <div class="absolute inset-0 z-20 p-2 silver:p-5">
                                    <div
                                        class="h-full w-full"
                                        style={{
                                            background:
                                                "linear-gradient(to left, rgba(0, 0, 0, 0.40), rgba(0, 0, 0, 0.40))",
                                        }}
                                    />
                                </div>
                                {headerHeadline && (
                                    <div class="absolute inset-0 z-30 flex items-center justify-center">
                                        <h2
                                            {...getInspectProps({
                                                id,
                                                fieldName: "headerImage",
                                                key: headerHeadline,
                                            })}
                                            class={cn(
                                                "px-7 text-center font-montserrat text-[26px] font-semibold tracking-[-0.26px] text-white opacity-[var(--sds-size-stroke-border)]",
                                                "silver:px-12 silver:text-[42px] silver:tracking-[-0.42px]",
                                                "gold:px-[280px]",
                                                "gold:px-[330px] platinum:text-5xl platinum:tracking-[-0.48px]",
                                            )}
                                        >
                                            <AnimatedHeadline
                                                headline={headerHeadline}
                                                componentIndex={componentIndex}
                                                isTextCentered
                                            />
                                        </h2>
                                    </div>
                                )}
                            </div>
                            <div class="border-b border-solid border-slate-200" />
                            <div class="absolute bottom-0 left-0 z-20">
                                <SmallCrossWithCircle />
                            </div>
                            <div class="absolute bottom-0 right-0 z-20">
                                <SmallCrossWithCircle />
                            </div>
                        </div>
                    )}
                    <div class="col-span-4 silver:col-span-6 silver:col-start-2 gold:col-span-10 gold:col-start-2 gold:-ml-5 gold:-mr-5">
                        {text?.json && (
                            <>
                                <div
                                    class={cn(
                                        "pointer-events-none relative flex h-5 w-full items-center justify-center opacity-100 silver:h-12 gold:h-20",
                                    )}
                                >
                                    <div class="z-10 h-full w-px bg-slate-200" />
                                    <div class="absolute top-0 z-20">
                                        <SmallCrossWithCircle />
                                    </div>
                                </div>
                                <div
                                    class={cn(
                                        "flex items-center justify-center",
                                        "gold:grid gold:grid-cols-[1fr,auto,1fr] gold:items-start",
                                    )}
                                >
                                    <div class="relative hidden h-full gold:block">
                                        <div class="absolute inset-x-0 top-32 h-px bg-slate-200">
                                            <div class="absolute left-0 top-0 z-20">
                                                <SmallCrossWithCircle />
                                            </div>
                                            <div class="absolute right-0 top-0 z-20">
                                                <SmallCrossWithCircle />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="max-w-prose">
                                        <article
                                            data-animate={componentIndex > 0}
                                            {...getInspectProps({ id, fieldName: "text", key: text })}
                                            class={cn(
                                                "lg:prose-xl prose rounded-[20px] border border-solid border-slate-200 p-5",
                                                inViewBlurLeft,
                                            )}
                                        >
                                            <Fulltext text={text} componentIndex={componentIndex} />
                                        </article>
                                    </div>

                                    <div class="relative hidden h-full gold:block">
                                        <div class="absolute inset-x-0 top-32 h-px bg-slate-200">
                                            <div class="absolute left-0 top-0 z-20">
                                                <SmallCrossWithCircle />
                                            </div>
                                            <div class="absolute right-0 top-0 z-20">
                                                <SmallCrossWithCircle />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                        <div
                            class={cn(
                                "relative flex h-8 w-full items-center justify-center opacity-0 silver:h-16 silver:opacity-100",
                            )}
                        >
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
