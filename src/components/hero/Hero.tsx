import Button from "@/common-components/button/Button";
import DarkBackground from "@/common-components/dark-background/DarkBackground";
import ElipseBottomLeft from "@/common-components/dark-background/ElipseBottomLeft";
import ElipseTopRight from "@/common-components/dark-background/ElipseTopRight";
import LinesBackground from "@/common-components/line-parts/LinesBackground";
import LinesBottom from "@/common-components/line-parts/LinesBottom";
import LinesTop from "@/common-components/line-parts/LinesTop";
import Cross from "@/common-components/small-cross/Cross";
import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { getCardsAnimationDelay, inViewBlurLeft, inViewFade, inViewSlideLeft } from "~/constants/animationInView";
import { BREAKPOINTS } from "~/constants/mediaquery";
import EmbededVideo from "../../common-components/embeded-video/EmbededVideo";
import { FancyImage } from "../../common-components/fancy-image/FancyImage";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { useNavigation } from "../../hooks/useNavigation";
import type { IGenHero } from "../../services/graphql/__generated/sdk";
import { getInspectProps } from "../../utils/getInspectProps";
import { cn } from "../../utils/tailwind-helper";

interface HeroProps extends IGenHero {
    componentIndex: number;
}

export const Hero = component$((props: HeroProps) => {
    const {getLink} = useNavigation();

    const { headline, id, text, buttonsBelowText, image, videoUrl, componentIndex } = props;
    const theme = "dark";

    return (
        <div class={cn("media-with-text relative overflow-hidden")}>
            <DarkBackground />
            <LinesBackground theme={theme} />
            <LinesTop theme={theme} />

            <div class="h-6 w-full silver:h-8 gold:hidden"></div>
            <div class="text relative z-30">
                <div class={cn(gridPadding)}>
                    <div
                        data-animate={componentIndex > 0}
                        class={cn(gridMaxWidth, gridLayout, "h-full grid-flow-dense gold:relative", inViewFade)}
                    >
                        <div class="z-40 col-span-4 h-full justify-center silver:col-span-6 silver:col-start-2 gold:absolute gold:inset-0 gold:col-span-5 gold:col-start-2 gold:pl-5 platinum:pl-12">
                            <div class="hidden h-[70px] w-full gold:block platinum:h-32"></div>
                            <h1
                                {...getInspectProps({ id, fieldName: "headline" })}
                                class="relative z-20 self-stretch font-montserrat text-[42px] font-semibold leading-[normal] -tracking-[0.42px] text-white silver:text-[48px] silver:-tracking-[0.48px] gold:text-[48px] gold:-tracking-[0.48px]"
                            >
                                <AnimatedHeadline headline={headline} componentIndex={componentIndex} />
                            </h1>
                            <div class="h-6 w-full silver:h-7"></div>
                            <div
                                data-animate={componentIndex > 0}
                                {...getInspectProps({ id, fieldName: "text" })}
                                class={cn(
                                    "relative z-20 self-stretch font-sans text-[16px] leading-[150%] tracking-normal text-slate-300",
                                    inViewBlurLeft,
                                    "[&.in-view]:motion-delay-[400ms]",
                                )}
                            >
                                {text?.json && <RichTextRenderer node={text?.json} />}
                            </div>
                            <div class="h-8 w-full silver:h-12"></div>
                            <div
                                {...getInspectProps({ id, fieldName: "buttonsBelowText" })}
                                class="relative z-20 flex gap-6"
                            >
                                {buttonsBelowText?.map((button, index) => {
                                    const link = getLink(button);
                                    return (
                                        <a
                                            data-animate={componentIndex > 0}
                                            key={button?.id || index}
                                            href={link.href}
                                            class={inViewSlideLeft}
                                            style={{
                                                ...getCardsAnimationDelay(index),
                                            }}
                                        >
                                            <Button type={button?.type as any} label={button?.label} theme={theme} />
                                        </a>
                                    );
                                })}
                            </div>
                            <div
                                class={cn(videoUrl ? "h-8 w-full gold:hidden" : "h-8 w-full silver:h-14 gold:hidden")}
                            ></div>
                        </div>

                        <div class="col-span-4 flex h-full items-center silver:col-span-6 silver:col-start-2 gold:col-span-10 gold:col-start-2">
                            <div class="w-full">
                                <div class="-mx-2 h-full silver:-mx-5">
                                    <div class="relative h-full w-full border-t border-slate-600 p-2 silver:px-2 silver:py-3 gold:border-t-0 gold:p-2">
                                        <div class="absolute left-0 top-0 z-20 gold:hidden gold:translate-x-[-1px]">
                                            <Cross theme={theme} />
                                        </div>
                                        <div class="absolute right-0 top-0 z-20 gold:hidden">
                                            <Cross theme={theme} />
                                        </div>
                                        <div
                                            {...getInspectProps({ id, fieldName: "image" })}
                                            class="relative h-full w-full"
                                        >
                                            <div
                                                class="pointer-events-none absolute -left-[1px] -top-[1px] z-30 hidden h-[calc(100%_+_2px)] w-[calc(100%_+_2px)] gold:block"
                                                style={{
                                                    background:
                                                        "linear-gradient(109deg, #353532 14.92%, rgba(43, 43, 40, 0.00) 149.25%)",
                                                }}
                                            >
                                                <ElipseTopRight />
                                                <ElipseBottomLeft />
                                            </div>
                                            {!videoUrl && image && (
                                                <FancyImage
                                                    img={image}
                                                    lazyload={componentIndex > 0}
                                                    responsiveAspectRatio={{
                                                        bronze: 343 / 158,
                                                        silver: 557 / 257,
                                                        gold: 1021 / 471,
                                                        platinum: 1193 / 551,
                                                    }}
                                                    responsiveMaxWidth={{
                                                        silver: BREAKPOINTS.PLATINUM - 1,
                                                    }}
                                                />
                                            )}
                                            {videoUrl && (
                                                <EmbededVideo
                                                    autoplay={true}
                                                    id={`${props.id || componentIndex}`}
                                                    videoUrl={videoUrl}
                                                    componentIndex={componentIndex}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LinesBottom theme={theme} bottomRight={false} />
            </div>
        </div>
    );
});
