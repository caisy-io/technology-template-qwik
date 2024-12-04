import { component$ } from "@builder.io/qwik";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { cn } from "../../utils/tailwind-helper";
import RoundLineBottomRight from "../round-lines/SliderRoundLineBottomLeft";
import Cross from "../small-cross/Cross";

interface Props {
    bottomRight?: boolean;
    className?: string;
    theme?: "light" | "dark";
}

export default component$((props: Props) => {
    const { bottomRight = true, className, theme } = props;

    return (
        <div class={cn(gridPadding, "relative h-9 w-full silver:h-12 gold:h-16", "pointer-events-none", className)}>
            <div class={cn(gridMaxWidth, gridLayout, "h-full grid-flow-dense")}>
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
                    <div class="hidden h-full justify-center silver:flex gold:hidden">
                        <div class={cn("z-10 h-full w-px", theme === "dark" ? "bg-slate-600" : "bg-slate-200")} />
                        <div class="absolute top-0 z-20">
                            <Cross theme={theme} />
                        </div>
                    </div>
                    <div class={cn(["hidden", "h-full w-full items-end justify-center gold:flex"])}>
                        <div class="relative block h-8 w-64">
                            <div
                                class={cn(
                                    "absolute bottom-0 left-1/2 z-10 h-full w-1/2",
                                    "rounded-tl-[32px] border-l border-t border-solid",
                                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                                )}
                            ></div>
                        </div>
                    </div>
                </div>
                {bottomRight && <RoundLineBottomRight theme={theme} />}
            </div>
        </div>
    );
});
