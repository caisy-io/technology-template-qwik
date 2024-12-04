import { component$ } from "@builder.io/qwik";
import { cn } from "../../utils/tailwind-helper";

interface ElipseBottomLeftProps {
    class?: string;
}

export default component$<ElipseBottomLeftProps>((props) => {
    const { class: className } = props;

    return (
        <div class={cn("absolute bottom-0 z-10 h-full w-full", "pointer-events-none", className)}>
            <div
                class={cn(
                    "bg-elipse-bl-gradient",
                    "elipse-bl absolute h-[908px] w-[908px] rounded-[908px] opacity-30 blur-[157px]",
                    "-bottom-[80%] left-0 silver:-bottom-[34%] gold:-bottom-[70%] platinum:-bottom-[52%]",
                )}
            />
        </div>
    );
});
