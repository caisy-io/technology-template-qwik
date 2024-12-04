import { component$, Slot } from "@builder.io/qwik";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { cn } from "../../utils/tailwind-helper";
import RoundLineLeft from "../round-lines/RoundLineLeft";
import RoundLineTopRight from "../round-lines/RoundLineTopRight";
import Cross from "../small-cross/Cross";

interface LinesTopProps {
    rightRound?: boolean;
    leftRound?: boolean;
    class?: string;
    theme?: "light" | "dark";
    showYBorders?: boolean;
}

export default component$<LinesTopProps>(
    ({ rightRound = false, leftRound = true, class: className, theme, showYBorders }) => {
        return (
            <div class={cn(gridPadding, "relative h-9 w-full silver:h-12 gold:h-16", "pointer-events-none", className)}>
                <div class={cn(gridMaxWidth, gridLayout, "h-full grid-flow-dense")}>
                    {rightRound && <RoundLineTopRight theme={theme} />}
                    <Slot />
                    <div
                        class={cn(
                            `relative col-span-4 -ml-2 -mr-2 h-full border-b border-solid silver:col-span-6 silver:col-start-2 silver:m-0 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-2`,
                            theme === "dark" ? "border-slate-600" : "border-slate-200",
                        )}
                    >
                        <div class="absolute bottom-0 left-0 z-20">
                            <Cross theme={theme} />
                        </div>
                        <div class="absolute bottom-0 right-0 z-20">
                            <Cross theme={theme} />
                        </div>
                        <div
                            class={cn(
                                "y-borders hidden h-full justify-center silver:flex gold:col-span-10",
                                showYBorders && "-mx-[1px] border-l border-r border-solid",
                                theme === "dark" ? "border-slate-600" : "border-slate-200",
                            )}
                        >
                            <div class={cn(`z-10 h-full w-px`, theme === "dark" ? "bg-slate-600" : "bg-slate-200")} />
                            <div class="absolute bottom-0 z-20">
                                <Cross theme={theme} />
                            </div>
                        </div>
                    </div>
                    {leftRound && <RoundLineLeft theme={theme} />}
                </div>
            </div>
        );
    },
);
