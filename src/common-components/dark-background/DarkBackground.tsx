import { component$ } from "@builder.io/qwik";
import { gridPadding } from "../../constants/grid";
import { cn } from "../../utils/tailwind-helper";
import ElipseBottomLeft from "./ElipseBottomLeft";
import ElipseTopRight from "./ElipseTopRight";

interface DarkBackgroundProps {
    class?: string;
}

export default component$<DarkBackgroundProps>((props) => {
    const { class: className } = props;

    return (
        <div class={cn("dark-background pointer-events-none absolute h-full w-full overflow-hidden", className)}>
            {/* elipse tr */}
            <ElipseTopRight />
            {/* bg gradient and grid padding */}
            <div class={cn(gridPadding, "h-full bg-primary-gradient")}>
                {/* elipse bl */}
                <ElipseBottomLeft />
            </div>
        </div>
    );
});
