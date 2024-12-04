import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import LinesBackground from "~/common-components/line-parts/LinesBackground";
import LinesBottom from "~/common-components/line-parts/LinesBottom";
import LinesTop from "~/common-components/line-parts/LinesTop";
import Cross from "~/common-components/small-cross/Cross";
import { inViewBlurLeft, inViewFade } from "~/constants/animationInView";
import { gridLayout, gridMaxWidth, gridPadding } from "~/constants/grid";
import type { IGenBlogLinking } from "~/services/graphql/__generated/sdk";
import { getInspectProps } from "~/utils/getInspectProps";
import { cn } from "~/utils/tailwind-helper";
import BlogCards from "./blog-cards/BlogCards";

interface Props extends IGenBlogLinking {
    componentIndex: number;
}

export default component$<Props>(({ headline, id, linkedBlogs, text, componentIndex }) => {
    const theme = "light";

    return (
        <div class="blog-linking relative overflow-hidden">
            <LinesBackground theme={theme} />
            <LinesTop theme={theme} />
            {/* Spacer */}
            <div class="h-8 w-full silver:h-12"></div>
            {/* Content */}
            <div class={gridPadding}>
                <div data-animate={componentIndex > 0} class={cn(gridMaxWidth, gridLayout, "h-full", inViewFade)}>
                    <div class="relative col-span-4 -mx-2 silver:col-span-6 silver:col-start-2 silver:-mx-5 gold:col-span-10 gold:col-start-2">
                        <div class="text relative z-10 h-full w-full border-b border-solid border-slate-200 p-2 silver:px-5">
                            {/* Headline */}
                            {headline && (
                                <h3
                                    {...getInspectProps({ id, fieldName: "headline" })}
                                    class="text-center font-montserrat text-[36px] font-semibold leading-[normal] -tracking-[0.36px] text-gray-800 silver:text-[42px] silver:-tracking-[0.42px] gold:text-[48px] gold:-tracking-[0.48px]"
                                >
                                    <AnimatedHeadline
                                        headline={headline}
                                        componentIndex={componentIndex}
                                        isTextCentered
                                    />
                                </h3>
                            )}
                            {/* Spacer */}
                            <div class="h-2.5 w-full silver:h-8 gold:h-2.5"></div>
                            {/* Text */}
                            {text?.json && (
                                <div
                                    data-animate={componentIndex > 0}
                                    {...getInspectProps({ id, fieldName: "text" })}
                                    class={cn(
                                        "font-sans text-[16px] font-normal leading-[150%] tracking-normal text-gray-500 [&_>*]:!text-center",
                                        inViewBlurLeft,
                                    )}
                                >
                                    <RichTextRenderer node={text.json} />
                                </div>
                            )}
                            {/* Spacer */}
                            <div class="h-8 w-full silver:h-12"></div>
                            {/* Crosses */}
                            <div class="absolute bottom-0 left-0 z-20">
                                <Cross theme={theme} />
                            </div>
                            <div class="absolute bottom-0 left-1/2 z-20 hidden silver:block">
                                <Cross theme={theme} />
                            </div>
                            <div class="absolute bottom-0 right-0 z-20">
                                <Cross theme={theme} />
                            </div>
                        </div>
                        {/* Blogs Cards */}
                        <div class="cards z-10 flex h-full w-full flex-wrap justify-between">
                            <BlogCards linkedBlogs={linkedBlogs} componentIndex={componentIndex} theme={theme} />
                        </div>
                    </div>
                </div>
            </div>
            <LinesBottom theme={theme} bottomLeft />
        </div>
    );
});
