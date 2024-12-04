import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";

interface ButtonProps {
    label?: any;
    type: "primary" | "secondary" | "special";
    theme?: "dark" | "light";
    htmlType?: "button" | "reset" | "submit" | undefined;
    disabled?: boolean;
    class?: string;
    fullStripe?: boolean;
}

export default component$<ButtonProps>(({ label, type, theme, htmlType, disabled, class: className, fullStripe }) => {
    if (type === "primary") {
        return (
            <button
                type={htmlType}
                disabled={disabled}
                class={cn(
                    "flex h-10 items-center justify-center gap-2 bg-primary-500 bg-opacity-80 px-4 py-2 text-justify font-sans text-sm font-normal leading-5 tracking-normal text-white hover:bg-primary-400 active:bg-primary-600",
                    className,
                )}
            >
                {label}
            </button>
        );
    } else if (type === "secondary") {
        return (
            <button
                type={htmlType}
                disabled={disabled}
                class={cn(
                    "h-10 items-center justify-center gap-2 border border-solid px-4 py-2 text-justify font-sans text-sm font-normal leading-5 tracking-normal transition-colors",
                    theme === "light"
                        ? "border-gray-800 text-gray-800 hover:bg-gray-800/10 active:bg-gray-800/30"
                        : "border-white text-white hover:bg-white-opacity-10 active:bg-white-opacity-30",
                    className,
                )}
            >
                {label}
            </button>
        );
    } else {
        // special
        return (
            <button
                type={htmlType}
                disabled={disabled}
                class={cn(
                    "flex items-center justify-center gap-2 border border-solid border-white-opacity-20 bg-primary-opacity-80 px-6 py-4 text-center font-montserrat text-sm font-medium leading-normal tracking-[-0.154px] text-white backdrop-blur-[6px] hover:bg-primary-opacity-60 silver:px-6 silver:py-4 silver:text-[16px]",
                    className,
                )}
            >
                {label}
                <span
                    style={{
                        background:
                            "linear-gradient(-90deg, rgba(255, 255, 255, 1.00) 0%, rgba(255, 255, 255, 0.00) 95%)",
                        width: fullStripe ? "calc(100% - 3rem)" : "78px",
                    }}
                    class={cn("flex h-px")}
                />
            </button>
        );
    }
});
