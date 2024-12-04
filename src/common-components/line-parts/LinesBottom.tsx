import { component$, Slot } from "@builder.io/qwik";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { cn } from "../../utils/tailwind-helper";

import RoundLineBottomRight from "../round-lines/RoundLineBottomRight";
import RoundLineLeft from "../round-lines/RoundLineLeft";
import Cross from "../small-cross/Cross";

interface LinesBottomProps {
    bottomRight?: boolean;
    class?: string;
    theme?: "light" | "dark";
    bottomLeft?: boolean;
    showYBorders?: boolean;
}

export default component$<LinesBottomProps>(
    ({ bottomRight = true, class: className, theme, bottomLeft, showYBorders }) => {
        return (
            <div class={cn(gridPadding, "relative h-9 w-full silver:h-12 gold:h-16", "pointer-events-none", className)}>
                <div class={cn(gridMaxWidth, gridLayout, "h-full grid-flow-dense")}>
                    {bottomLeft && <RoundLineLeft theme={theme} class="bottom-9 silver:bottom-12 gold:bottom-16" />}
                    <Slot />
                    <div
                        class={cn(
                            "relative col-span-4 -ml-2 -mr-2 h-full border-t border-solid silver:col-span-6 silver:col-start-2 silver:m-0 silver:-ml-5 silver:-mr-5 gold:col-span-10 gold:col-start-2",
                            theme === "dark" ? "border-slate-600" : "border-slate-200",
                        )}
                    >
                        <div class="absolute left-0 top-0 z-20">
                            <Cross theme={theme} />
                        </div>
                        <div class="absolute right-0 top-0 z-20">
                            <Cross theme={theme} />
                        </div>
                        <div
                            class={cn(
                                "y-borders hidden h-full justify-center silver:flex gold:col-span-10",
                                showYBorders && "-mx-[1px] border-l border-r border-solid",
                                theme === "dark" ? "border-slate-600" : "border-slate-200",
                            )}
                        >
                            <div class={cn("z-10 h-full w-px", theme === "dark" ? "bg-slate-600" : "bg-slate-200")} />
                            <div class="absolute top-0 z-20">
                                <Cross theme={theme} />
                            </div>
                        </div>
                    </div>
                    {bottomRight && <RoundLineBottomRight theme={theme} />}
                </div>
            </div>
        );
    },
);
