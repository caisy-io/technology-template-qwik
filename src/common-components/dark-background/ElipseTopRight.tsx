import { component$ } from "@builder.io/qwik";
import { cn } from "../../utils/tailwind-helper";

interface ElipseTopRightProps {
    class?: string;
}

export default component$<ElipseTopRightProps>((props) => {
    const { class: className } = props;

    return (
        <div class={cn("absolute top-0 z-10 h-full w-full overflow-hidden", "pointer-events-none", className)}>
            <div class="elipse-tr absolute left-[2%] top-0 h-[614px] w-[614px] rounded-[614px] bg-elipse-tr-gradient opacity-30 blur-[157px] silver:left-1/2 gold:left-3/4 platinum:left-[60%]" />
        </div>
    );
});
