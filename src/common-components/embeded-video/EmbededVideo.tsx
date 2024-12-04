import { extractId, getVideoProviderByUrl } from "@/utils/embededVideoHelpers";
import { component$ } from "@builder.io/qwik";
import { cn } from "../../utils/tailwind-helper";
import VimeoEmbed from "../embeded-video-vimeo/VimeoEmbed";
import YoutubeEmbed from "../embeded-video-youtube/YoutubeEmbed";

interface EmbededVideoProps {
    videoUrl: string;
    id: string;
    class?: string;
    autoplay?: boolean;
    componentIndex?: number;
}

const EmbededVideo = component$((props: EmbededVideoProps) => {
    const { videoUrl, class: className } = props;
    const videoProvider = getVideoProviderByUrl(videoUrl);
    const vimeoId = extractId(videoUrl);

    return (
        videoUrl && (
            <div id={props.id} class={cn(`video-container h-full w-full`, className)}>
                {videoProvider === "youtube" ? (
                    <YoutubeEmbed
                        id={props.id}
                        autoplay={props.autoplay}
                        componentIndex={props.componentIndex}
                        videoUrl={videoUrl}
                    ></YoutubeEmbed>
                ) : vimeoId ? (
                    <VimeoEmbed
                        id={vimeoId}
                        autoplay={props.autoplay}
                        componentIndex={props.componentIndex}
                    ></VimeoEmbed>
                ) : null}
            </div>
        )
    );
});

export default EmbededVideo;
