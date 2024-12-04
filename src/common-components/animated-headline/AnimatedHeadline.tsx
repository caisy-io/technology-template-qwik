import { component$ } from "@builder.io/qwik";
import { getCardsAnimationDelay } from "~/constants/animationInView";
import { cn } from "~/utils/tailwind-helper";

interface AnimatedHeadlineProps {
    headline?: string | null;
    componentIndex: number;
    isTextCentered?: boolean;
}

export default component$<AnimatedHeadlineProps>(({ componentIndex, headline, isTextCentered }) => {
    if (!headline) return null;
    return (
        <span class={cn("flex flex-wrap items-center gap-2", isTextCentered && "justify-center")}>
            {headline
                ?.split(" ")
                .filter((word) => word && word.length > 0)
                .map(
                    (word, index) =>
                        word?.length && (
                            <span
                                style={{ ...getCardsAnimationDelay(index) }}
                                class={cn("[&.in-view]:motion-preset-blur-left")}
                                data-animate={componentIndex > 0}
                                key={index}
                            >
                                {word}
                            </span>
                        ),
                )}
        </span>
    );
});
