import { cn } from "@/utils/tailwind-helper";
import { component$ } from "@builder.io/qwik";
import SmallCross from "../../common-components/small-cross/SmallCross";

interface CornerCrossesProps {
    index?: number;
    highlightIndex?: number;
}

const CornerCrosses = component$<CornerCrossesProps>(({ index, highlightIndex }) => {
    return (
        <>
            {index === 0 && (
                <>
                    <div class="absolute left-0 top-0 z-20">
                        <SmallCross />
                    </div>
                    <div class="absolute right-0 top-0 z-20">
                        <SmallCross />
                    </div>
                </>
            )}
            <div class={cn("absolute bottom-0 right-0 z-20", highlightIndex === 1 && "gold:hidden")}>
                <SmallCross />
            </div>
            <div class="absolute bottom-0 left-0 z-20">
                <SmallCross />
            </div>
        </>
    );
});

export default CornerCrosses;
