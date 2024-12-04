import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";

interface RoundLineTopRightProps {
    theme?: string;
}

export default component$<RoundLineTopRightProps>(({ theme }) => {
    return (
        <div class="relative col-span-1 col-start-12 hidden h-full gold:block">
            <div
                style={{
                    marginRight: "calc(-1 * var(--offset-gold))",
                    width: "calc(100% + var(--offset-gold))",
                }}
                class={cn(
                    `absolute bottom-[calc(-100%_+_1px)] right-0 h-full w-full rounded-tr-[32px] border-r border-t border-solid`,
                    "gold:block platinum:hidden",
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                )}
            />
            <div
                style={{
                    marginRight: "calc(-1 * var(--offset-platinum))",
                    width: "calc(100% + var(--offset-platinum))",
                }}
                class={cn(
                    `absolute bottom-[calc(-100%_+_1px)] right-0 h-full w-full rounded-tr-[32px] border-r border-t border-solid`,
                    "gold:hidden platinum:block",
                    theme === "dark" ? "border-slate-600" : "border-slate-200",
                )}
            />
        </div>
    );
});
