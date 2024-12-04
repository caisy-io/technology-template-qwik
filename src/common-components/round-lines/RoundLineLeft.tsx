import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";

interface RoundLineTopLeftProps {
    theme?: "light" | "dark";
    class?: string;
}

export default component$<RoundLineTopLeftProps>(({ theme = "light", class: className }) => {
    return (
        <div class={cn("relative col-span-1 col-start-1 hidden h-full gold:block", className)}>
            <div
                style={{
                    marginLeft: "calc(-1 * var(--offset-gold))",
                    width: "calc(100% + var(--offset-gold))",
                }}
                class={cn(
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                    "absolute bottom-0 left-0 h-full w-full rounded-bl-[32px] border-b border-l border-solid gold:block platinum:hidden",
                )}
            />
            <div
                style={{
                    marginLeft: "calc(-1 * var(--offset-platinum))",
                    width: "calc(100% + var(--offset-platinum))",
                }}
                class={cn(
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                    "absolute -left-[1px] bottom-0 h-full w-full rounded-bl-[32px] border-b border-l border-solid gold:hidden platinum:block",
                )}
            />
        </div>
    );
});
