/* eslint-disable qwik/valid-lexical-scope */
import type { QRLEventHandlerMulti } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";
import { cn } from "../../utils/tailwind-helper";

export const VideoPlayButton = component$<{
    onClick$?: QRLEventHandlerMulti<PointerEvent, HTMLButtonElement>;
    class?: string;
}>(({ onClick$, class: className, ...props }) => {
    return (
        <button
            onClick$={onClick$}
            class={cn(
                "video-play-button group absolute left-0 top-0 flex h-full w-full cursor-pointer items-center justify-center border-none outline-none",
                className,
            )}
            aria-label={props["aria-label"]}
        >
            <div class="icon relative z-30 h-[120px] w-[120px] gold:h-[170px] gold:w-[170px]">
                <div
                    class="absolute left-0 top-0 z-10 h-full w-full rounded-full bg-white-opacity-20  gold:h-[170px] gold:w-[170px]"
                    style="backdrop-filter: blur(3.53px)"
                ></div>
                <div class="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center">
                    <div class="relative z-20 h-[84.71px] w-[84.71px] rounded-full bg-white transition-opacity duration-300 group-hover:animate-pulse group-hover:opacity-100 gold:h-[120px] gold:w-[120px]"></div>
                </div>
                <div class="absolute left-0 top-0 z-30 flex h-full w-full items-center justify-center">
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        class="transition-opacity duration-300 group-hover:animate-pulse"
                    >
                        <g filter="url(#filter0_b_4662_1748)">
                            <path d="M29.1177 15L7.9412 27.2262L7.9412 2.77373L29.1177 15Z" fill="#18181C" />
                        </g>
                        <defs>
                            <filter
                                id="filter0_b_4662_1748"
                                x="0.882583"
                                y="-4.28514"
                                width="35.2939"
                                height="38.5703"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="s-rGB"
                            >
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="3.52941" />
                                <feComposite
                                    in2="SourceAlpha"
                                    operator="in"
                                    result="effect1_backgroundBlur_4662_1748"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_backgroundBlur_4662_1748"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </button>
    );
});
