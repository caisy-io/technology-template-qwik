import Button from "@/common-components/button/Button";
import { getInspectProps } from "@/utils/getInspectProps";
import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer"; // Note: You might need to find a Qwik equivalent for this
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { getCardsAnimationDelay, inViewFade, inViewSlideLeft } from "~/constants/animationInView";
import EmbededVideo from "../../common-components/embeded-video/EmbededVideo";
import FancyImage from "../../common-components/fancy-image/FancyImage";
import SmallCross from "../../common-components/small-cross/SmallCross";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { firstLineLeft, firstLineRight } from "../../constants/lines";
import { useNavigation } from "../../hooks/useNavigation";
import type { IGenFreeMediaWithText } from "../../services/graphql/__generated/sdk";

import { cn } from "../../utils/tailwind-helper";

export interface FreeMediaWithTextProps extends IGenFreeMediaWithText {
    componentIndex: number;
}

export const FreeMediaWithText = component$((props: FreeMediaWithTextProps) => {
    const { getLink } = useNavigation();
    const { headline, text, buttonsBelowText, image, buttonBelowMedia, videoUrl, componentIndex, id } = props;

    const buttonBelowMediaUrl = buttonBelowMedia?.linkToPage && getLink(buttonBelowMedia);

    return (
        <div class="media-with-text relative overflow-hidden">
            <div class="absolute h-full w-full">
                <div class={cn(firstLineLeft, "h-full")}></div>
                <div class={cn(firstLineRight, "h-full")}></div>
                <div class="pointer-events-none absolute top-0 z-10 h-full w-full overflow-hidden">
                    <div class="elipse-tr elipse-tr-gradient absolute left-[2%] top-0 h-[614px] w-[614px] rounded-[614px] opacity-30 blur-[157px] silver:left-1/2 gold:left-3/4 platinum:left-[60%]"></div>
                </div>
                <div class={cn(gridPadding, `h-full bg-primary-gradient`)}>
                    <div class={cn(gridMaxWidth, `grid h-full grid-cols-4 gap-5 silver:grid-cols-8 gold:grid-cols-12`)}>
                        <div class="col-span-1 hidden h-full w-full border-r border-slate-600 silver:block"></div>
                        <div class="hidden h-full justify-center silver:col-span-6 silver:flex gold:col-span-10">
                            <div class="z-10 h-full w-px bg-slate-600"></div>
                        </div>
                        <div class="col-span-1 col-start-4 hidden h-full border-l border-slate-600 silver:col-start-8 silver:block gold:col-start-12"></div>
                    </div>
                    <div class="h-full w-full border-l border-r border-slate-600">
                        <div class="right-2 z-10 h-full w-px bg-slate-600 silver:right-3 gold:right-4 platinum:right-8"></div>
                        <div class="left-2 z-10 h-full w-px bg-slate-600 silver:left-3 gold:left-4 platinum:left-8"></div>
                        <div class="left-2 z-10 h-full w-px bg-slate-600 silver:left-3 gold:left-4 platinum:left-8"></div>
                        <div class="left-2 z-10 h-full w-px bg-slate-600 silver:left-3 gold:left-4 platinum:left-8"></div>
                        <div class="left-2 z-10 h-full w-px bg-slate-600 silver:left-3 gold:left-4 platinum:left-8"></div>
                    </div>
                </div>
            </div>
            <div class="text relative z-30">
                <div class="h-16 w-full gold:h-20 platinum:h-16"></div>
                <div class={cn(gridPadding)}>
                    <div data-animate={componentIndex > 0} class={cn(gridMaxWidth, gridLayout, `h-full`, inViewFade)}>
                        <div class="col-span-4 h-full justify-center silver:col-span-6 silver:col-start-2 gold:col-span-4 gold:col-start-2">
                            <div class="h-6 w-full gold:h-40 platinum:h-36"></div>
                            <h1
                                {...getInspectProps({ id, fieldName: "headline", key: headline })}
                                class="relative z-20 self-stretch font-montserrat text-4xl font-semibold leading-normal tracking-[-0.36px] text-white"
                            >
                                <AnimatedHeadline headline={headline} componentIndex={componentIndex} />
                            </h1>
                            <div class="h-6 w-full silver:h-12"></div>
                            <div
                                data-animate={componentIndex > 0}
                                {...getInspectProps({ id, fieldName: "text", key: text })}
                                class={cn(
                                    "relative z-20 self-stretch text-base font-normal leading-6 tracking-normal text-slate-300",
                                    inViewSlideLeft,
                                    "[&.in-view]:motion-delay-[400ms]",
                                )}
                            >
                                {text?.json && <RichTextRenderer node={text?.json} />}
                            </div>
                            <div class="h-8 w-full silver:h-16 gold:h-12"></div>
                            <div
                                {...getInspectProps({ id, fieldName: "buttonsBelowText", key: buttonsBelowText })}
                                class={cn("relative z-20 flex gap-4")}
                            >
                                {buttonsBelowText?.map((button, i) => {
                                    const link = getLink(button);
                                    return (
                                        <a
                                            data-animate={componentIndex > 0}
                                            href={link.href}
                                            key={i}
                                            style={{ ...getCardsAnimationDelay(i) }}
                                            class={cn(inViewSlideLeft, "[&.in-view]:motion-delay-[600ms]")}
                                        >
                                            <Button type={button?.type as any} label={button?.label} />
                                        </a>
                                    );
                                })}
                            </div>
                            <div class="relative z-10 h-0 w-full">
                                <div class="elipse-bl pointer-events-none absolute -right-4 top-16 h-[668px] w-[668px] overflow-hidden rounded-[908px] bg-elipse-bl-gradient opacity-30 blur-[157px] silver:-top-40 silver:right-2 silver:h-[908px] silver:w-[908px] gold:-right-[100px] gold:-top-[360px] platinum:-top-[360px] platinum:right-0"></div>
                            </div>
                            <div class="h-32 w-full silver:h-20 gold:h-32"></div>
                        </div>
                        <div class="col-span-4 h-full justify-center silver:col-span-6 silver:col-start-2 gold:col-span-5 gold:col-start-7">
                            <div class="w-full">
                                <div class="-mx-2 h-full silver:-mx-5 gold:-ml-2">
                                    <div class="relative h-full w-full border-b border-t border-slate-600 p-2">
                                        <div class="absolute left-0 top-0 z-20 gold:translate-x-[-1px]">
                                            <SmallCross />
                                        </div>
                                        <div class="absolute bottom-0 left-0 z-20 gold:translate-x-[-1px]">
                                            <SmallCross />
                                        </div>
                                        <div class="absolute right-0 top-0 z-20">
                                            <SmallCross />
                                        </div>
                                        <div class="absolute bottom-0 right-0 z-20">
                                            <SmallCross />
                                        </div>
                                        <span
                                            {...getInspectProps({
                                                id,
                                                fieldName: !videoUrl && image ? "image" : "videoUrl",
                                            })}
                                            data-animate={componentIndex > 0}
                                            class={cn(inViewFade, "[&.in-view]:motion-delay-[600ms]")}
                                        >
                                            {!videoUrl && image && (
                                                <FancyImage
                                                    img={image}
                                                    lazyload={componentIndex > 0}
                                                    responsiveAspectRatio={{ bronze: 1 }}
                                                    responsiveMaxWidth={{
                                                        gold: 660,
                                                        silver: 1000,
                                                        bronze: 800,
                                                    }}
                                                />
                                            )}
                                            {videoUrl && (
                                                <EmbededVideo
                                                    id={`${props.id || componentIndex}`}
                                                    videoUrl={videoUrl}
                                                    componentIndex={componentIndex}
                                                    autoplay
                                                />
                                            )}
                                        </span>
                                        {buttonBelowMedia && buttonBelowMedia.label && (
                                            <div
                                                data-animate={componentIndex > 0}
                                                class={cn(
                                                    "absolute -bottom-7 right-4 z-30 flex justify-center silver:right-10 platinum:right-16",
                                                    inViewSlideLeft,
                                                    "[&.in-view]:motion-delay-[600ms]",
                                                )}
                                            >
                                                <a
                                                    href={buttonBelowMediaUrl?.href}
                                                    {...getInspectProps({
                                                        id,
                                                        fieldName: "buttonBelowMedia",
                                                        key: buttonBelowMedia,
                                                    })}
                                                >
                                                    <Button type={"special"} label={buttonBelowMedia.label} />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="h-16 w-full gold:h-20 platinum:h-16"></div>
                </div>
            </div>
        </div>
    );
});

export default FreeMediaWithText;
