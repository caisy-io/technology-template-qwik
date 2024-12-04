import Button from "@/common-components/button/Button";
import DarkBackground from "@/common-components/dark-background/DarkBackground";
import LineMiddle from "@/common-components/line-parts/LineMiddle";
import LinesBackground from "@/common-components/line-parts/LinesBackground";
import LinesBottom from "@/common-components/line-parts/LinesBottom";
import LinesTop from "@/common-components/line-parts/LinesTop";
import Cross from "@/common-components/small-cross/Cross";
import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer"; // Note: You might need to find a Qwik equivalent for this
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { getCardsAnimationDelay, inViewBlurLeft, inViewFade, inViewSlideLeft } from "~/constants/animationInView";
import EmbededVideo from "../../common-components/embeded-video/EmbededVideo";
import FancyImage from "../../common-components/fancy-image/FancyImage";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { useNavigation } from "../../hooks/useNavigation";
import type { IGenFramedMediaWithText } from "../../services/graphql/__generated/sdk";
import { getInspectProps } from "../../utils/getInspectProps";
import { cn } from "../../utils/tailwind-helper";

export interface FramedMediaWithTextProps extends IGenFramedMediaWithText {
    componentIndex: number;
}

export const FramedMediaWithText = component$((props: FramedMediaWithTextProps) => {
    const {
        headline,
        text,
        id,
        buttonsBelowText,
        image,
        videoUrl,
        componentIndex,
        layout: cmsLayout,
        theme: cmsTheme,
    } = props;
    const layout = cmsLayout === "textleft" ? "textleft" : "textright";
    const theme = cmsTheme === "dark" ? "dark" : "light";

    const { getLink } = useNavigation();

    return (
        <div class={cn("framed-media-with-text relative overflow-hidden", theme === "light" && "bg-white")}>
            {theme === "dark" && <DarkBackground />}
            <LinesBackground theme={theme} />
            <LinesTop theme={theme} />
            <LineMiddle theme={theme} />
            <div class="h-8 w-full gold:hidden"></div>
            <div class="text relative z-30">
                <div class={cn(gridPadding)}>
                    <div
                        data-animate={componentIndex > 0}
                        class={cn(gridMaxWidth, gridLayout, `h-full grid-flow-dense`, inViewFade)}
                    >
                        <div
                            class={cn(
                                "col-span-4 h-full justify-center silver:col-span-6 silver:col-start-2",
                                layout === "textleft"
                                    ? "gold:col-span-4 gold:col-start-2"
                                    : "gold:col-span-5 gold:col-start-7 gold:pl-8",
                            )}
                        >
                            <div class={cn("hidden w-full gold:block", videoUrl ? "h-16" : "h-12")}></div>
                            <h1
                                {...getInspectProps({ id, fieldName: "headline" })}
                                class={cn(
                                    "relative z-20 self-stretch font-montserrat text-[36px] font-semibold leading-[normal] -tracking-[0.36px] silver:text-[42px] silver:-tracking-[0.42px] gold:text-[48px] gold:-tracking-[0.48px]",
                                    theme === "dark" ? "text-white" : "text-gray-800",
                                )}
                            >
                                <AnimatedHeadline headline={headline} componentIndex={componentIndex} />
                            </h1>
                            <div class="h-8 w-full gold:h-7"></div>
                            <div
                                data-animate={componentIndex > 0}
                                {...getInspectProps({ id, fieldName: "text" })}
                                class={cn(
                                    "relative z-20 self-stretch font-sans text-[16px] font-normal leading-6 tracking-normal gold:leading-[140%] gold:-tracking-[0.176px]",
                                    theme === "dark" ? "text-slate-300" : "text-gray-500",
                                    inViewBlurLeft,
                                    "[&.in-view]:motion-delay-[400ms]",
                                )}
                            >
                                {text?.json && <RichTextRenderer node={text?.json} />}
                            </div>
                            <div class="h-8 w-full gold:h-7"></div>
                            <div
                                {...getInspectProps({ id, fieldName: "buttonsBelowText" })}
                                class={cn("relative z-20 flex gap-6")}
                            >
                                {buttonsBelowText?.map((button, i) => {
                                    const link = getLink(button);
                                    return (
                                        <a
                                            data-animate={componentIndex > 0}
                                            href={link.href}
                                            key={i}
                                            class={cn(inViewSlideLeft)}
                                            style={{ ...getCardsAnimationDelay(i) }}
                                        >
                                            <Button type={button?.type as any} label={button?.label} theme={theme} />
                                        </a>
                                    );
                                })}
                            </div>
                            <div class={cn(videoUrl ? "h-10 w-full gold:h-20" : "h-10 w-full gold:hidden")}></div>
                        </div>

                        <div
                            class={cn(
                                "col-span-4 flex h-full items-center silver:col-span-6 silver:col-start-2 gold:col-span-5",
                                layout === "textleft" ? "gold:col-start-7" : "gold:col-start-2",
                            )}
                        >
                            <div class="w-full">
                                <div
                                    class={cn(
                                        "-mx-2 h-full silver:-mx-5",
                                        layout === "textleft" ? "gold:-ml-2" : "gold:-mr-2",
                                    )}
                                >
                                    <div
                                        class={cn(
                                            "relative h-full w-full border-t p-2 silver:px-8 silver:py-11 gold:border-t-0 gold:p-2",
                                            theme === "dark" ? "border-slate-600" : "border-slate-200",
                                        )}
                                    >
                                        <div class="absolute left-0 top-0 z-20 gold:hidden gold:translate-x-[-1px]">
                                            <Cross theme={theme} />
                                        </div>
                                        <div class="absolute right-0 top-0 z-20 gold:hidden">
                                            <Cross theme={theme} />
                                        </div>
                                        <div
                                            data-animate={componentIndex > 0}
                                            {...getInspectProps({
                                                id,
                                                fieldName: !videoUrl && image ? "image" : "videoUrl",
                                            })}
                                            class={cn("relative h-full w-full", inViewFade)}
                                        >
                                            {!videoUrl && image && (
                                                <FancyImage
                                                    img={image}
                                                    lazyload={componentIndex > 0}
                                                    responsiveAspectRatio={{
                                                        bronze: 342 / 320,
                                                        silver: 501 / 469,
                                                        gold: 501 / 469,
                                                        platinum: 576 / 593,
                                                    }}
                                                    responsiveMaxWidth={{
                                                        gold: 576,
                                                        silver: 500,
                                                        bronze: 500,
                                                    }}
                                                />
                                            )}
                                            {videoUrl && (
                                                <EmbededVideo
                                                    componentIndex={componentIndex}
                                                    videoUrl={videoUrl}
                                                    id={`${props.id || componentIndex}`}
                                                    autoplay
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LinesBottom theme={theme} bottomRight={theme === "light"} />
            </div>
        </div>
    );
});

export default FramedMediaWithText;
