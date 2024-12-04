import FancyImage from "@/common-components/fancy-image/FancyImage";
import ArrowTopRight from "@/icons/ArrowTopRight";
import type { IGenTeaserGridItem } from "@/services/graphql/__generated/sdk";
import { component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import { BREAKPOINTS } from "~/constants/mediaquery";
import { cn } from "~/utils/tailwind-helper";
import { useNavigation } from "../../hooks/useNavigation";
interface GridItemProps extends IGenTeaserGridItem {
    componentIndex: number;
}

export const GridItem = component$<GridItemProps>(({ image, linkedPage, text, title, componentIndex }) => {
    const { getLink } = useNavigation();
    const link = getLink(linkedPage);
    const rgbValues = import.meta.env.PUBLIC_TANANT === "eba" ? "26, 118, 214" : "74, 187, 147";

    return (
        <div class="card_item group relative w-full">
            {/* default Background gradient */}
            <div
                class="background-gradient pointer-events-none absolute inset-0 z-[39] opacity-0 mix-blend-darken transition-opacity group-[:not(:hover)]:opacity-30"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.6%, rgba(0, 0, 0, 0.90) 100%), lightgray 50% / cover no-repeat",
                }}
            />
            {/* hover background gradient */}
            <div
                class="pointer-events-none absolute inset-0 z-[39] opacity-0 mix-blend-darken transition-opacity group-hover:opacity-40"
                style={{
                    background: `linear-gradient(0deg, rgba(${rgbValues}, 0.20) 0%, rgba(${rgbValues}, 0.20) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.00) 23.6%, rgba(0, 0, 0, 0.90) 100%), lightgray 50% / cover no-repeat`,
                }}
            />
            {/* hover card shadow */}
            <div
                class="background-gradient--shadow pointer-events-none absolute inset-0 z-[39] opacity-0 mix-blend-darken transition-opacity group-hover:opacity-100"
                style={{
                    boxShadow: `0px 12px 30px 0px rgba(${rgbValues}, 0.30)`,
                }}
            />
            {/* hover icon */}
            <div
                class={cn(
                    "pointer-events-none absolute right-6 top-6 z-40 flex h-[45px] w-[45px] items-center justify-center bg-primary-500 p-3 opacity-0 transition-opacity group-hover:opacity-100",
                    !link.href && "hidden",
                )}
                style={{
                    boxShadow: `0px 0.889px 1.778px 0px rgba(${rgbValues}, 0.30), 0px 3.111px 6.222px 0px rgba(${rgbValues}, 0.25)`,
                }}
            >
                <ArrowTopRight />
            </div>
            {/* content */}
            <a href={link.href} title={link.name} class={cn("block", link.href && "cursor-pointer")}>
                {image?.src && (
                    <FancyImage
                        img={image}
                        lazyload={componentIndex > 0}
                        responsiveMaxWidth={{
                            platinum: BREAKPOINTS.PLATINUM / 3,
                        }}
                        responsiveAspectRatio={{
                            bronze: 342 / 398,
                            silver: 535 / 495,
                            gold: 322 / 496,
                            platinum: 360 / 545,
                        }}
                        responsiveFactor={{ bronze: 1, gold: 1 / 3 }}
                    />
                )}
            </a>
            <div class="absolute bottom-6 left-6 z-40 max-w-[calc(100%_-_48px)] text-white">
                {title && (
                    <h1 class="headline mb-2 font-montserrat text-[26px] font-semibold leading-[normal] tracking-[-0.26px] silver:text-[28px] silver:tracking-[-0.28px]">
                        {title}
                    </h1>
                )}
                {text?.json && (
                    <div class={cn("text font-sans text-base font-normal tracking-normal")}>
                        <RichTextRenderer node={text.json} />
                    </div>
                )}
            </div>
        </div>
    );
});

export default GridItem;
