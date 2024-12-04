import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";

interface RoundLineBottomRightProps {
    theme?: "light" | "dark";
    className?: string;
}

export default component$<RoundLineBottomRightProps>(({ theme = "light", className }) => {
    return (
        <div class={cn("relative col-span-1 col-start-12 hidden h-full gold:block", className)}>
            <div
                style={{
                    marginRight: "calc(-1 * var(--offset-gold))",
                    width: "calc(100% + var(--offset-gold))",
                }}
                class={cn(
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                    "absolute right-0 top-0 h-full w-full rounded-tr-[32px] border-r border-t border-solid gold:block platinum:hidden",
                )}
            />
            <div
                style={{
                    marginRight: "calc(-1 * var(--offset-platinum))",
                    width: "calc(100% + var(--offset-platinum))",
                }}
                class={cn(
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                    "absolute right-0 top-0 h-full w-full rounded-tr-[32px] border-r border-t border-solid gold:hidden platinum:block",
                )}
            />
        </div>
    );
});
