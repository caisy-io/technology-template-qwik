import { BREAKPOINTS } from "@/constants/mediaquery";
import type { IResponseOptionalValue, IResponseValue, ISize } from "@/constants/types";
import type { IGenAsset } from "@/services/graphql/__generated/sdk";
import { calculateResponsiveImagesSizes } from "@/utils/calculateResponsiveImagesSizes";
import { $, component$, useSignal, useVisibleTask$, type QRL } from "@builder.io/qwik";
import { blurhashToCssGradient } from "blurhash-to-css-gradient";
import { simplifyAspectRatio } from "../../utils/aspectRatio";
import { shortHash } from "../../utils/shortHash";
import { cn } from "../../utils/tailwind-helper";

export interface IFancyImage {
    /** the image object */
    img: IGenAsset;
    /** The responsiveFactor is the amount of space used on the screen in percent - default is 1 for full width image */
    responsiveFactor?: IResponseOptionalValue<number>;
    /** overwrite the aspect ratio for each breakpoint (width/height)  - default is to use the aspect ratio of the image */
    responsiveAspectRatio?: IResponseOptionalValue<number>;
    /** The responsiveMaxWidth is the max width of the image in px - default the is no limit and will scale to max of current breakpoint */
    responsiveMaxWidth?: IResponseOptionalValue<number>;
    /** lazyload the image or not - default is true */
    lazyload?: boolean;
    onClick$?: QRL<(event: MouseEvent) => void>;
    onLoad$?: QRL<(event: Event) => void>;
    class?: string;
}

export const FancyImage = component$<IFancyImage>(
    ({
        img,
        responsiveFactor,
        responsiveAspectRatio,
        responsiveMaxWidth,
        lazyload = true,
        onClick$,
        onLoad$,
        class: className,
    }) => {
        const loading = lazyload ? "lazy" : "eager";
        const isImgLoaded = useSignal(false);
        const imageRef = useSignal<HTMLImageElement>();

        // eslint-disable-next-line qwik/no-use-visible-task
        useVisibleTask$(({ track }) => {
            const imgRef = track(() => imageRef.value);
            if (imgRef && imgRef.complete) {
                isImgLoaded.value = true;
            }
        });
        // eslint-disable-next-line qwik/no-use-visible-task
        useVisibleTask$(({ track }) => {
            track(() => imageRef.value);
            if (imageRef.value && !imageRef.value.complete) {
                imageRef.value.onload = $(() => {
                    isImgLoaded.value = true;
                    onLoad$ && onLoad$(new Event("load"));
                });
            }
        });

        if (!img) {
            return null;
        }

        const sizes = calculateResponsiveImagesSizes({
            responsiveFactor,
            responsiveMaxWidth,
            responsiveAspectRatio,
            images: [img],
        });

        const actualSrc: string = img.src as string;
        let _src = actualSrc;

        const isSVGFile = _src.includes(".svg");

        if (!isSVGFile) {
            _src = _src.includes("?") ? _src + "&" : _src + "?";
        }

        const srcSet = `${_src + `width=${sizes.bronze.width}&height=${sizes.bronze.height}`} ${BREAKPOINTS.SILVER - 1}w,
    ${_src + `width=${sizes.silver.width}&height=${sizes.silver.height}`} ${BREAKPOINTS.GOLD - 1}w,
    ${_src + `width=${sizes.gold.width}&height=${sizes.gold.height}`} ${BREAKPOINTS.PLATINUM - 1}w,
    ${_src + `width=${sizes.platinum.width}&height=${sizes.platinum.height}`} ${BREAKPOINTS.DIAMOND - 1}w,
    ${_src + `width=${sizes.diamond.width}&height=${sizes.diamond.height}`} ${BREAKPOINTS.MASTER - 1}w,
    ${_src + `width=${sizes.master.width}&height=${sizes.master.height}`} ${BREAKPOINTS.CHALLENGER - 1}w`;

        let placeholderBackground = "#e3e3e3e3";

        const { dominantColor, blurHash } = img;

        if (blurHash) {
            try {
                placeholderBackground = blurhashToCssGradient(blurHash);
            } catch {}
        } else {
            if (dominantColor) {
                if (dominantColor.startsWith("#")) {
                    placeholderBackground = dominantColor;
                } else {
                    placeholderBackground = `#${dominantColor}`;
                }
            }
        }

        const getAspectRatio = (size: ISize) => {
            const s = simplifyAspectRatio(size.width, size.height);
            if (s.width === s.height) {
                return "1";
            }

            return `${s.width}/${s.height}`;
        };

        function generateDynamicStyles(sizes: IResponseValue<ISize>, uid: string): string {
            let styles = "";
            let previousAspectRatio: string | null = null;

            Object.entries(sizes).forEach(([tier, size]) => {
                const aspectRatio = getAspectRatio(size);
                if (aspectRatio && aspectRatio !== previousAspectRatio) {
                    if (tier.toLowerCase() === "bronze") {
                        styles += `.fancy-image#${uid}{aspect-ratio:${aspectRatio}}`;
                    } else {
                        const mediaQuery = `@media(min-width:${BREAKPOINTS[tier.toUpperCase()]}px)`;
                        styles += `${mediaQuery}{.fancy-image#${uid}{aspect-ratio:${aspectRatio}}}`;
                    }
                    previousAspectRatio = aspectRatio;
                }
            });

            return styles;
        }

        const imageStyleUid = shortHash(img.id + JSON.stringify(sizes));
        const dynamicStylesCSS = generateDynamicStyles(sizes, imageStyleUid);

        return (
            <div
                id={imageStyleUid}
                class={cn(`fancy-image relative overflow-hidden`, isImgLoaded.value && "bg-transparent", className)}
                onClick$={onClick$}
            >
                <style dangerouslySetInnerHTML={dynamicStylesCSS}></style>
                <div
                    class="absolute inset-0 z-10"
                    style={{ background: isSVGFile ? undefined : placeholderBackground }}
                ></div>
                <img
                    ref={imageRef}
                    onLoad$={() => {
                        isImgLoaded.value = true;
                        onLoad$ && onLoad$(new Event("load"));
                    }}
                    src={
                        isSVGFile
                            ? (img.src as string)
                            : (`${_src}width=${sizes.bronze.width}&height=${sizes.bronze.height}` as string)
                    }
                    class={cn(
                        `absolute inset-0 z-20 h-full w-full object-cover transition-opacity duration-300`,
                        lazyload ? (isImgLoaded.value ? "opacity-100" : "opacity-0") : "opacity-100",
                    )}
                    srcset={!isSVGFile ? srcSet : ""}
                    sizes="100vw"
                    title={img.description || undefined}
                    alt={img.description || ""}
                    loading={loading}
                    decoding={loading == "lazy" ? "async" : "sync"}
                />
            </div>
        );
    },
);

export default FancyImage;
