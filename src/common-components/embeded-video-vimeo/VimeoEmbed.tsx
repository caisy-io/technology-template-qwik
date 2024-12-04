import { $, component$, useSignal, useTask$, useVisibleTask$ } from "@builder.io/qwik";
import { cn } from "../../utils/tailwind-helper";
import { VideoPlayButton } from "../embeded-video/VideoPlayButton";
import urlMatcher, { safeGet } from "./utils";

interface VimeoEmbedProps {
    /** Vimeo video ID or URL. */
    id: string;
    /** See https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview */
    params?: string;
    /** Label for the button that will play the video. Default label: `'Play'` */
    playlabel?: string;
    autoplay?: boolean;
    componentIndex?: number;
}

const VimeoEmbed = component$((props: VimeoEmbedProps) => {
    const { id, componentIndex = 1, playlabel = "Play Video" } = props;

    const videoId = useSignal("");
    const posterSrc = useSignal("");
    const posterSrcset = useSignal("");
    const activated = useSignal(props.autoplay || false);
    const videoHeight = useSignal(0);
    const videoWidth = useSignal(0);

    useTask$(async ({ track }) => {
        track(() => id);
        const idRegExp = /^\d+$/;
        const extractedId = idRegExp.test(id) ? id : urlMatcher(id);
        if (!extractedId) {
            return;
        }
        videoId.value = extractedId;

        const data = await safeGet(`https://vimeo.com/api/v2/video/${extractedId}.json`);
        if (data) {
            const { thumbnail_large, width, height } = data[0] || {};
            if (width && height) {
                videoHeight.value = height;
                videoWidth.value = width;
            }
            if (thumbnail_large.endsWith("d_640")) {
                posterSrc.value = thumbnail_large.slice(0, -3) + 420;
                posterSrcset.value = `${thumbnail_large.slice(0, -3)}420 420w, ${thumbnail_large} 640w, ${thumbnail_large.slice(0, -3)}1280 1280w, ${thumbnail_large.slice(0, -3)}1920 1920w`;
            } else {
                posterSrc.value = thumbnail_large;
            }
        }
    });

    const handleClick = $(() => {
        activated.value = true;
    });

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
        track(() => activated.value);

        if (!props.autoplay && !activated.value) {
            return;
        }

        const preconnect = (url: string) => {
            const linkEl = document.createElement("link");
            linkEl.rel = "preconnect";
            linkEl.href = url;
            document.head.append(linkEl);
        };

        preconnect("https://player.vimeo.com");
        preconnect("https://i.vimeocdn.com");
        preconnect("https://f.vimeocdn.com");
        preconnect("https://fresnel.vimeocdn.com");
    });

    const iframeSrc = `https://player.vimeo.com/video/${videoId.value}${"?" + (props.autoplay ? "dnt=1&controls=0&autoplay=1&loop=1&title=0&background=1&muted=1&keyboard=0&autopause=false" : "dnt=1&controls=1&autoplay=1&keyboard=1&background=0&title=1")}`;

    return (
        <>
            <div
                style={
                    (videoHeight.value &&
                        videoWidth.value && { aspectRatio: `${videoWidth.value}/${videoHeight.value}` }) ||
                    {}
                }
                class={cn(`embed-vimeo relative`, props.autoplay && "pointer-events-none")}
            >
                <div class="pointer-events-none absolute inset-0 z-0">
                    <img
                        src={posterSrc.value}
                        class={cn(`absolute inset-0 z-20 h-full w-full object-cover`)}
                        srcset={posterSrcset.value}
                        sizes="100vw"
                        title={"Vimeo video thumbnail"}
                        alt={"Vimeo video thumbnail"}
                        loading={componentIndex > 0 ? "lazy" : "eager"}
                        decoding={componentIndex > 0 ? "async" : "sync"}
                    />
                </div>

                {!props.autoplay && !activated.value && (
                    <VideoPlayButton onClick$={handleClick} aria-label={playlabel} />
                )}
                {(props.autoplay || activated.value) && (
                    <iframe
                        class={"absolute inset-0 left-0 top-0 z-20 h-full w-full border-none"}
                        width={videoWidth.value || "640"}
                        height={videoWidth.value || "360"}
                        title="video"
                        src={iframeSrc}
                        allowFullscreen
                        allow={
                            props.autoplay
                                ? "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                : "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        }
                    />
                )}
            </div>
        </>
    );
});

export default VimeoEmbed;
