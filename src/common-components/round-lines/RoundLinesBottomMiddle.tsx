import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";

interface RoundLinesBottomMiddleProps {
    theme?: "light" | "dark";
    className?: string;
}

export default component$<RoundLinesBottomMiddleProps>(({ theme = "light", className }) => {
    return (
        <div class={cn("relative h-16 w-full", className)}>
            {/* Left curve */}
            <div
                style={{
                    "--offset-bl": "calc((100vw - min(100vw - (2 * 40px), 1408px)) / 2)",
                    marginLeft: "calc(-1 * var(--offset-bl))",
                    width: "calc(50% + var(--offset-bl))",
                }}
                class={cn(
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                    "absolute bottom-0 left-0 h-full rounded-br-[32px] border-b border-r border-solid",
                )}
            />
            {/* Right curve */}
            <div
                style={{
                    "--offset-br": "calc((100vw - min(100vw - (2 * 40px), 1408px)) / 2)",
                    marginRight: "calc(-1 * var(--offset-br))",
                    width: "calc(50% + var(--offset-br))",
                }}
                class={cn(
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                    "absolute bottom-0 right-0 h-full rounded-bl-[32px] border-b border-l border-solid",
                )}
            />
        </div>
    );
});
