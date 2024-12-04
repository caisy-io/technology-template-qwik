import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";

interface SliderRoundLineBottomLeftProps {
    theme?: "light" | "dark";
    className?: string;
}

export default component$<SliderRoundLineBottomLeftProps>(({ theme = "light", className }) => {
    return (
        <div class={cn("relative col-span-1 col-start-1 hidden h-full gold:block", className)}>
            <div
                style={{
                    marginLeft: "calc(-1 * var(--offset-gold))",
                    width: "calc(100% + var(--offset-gold))",
                }}
                class={cn(
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                    "absolute left-0 top-0 h-full w-full rounded-tl-[32px] border-l border-t border-solid gold:block platinum:hidden",
                )}
            />
            <div
                style={{
                    marginLeft: "calc(-1 * var(--offset-platinum))",
                    width: "calc(100% + var(--offset-platinum))",
                }}
                class={cn(
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                    "absolute -left-[1px] top-0 h-full w-full rounded-tl-[32px] border-l border-t border-solid gold:hidden platinum:block",
                )}
            />
        </div>
    );
});
