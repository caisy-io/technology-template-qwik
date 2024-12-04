import { component$ } from "@builder.io/qwik";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { firstLineLeft, firstLineRight } from "../../constants/lines";
import { cn } from "../../utils/tailwind-helper";

interface LinesBackgroundProps {
    theme?: "light" | "dark";
}

export default component$<LinesBackgroundProps>(({ theme }) => {
    return (
        <div class="pointer-events-none absolute inset-0">
            <div class={cn(firstLineLeft, "h-full", theme === "dark" ? "bg-slate-600" : "bg-slate-200")} />
            <div class={cn(firstLineRight, "h-full", theme === "dark" ? "bg-slate-600" : "bg-slate-200")} />
            <div class={cn(gridPadding, "h-full")}>
                <div class={cn(gridMaxWidth, gridLayout, "h-full")}>
                    <div
                        class={cn(
                            `col-span-1 hidden h-full w-full border-r silver:block`,
                            theme === "dark" ? "border-slate-600" : "border-slate-200",
                        )}
                    />
                    <div
                        class={cn(
                            `col-span-1 col-start-4 hidden h-full border-l silver:col-start-8 silver:block gold:col-start-12`,
                            theme === "dark" ? "border-slate-600" : "border-slate-200",
                        )}
                    />
                </div>
            </div>
        </div>
    );
});
