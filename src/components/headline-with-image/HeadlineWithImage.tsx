import { component$ } from "@builder.io/qwik";
import { cn } from "~/utils/tailwind-helper";
import FancyImage from "../../common-components/fancy-image/FancyImage";
import WithHeadline from "../../common-components/with-headline/WithHeadline";
import type { IGenHeadlineWithImage } from "../../services/graphql/__generated/sdk";
import { getInspectProps } from "../../utils/getInspectProps";

interface HeadlineWithImageProps extends IGenHeadlineWithImage {
    componentIndex: number;
}

export default component$<HeadlineWithImageProps>((props) => {
    const { headline, subheadline, id, image, theme, componentIndex } = props;

    return (
        <WithHeadline
            headline={headline}
            subheadline={subheadline}
            id={id}
            theme={theme}
            componentIndex={componentIndex}
        >
            <span {...getInspectProps({ id, fieldName: "image" })}>
                {image && (
                    <div class={cn("p-3")}>
                        <FancyImage img={image} lazyload={componentIndex != 0} />
                    </div>
                )}
            </span>
        </WithHeadline>
    );
});
