import type { IGenFact } from "@/services/graphql/__generated/sdk";
import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";
import { inViewBlurLeft, inViewSlideLeft } from "~/constants/animationInView";

interface FactItemProps extends IGenFact {
    class?: string;
    theme?: "light" | "dark";
    componentIndex: number;
}

const FactItem = component$<FactItemProps>(({ class: className, label, value, theme = "light", componentIndex }) => {
    return (
        <div class={cn("fact p-x-2 px-2 py-5 silver:px-5", className)}>
            <span
                data-animate={componentIndex > 0}
                class={cn(
                    "block self-stretch font-montserrat text-xs font-medium uppercase leading-[normal] tracking-[-0.12px]",
                    theme === "dark" ? "text-slate-400" : "text-slate-500",
                    inViewSlideLeft,
                    "[&.in-view]:motion-delay-[200ms]",
                )}
            >
                {label}
            </span>
            <span
                data-animate={componentIndex > 0}
                class={cn(
                    "block self-stretch pt-3 font-montserrat font-semibold leading-[normal]",
                    theme === "dark"
                        ? "text-[20px] tracking-[-0.22px] text-white silver:text-[26px] silver:tracking-[-0.26px] platinum:text-[28px] platinum:tracking-[-0.28px]"
                        : "text-[26px] tracking-[-0.26px] text-gray-800",
                    inViewBlurLeft,
                )}
            >
                {value}
            </span>
        </div>
    );
});

export default FactItem;
