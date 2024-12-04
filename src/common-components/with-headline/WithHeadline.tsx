import { component$, Slot } from "@builder.io/qwik";
import { inViewBlurLeft, inViewFade } from "~/constants/animationInView";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import type { Maybe, Scalars } from "../../services/graphql/__generated/sdk";
import { getInspectProps } from "../../utils/getInspectProps";
import { cn } from "../../utils/tailwind-helper";
import AnimatedHeadline from "../animated-headline/AnimatedHeadline";
import DarkBackground from "../dark-background/DarkBackground";
import LinesBackground from "../line-parts/LinesBackground";
import LinesBottom from "../line-parts/LinesBottom";
import LinesTop from "../line-parts/LinesTop";
import Cross from "../small-cross/Cross";

interface WithHeadlineProps {
    headline?: Maybe<Scalars["String"]["output"]>;
    subheadline?: Maybe<Scalars["String"]["output"]>;
    theme?: Maybe<Scalars["String"]["output"]>;
    id?: Maybe<Scalars["String"]["output"]>;
    componentIndex: number;
}

export default component$<WithHeadlineProps>((props) => {
    const { headline, subheadline, theme: cmsTheme, id, componentIndex } = props;
    const theme = cmsTheme === "dark" ? "dark" : "light";

    return (
        <div class={cn("with-headline relative h-full overflow-hidden", theme === "light" && "bg-white")}>
            {theme === "dark" && <DarkBackground />}
            <LinesBackground theme={theme} />
            <LinesTop theme={theme} />
            <div class={cn(gridPadding, "z-10")}>
                <div data-animate={componentIndex > 0} class={cn(gridMaxWidth, gridLayout, inViewFade)}>
                    {headline && (
                        <div
                            class={cn(
                                "relative col-span-4 -ml-2 -mr-2 silver:col-span-6 silver:col-start-2 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-2",
                            )}
                        >
                            <div class="relative z-10 h-full w-full p-2 silver:p-5">
                                <h1
                                    {...getInspectProps({ id, fieldName: "headline" })}
                                    class={cn(
                                        "text-center font-montserrat text-4xl font-semibold tracking-[-0.36px]",
                                        "silver:text-[42px] silver:tracking-[-0.42px]",
                                        "gold:text-5xl gold:tracking-[-0.48px]",
                                        "p-2 pb-2.5 pt-8",
                                        "silver:p-2 silver:pb-2.5 silver:pt-4",
                                        "gold:p-12 gold:pb-2.5 gold:pt-12",
                                        "platinum:p-24 platinum:pb-2.5 platinum:pt-12",
                                        theme === "dark" ? "text-white" : "text-gray-800",
                                    )}
                                >
                                    <AnimatedHeadline
                                        headline={headline}
                                        componentIndex={componentIndex}
                                        isTextCentered
                                    />
                                </h1>
                                {subheadline && (
                                    <h4
                                        data-animate={componentIndex > 0}
                                        {...getInspectProps({ id, fieldName: "subheadline" })}
                                        class={cn(
                                            "self-stretch text-center text-base font-normal leading-6 tracking-normal",
                                            "p-2 pt-0",
                                            "silver:px-2 silver:pb-4 silver:pt-0",
                                            "gold:px-12 gold:pb-12 gold:pt-0",
                                            "platinum:px-24 platinum:pb-12 platinum:pt-0",
                                            theme === "dark" ? "text-slate-200" : "text-gray-500",
                                            inViewBlurLeft,
                                            "[&.in-view]:motion-delay-[500ms]",
                                        )}
                                    >
                                        {subheadline}
                                    </h4>
                                )}
                            </div>
                            <div
                                class={cn(
                                    "border-b border-solid",
                                    theme !== "dark" ? "border-slate-200" : "border-slate-600",
                                )}
                            />
                            <div class="absolute bottom-0 left-0 z-20">
                                <Cross theme={theme} />
                            </div>
                            <div class="absolute bottom-0 right-0 z-20">
                                <Cross theme={theme} />
                            </div>
                        </div>
                    )}
                    <div class="col-span-4 silver:col-span-6 silver:col-start-2 gold:col-span-10 gold:col-start-2 gold:-ml-5 gold:-mr-5">
                        <div class="innner-wrapped-comp">
                            <Slot />
                        </div>
                        <div class="relative hidden h-full gold:block">
                            <div
                                class={cn(
                                    "absolute inset-x-0 top-32 h-px",
                                    theme !== "dark" ? "bg-slate-200" : "bg-slate-600",
                                )}
                            >
                                <div class="absolute left-0 top-0 z-20">
                                    <Cross theme={theme} />
                                </div>
                                <div class="absolute right-0 top-0 z-20">
                                    <Cross theme={theme} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LinesBottom theme={theme} />
        </div>
    );
});
