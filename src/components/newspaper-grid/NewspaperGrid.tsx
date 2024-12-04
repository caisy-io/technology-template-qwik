import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import AnimatedHeadline from "~/common-components/animated-headline/AnimatedHeadline";
import { getCardsAnimationDelay, inViewBlurLeft, inViewFade, inViewSlideLeft } from "~/constants/animationInView";
import Button from "../../common-components/button/Button";
import DarkBackground from "../../common-components/dark-background/DarkBackground";
import FancyImage from "../../common-components/fancy-image/FancyImage";
import LinesBackground from "../../common-components/line-parts/LinesBackground";
import LinesCustom from "../../common-components/line-parts/LinesCustom";
import LinesTop from "../../common-components/line-parts/LinesTop";
import Cross from "../../common-components/small-cross/Cross";
import SvgHandler from "../../common-components/svg-handler/SvgHandler";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import type { IGenAsset, IGenNewspaperGrid } from "../../services/graphql/__generated/sdk";
import { cn } from "../../utils/tailwind-helper";

export interface NewspaperGridProps extends IGenNewspaperGrid {
    componentIndex: number;
}

export const NewspaperGrid = component$((props: NewspaperGridProps) => {
    const { theme: cmsTheme, cards, buttonBelow, text, strap, image, headline, componentIndex } = props;

    const theme = cmsTheme === "dark" ? "dark" : "light";
    // const store = useStore({ cards: cards || [] });

    // console.log(` cards`, store.cards);

    return (
        <div class={cn("with-headline relative h-full overflow-hidden", theme === "light" && "bg-white")}>
            {theme === "dark" && <DarkBackground />}
            <LinesBackground theme={theme} />
            <LinesTop theme={theme} />
            <div class={cn(gridPadding, "z-40")}>
                <div class={cn(gridMaxWidth, gridLayout)}>
                    <div class="col-span-4 silver:col-span-6 silver:col-start-2 gold:col-span-10 gold:col-start-2">
                        <div class="-ml-2 grid gold:-mx-6 gold:-ml-5 gold:w-[calc(100%+2.5rem)] gold:grid-cols-3 gold:gap-6 gold:px-4 gold:py-10">
                            {cards?.map((card, index) => (
                                <div
                                    data-animate={componentIndex > 0}
                                    key={card?.id || index}
                                    style={{ ...getCardsAnimationDelay(index) }}
                                    class={cn(
                                        "relative flex w-full flex-col rounded-lg p-4",
                                        "gold:px-0",
                                        theme === "dark" ? "border-gray-700" : "border-gray-200",
                                        inViewBlurLeft,
                                    )}
                                >
                                    <div class="mb-4 flex w-full items-center overflow-hidden">
                                        <div class="relative mr-2 flex h-[35px] w-[35px] flex-shrink-0 items-center justify-center bg-primary-500 silver:h-[45px] silver:w-[45px] silver:items-start silver:justify-end gold:h-[45px] gold:w-[45px] gold:items-start gold:justify-end">
                                            {card?.icon && (
                                                <div
                                                    class={cn(
                                                        "innner-wrapped-comp absolute inset-0 flex items-center justify-center shadow-[0px_0.889px_1.778px_0px_#1A76D64D,0px_3.111px_6.222px_0px_#1A76D640]",
                                                    )}
                                                >
                                                    <div class="h-5 w-5 silver:h-[21px] silver:w-[21px] gold:h-[21px] gold:w-[21px]">
                                                        {card.icon?.src?.endsWith(".svg") ? (
                                                            <SvgHandler
                                                                src={card.icon?.src}
                                                                class="text-white [&_svg]:h-5 [&_svg]:w-5"
                                                            />
                                                        ) : (
                                                            <FancyImage
                                                                img={card.icon}
                                                                responsiveAspectRatio={{ bronze: 1 }}
                                                                responsiveMaxWidth={{ bronze: 30 }}
                                                                class="h-5 w-5"
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <h2
                                            class={cn(
                                                "overflow-hidden font-montserrat text-2xl font-semibold leading-normal tracking-[-0.24px] text-gray-800 opacity-[var(--sds-size-stroke-border)] silver:p-4 gold:m-0 gold:w-full gold:p-0 platinum:ml-2 platinum:pl-0",
                                                theme === "dark" ? "text-white" : "text-gray-800",
                                            )}
                                        >
                                            {card?.title}
                                        </h2>
                                    </div>
                                    {card?.text?.json && (
                                        <div
                                            class={cn(
                                                "w-full text-base font-normal leading-6 tracking-normal text-gray-500 opacity-[var(--sds-size-stroke-border)] gold:self-stretch",
                                                theme === "dark" ? "text-white" : "text-gray-500",
                                            )}
                                        >
                                            <RichTextRenderer node={card?.text?.json} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div class="relative">
                            <div
                                class={cn(
                                    `relative col-span-4 -ml-2 -mr-2 h-full border-b border-solid silver:col-span-6 silver:col-start-2 silver:m-0 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-4`,
                                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                                )}
                            >
                                <div class="absolute bottom-0 left-0 z-20">
                                    <Cross theme={theme} />
                                </div>
                                <div class="absolute right-0 top-0 z-20">
                                    <Cross theme={theme} />
                                </div>
                                <div class="hidden h-full justify-center silver:flex gold:col-span-10">
                                    <div
                                        class={cn(
                                            `absolute z-10 h-full w-px`,
                                            `left-1/2 gold:left-2/3`,
                                            theme === "dark" ? "bg-slate-600" : "bg-slate-200",
                                        )}
                                    ></div>
                                    <div
                                        class={cn(
                                            "absolute bottom-0 z-20 gap-4",
                                            "left-1/2 -translate-x-1/2 gold:left-2/3",
                                        )}
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div class="grid gap-4 gold:-ml-5 gold:-mr-5 gold:grid-cols-3 gold:gap-12">
                            <div class="relative gold:col-span-2">
                                {image && (
                                    <div
                                        data-animate={componentIndex > 0}
                                        class={cn(
                                            "w-full overflow-hidden p-4",
                                            theme === "dark" ? "bg-transparent" : "bg-white",
                                            "opacity-[var(--sds-size-stroke-border)]",
                                            inViewFade,
                                        )}
                                    >
                                        <div class="h-full w-full">
                                            <FancyImage
                                                img={image as IGenAsset}
                                                responsiveAspectRatio={{
                                                    bronze: 341 / 165,
                                                    silver: 534 / 223,
                                                    gold: 658 / 273,
                                                    platinum: 813 / 350,
                                                }}
                                            />
                                        </div>
                                    </div>
                                )}
                                <div
                                    class={cn(
                                        "absolute top-0 z-30 hidden h-full w-full border-r border-solid gold:block",
                                        theme === "dark" ? "border-slate-600" : "border-slate-200",
                                    )}
                                >
                                    <span class="absolute right-0 top-0">
                                        <Cross theme={theme} />
                                    </span>
                                    <span class="absolute bottom-0 right-0">
                                        <Cross theme={theme} />
                                    </span>
                                    <span class="absolute bottom-0 right-0">
                                        <div
                                            class={cn(
                                                theme === "dark" ? "border-slate-600" : "border-slate-200",
                                                "absolute -bottom-8 right-0 h-8 w-20 translate-y-[1px] rounded-br-[32px] border-b border-r border-solid",
                                            )}
                                        />
                                    </span>
                                </div>
                                {buttonBelow && buttonBelow.length > 0 && (
                                    <div class="absolute bottom-0 z-30 translate-y-5 transform px-9">
                                        {buttonBelow.map((button, i) => {
                                            return (
                                                <div
                                                    data-animate={componentIndex > 0}
                                                    style={{ ...getCardsAnimationDelay(i) }}
                                                    class={cn(inViewSlideLeft, "[&.in-view]:motion-duration-200")}
                                                    key={"" + button?.id + i}
                                                >
                                                    <Button type={"special" as any} {...button} />
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                            <div class="relative gold:hidden">
                                <div
                                    class={cn(
                                        `relative col-span-4 -ml-2 -mr-2 h-full border-b border-solid silver:col-span-6 silver:col-start-2 silver:m-0 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-4`,
                                        theme === "dark" ? "border-slate-600" : "border-slate-200",
                                    )}
                                >
                                    <div class="absolute bottom-0 left-0 z-20">
                                        <Cross theme={theme} />
                                    </div>
                                    <div class="absolute bottom-0 right-0 z-20">
                                        <Cross theme={theme} />
                                    </div>
                                    <div class="hidden h-full justify-center silver:flex gold:col-span-10">
                                        <div
                                            class={cn(
                                                `z-10 h-full w-px`,
                                                theme === "dark" ? "bg-slate-600" : "bg-slate-200",
                                            )}
                                        ></div>
                                        <div class="absolute bottom-0 z-20">
                                            <Cross theme={theme} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="relative ml-1 flex w-full flex-col gold:col-span-1 gold:-ml-6 gold:mt-8 platinum:mt-12">
                                {strap && (
                                    <h2
                                        data-animate={componentIndex > 0}
                                        class={cn(
                                            "mb-1 w-full self-stretch font-montserrat text-xs font-bold uppercase leading-normal tracking-[-0.12px] text-primary-500 platinum:w-[237px]",
                                            inViewBlurLeft,
                                        )}
                                    >
                                        {strap}
                                    </h2>
                                )}
                                {headline && (
                                    <h3
                                        class={cn(
                                            "self-stretch font-montserrat text-2xl font-semibold leading-tight tracking-[-0.24px] bronze:pr-32 silver:pr-72 gold:pr-32",
                                            "gold:text-2xl gold:tracking-[-0.24px]",
                                            "mb-4",
                                            theme === "dark" ? "text-white" : "text-gray-800",
                                        )}
                                    >
                                        <AnimatedHeadline headline={headline} componentIndex={componentIndex} />
                                    </h3>
                                )}
                                {text?.json && (
                                    <div
                                        data-animate={componentIndex > 0}
                                        class={cn(
                                            "pr-[2px] font-sans text-base font-normal leading-6 tracking-normal text-gray-500 bronze:mb-4 platinum:w-[318px] platinum:pr-2",
                                            theme === "dark" ? "text-white" : "text-gray-500",
                                            inViewBlurLeft,
                                            "[&.in-view]:motion-delay-[400ms]",
                                        )}
                                    >
                                        <RichTextRenderer node={text.json} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LinesCustom theme={theme} />
        </div>
    );
});

export default NewspaperGrid;
