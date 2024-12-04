/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { cn } from "../../utils/tailwind-helper";
import { VideoPlayButton } from "../embeded-video/VideoPlayButton";

interface YoutubeEmbedProps {
    id: string;
    videoUrl: string;
    title?: string;
    playlabel?: string;
    autoplay?: boolean;
    componentIndex?: number;
}

const idRegExp = /^[A-Za-z0-9-_]+$/;

function extractID(idOrUrl: string) {
    if (idRegExp.test(idOrUrl)) return idOrUrl;
    return urlMatcher(idOrUrl);
}

function urlMatcher(url: string): string | undefined {
    // eslint-disable-next-line no-useless-escape
    const regExps = [/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i];

    for (const regExp of regExps) {
        const match = url.match(regExp);
        if (match) {
            return match[1];
        }
    }

    return undefined;
}

export const YoutubeEmbed = component$((props: YoutubeEmbedProps) => {
    const { videoUrl, title = "", playlabel = "Play", autoplay = false, componentIndex = 1 } = props;

    const preconnected = useSignal(false);
    const videoId = useSignal("");
    const posterSrcWebp = useSignal("");
    const posterSrcsetWebp = useSignal("");
    const posterSrcJpeg = useSignal("");
    const posterSrcsetJpeg = useSignal("");
    const activated = useSignal(props.autoplay || false);

    const params = autoplay
        ? "controls=0&autoplay=1&loop=1&disablekb=1&mute=1&playsinline=1&rel=0"
        : "controls=0&autoplay=1&loop=1";

    const paramsObj = new URLSearchParams(params);
    paramsObj.append("autoplay", "1");
    paramsObj.append("playsinline", "1");
    const iframeSrc = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId.value)}?${paramsObj.toString()}`;

    const handleClick = $(() => {
        activated.value = true;
    });

    // this should run server side only
    useTask$(({ track }) => {
        track(() => videoUrl);
        const extractedId = extractID(videoUrl);
        if (extractedId) {
            videoId.value = extractedId;
            posterSrcJpeg.value = `https://i.ytimg.com/vi/${extractedId}/default.jpg`;
            posterSrcsetJpeg.value = `https://i.ytimg.com/vi/${extractedId}/maxresdefault.jpg 1280w, https://i.ytimg.com/vi/${extractedId}/sddefault.jpg 640w, https://i.ytimg.com/vi/${extractedId}/hqdefault.jpg 480w, https://i.ytimg.com/vi/${extractedId}/default.jpg 120w`;
            posterSrcWebp.value = `https://i.ytimg.com/vi_webp/${extractedId}/default.webp`;
            posterSrcsetWebp.value = `https://i.ytimg.com/vi_webp/${extractedId}/maxresdefault.webp 1280w, https://i.ytimg.com/vi_webp/${extractedId}/sddefault.webp 640w, https://i.ytimg.com/vi_webp/${extractedId}/hqdefault.webp 480w, https://i.ytimg.com/vi_webp/${extractedId}/default.webp 120w`;
        }
    });

    const warmConnections = $(() => {
        if (preconnected.value) return;

        const addPrefetch = (kind: string, url: string, as?: string) => {
            const linkEl = document.createElement("link");
            linkEl.rel = kind;
            linkEl.href = url;
            if (as) {
                linkEl.as = as;
            }
            document.head.append(linkEl);
        };

        addPrefetch("preconnect", "https://www.youtube-nocookie.com");
        addPrefetch("preconnect", "https://www.google.com");
        addPrefetch("preconnect", "https://googleads.g.doubleclick.net");
        addPrefetch("preconnect", "https://static.doubleclick.net");

        preconnected.value = true;
    });

    useVisibleTask$(() => {
        if (props.autoplay) {
            warmConnections();
        }
    });

    return (
        <>
            <div
                class={cn(`embed-youtube relative aspect-video`, props.autoplay && "pointer-events-none")}
                {...(!props.autoplay && { onMouseEnter$: warmConnections, onFocus$: warmConnections })}
            >
                <div class="pointer-events-none absolute inset-0 z-0">
                    <picture class={cn(`absolute inset-0 z-20 h-full w-full object-cover`)}>
                        <source
                            type="image/webp"
                            srcset={posterSrcsetWebp.value}
                            sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 100vw"
                        />
                        <img
                            width={1280}
                            height={720}
                            src={posterSrcJpeg.value}
                            srcset={posterSrcsetJpeg.value}
                            sizes="(max-width: 500px) 500px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 100vw"
                            title="YouTube video thumbnail"
                            alt="YouTube video thumbnail"
                            loading={componentIndex > 0 ? "lazy" : "eager"}
                            decoding={componentIndex > 0 ? "async" : "sync"}
                        />
                    </picture>
                </div>
                {!props.autoplay && !activated.value && (
                    <VideoPlayButton onClick$={handleClick} aria-label={playlabel} />
                )}
                {(props.autoplay || activated.value) && (
                    <iframe
                        class={"absolute inset-0 left-0 top-0 z-20 h-full w-full border-none"}
                        width={"auto"}
                        height={"auto"}
                        title={title || playlabel}
                        src={iframeSrc}
                        allowFullscreen
                        allow={"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"}
                    />
                )}
            </div>
        </>
    );
});

export default YoutubeEmbed;
