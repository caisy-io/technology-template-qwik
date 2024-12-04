import { component$ } from "@builder.io/qwik";
import { gridLayout, gridMaxWidth, gridPadding } from "../../constants/grid";
import { cn } from "../../utils/tailwind-helper";

interface LineMiddleProps {
    class?: string;
    theme?: "light" | "dark";
}

export const LineMiddle = component$((props: LineMiddleProps) => {
    const { class: className, theme } = props;

    return (
        <div class={cn(gridPadding, "pointer-events-none absolute h-full w-full", className)}>
            <div class={cn(gridMaxWidth, gridLayout, "h-full")}>
                <div class="relative hidden h-full justify-center gold:col-span-10 gold:col-start-2 gold:flex">
                    <div class={cn(`z-10 h-full w-px`, theme === "dark" ? "bg-slate-600" : "bg-slate-200")}></div>
                </div>
            </div>
        </div>
    );
});

export default LineMiddle;
