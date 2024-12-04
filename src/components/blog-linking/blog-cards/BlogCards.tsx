import { component$ } from "@builder.io/qwik";
import FancyImage from "~/common-components/fancy-image/FancyImage";
import Cross from "~/common-components/small-cross/Cross";
import { getCardsAnimationDelay, inViewSlideLeft } from "~/constants/animationInView";
import { BREAKPOINTS } from "~/constants/mediaquery";
import type { IGenBlogLinking } from "~/services/graphql/__generated/sdk";
import { cn } from "~/utils/tailwind-helper";
import { useNavigation } from "../../../hooks/useNavigation";
import { getPageFirstHeading } from "../helpers/getPageFirstHeading";
import { getPageFirstImage } from "../helpers/getPageFirstImage";
import { getPageReadTime } from "../helpers/getPageReadTime";

interface Props extends Pick<IGenBlogLinking, "linkedBlogs"> {
    componentIndex: number;
    theme: "light" | "dark";
}

export default component$<Props>(({ componentIndex, linkedBlogs, theme }) => {
    if (!linkedBlogs || linkedBlogs.length < 1) return null;
    const { getLink } = useNavigation();

    return linkedBlogs.map((page, index) => {
        if (!page?.components || page.components.length < 1) return null;

        const heading = getPageFirstHeading(page.components);
        const image = getPageFirstImage(page.components);
        const readTime = getPageReadTime(page.components);
        const isBigCard = index === 0 || linkedBlogs.length === 2;
        const remainingBlogs = linkedBlogs.length - 1;
        const link = getLink(page);
        const description = page.description;
        const dateObj =
            page.releaseDate || page._meta?.publishedAt ? new Date(page.releaseDate ?? page._meta?.publishedAt) : null;
        const date = dateObj?.toLocaleDateString("de-DE", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });

        return (
            <a
                key={index}
                title={link.name}
                href={`${link.href}`}
                data-animate={componentIndex > 0}
                style={{ ...getCardsAnimationDelay(index) }}
                class={cn(
                    "block cursor-pointer",
                    "card-layout relative w-full",
                    isBigCard ? "" : remainingBlogs === 2 ? "silver:w-1/2" : "silver:w-1/2 gold:w-1/3",
                    index == 3 && "silver:hidden gold:block",
                    inViewSlideLeft,
                )}
            >
                {/* Card */}
                <div
                    class={cn(
                        "relative flex h-full w-full flex-col gap-3 px-2 py-5 silver:px-5 platinum:py-7",
                        !isBigCard && "silver:gap-4",
                    )}
                >
                    {image?.src && (
                        <FancyImage
                            img={image}
                            lazyload={componentIndex > 0}
                            responsiveAspectRatio={{
                                bronze: 342 / 175,
                                silver: isBigCard ? 530 / 260 : 250 / 195,
                                gold: isBigCard ? 1015 / 380 : 314 / 199,
                                platinum: isBigCard ? 1160 / 465 : 363 / 199,
                            }}
                            responsiveFactor={{
                                bronze: 1,
                                silver: isBigCard ? 1 : 1 / remainingBlogs,
                            }}
                            responsiveMaxWidth={{
                                platinum: isBigCard ? BREAKPOINTS.PLATINUM : BREAKPOINTS.PLATINUM / remainingBlogs,
                            }}
                        />
                    )}
                    {heading && (
                        <h5
                            class={cn(
                                "font-sans text-[20px] font-medium leading-7 tracking-normal text-gray-800 silver:font-montserrat silver:font-semibold silver:leading-[normal]",
                                isBigCard
                                    ? "silver:text-[28px] silver:-tracking-[0.28px]"
                                    : "silver:text-[24px] silver:-tracking-[0.24px]",
                            )}
                        >
                            {heading}
                        </h5>
                    )}
                    {description && (
                        <>
                            {/* Bronze description */}
                            <p class="group block font-sans text-[14px] font-normal leading-5 tracking-normal text-gray-500 silver:hidden">
                                {description.length >= 60 ? `${description.slice(0, 60)}...` : description}
                                &nbsp;
                                <span class="text-primary-500 transition-colors duration-300 group-hover:text-blue-600">
                                    Mehr anzeigen
                                </span>
                            </p>
                            {/* Silver+ description */}
                            <p
                                class={cn(
                                    "hidden font-sans text-[16px] font-normal leading-6 tracking-normal text-gray-500 silver:block",
                                )}
                            >
                                {isBigCard
                                    ? description.length >= 115
                                        ? `${description.slice(0, 115)}...`
                                        : description
                                    : description.length >= 60
                                      ? `${description.slice(0, 60)}...`
                                      : description}
                                &nbsp;
                                <span class="text-primary-500 transition-colors duration-300 group-hover:text-blue-600">
                                    Mehr anzeigen
                                </span>
                            </p>
                        </>
                    )}
                    <div class="mt-auto flex items-center gap-2.5 font-sans text-[14px] font-normal leading-5 tracking-normal text-gray-500 silver:text-[16px] silver:leading-6">
                        <p>{date && date !== "Invalid Date" && date}</p>
                        &bull;
                        <p>{readTime <= 1 ? "1 Minute Lesezeit" : `${readTime} Minuten Lesezeit`}</p>
                    </div>
                    {/* Small cards separator line */}
                    {!isBigCard && index !== 1 && (
                        <div class={cn("absolute inset-0 hidden h-full w-px bg-slate-200 silver:block")}>
                            <div class="absolute left-0 top-0 z-20">
                                <Cross theme={theme} />
                            </div>
                            <div class="absolute bottom-0 left-0 z-20">
                                <Cross theme={theme} />
                            </div>
                        </div>
                    )}
                </div>
                {/* Horizontal lines with stars */}
                <div
                    class={cn(
                        "border-b border-solid border-slate-200 silver:hidden",
                        isBigCard && index !== linkedBlogs.length - 1 && "silver:block",
                    )}
                >
                    <div class="absolute bottom-0 left-0 z-20">
                        <Cross theme={theme} />
                    </div>
                    {linkedBlogs.length === 2 && (
                        <div class="absolute bottom-0 left-1/2 z-20 hidden silver:block">
                            <Cross theme={theme} />
                        </div>
                    )}
                    <div class="absolute bottom-0 right-0 z-20">
                        <Cross theme={theme} />
                    </div>
                </div>
            </a>
        );
    });
});
