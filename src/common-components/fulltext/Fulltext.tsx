/* eslint-disable qwik/no-use-visible-task */
import { $, component$ } from "@builder.io/qwik";
import RichTextRenderer from "@caisy/rich-text-qwik-renderer";
import { DocumentLink } from "./overwrites/DocumentLink";

export interface FulltextProps {
    text?: {
        json?: any;
        connections?: any;
    };
    componentIndex: number;
}

export const Fulltext = component$<FulltextProps>((props) => {
    const { text, componentIndex } = props;
    return (
        <>
            {text?.json && (
                <RichTextRenderer
                    overwrites={{
                        documentLink: $((props) =>
                            props?.node && text?.connections ? (
                                <DocumentLink
                                    node={props.node}
                                    connections={text.connections}
                                    componentIndex={componentIndex}
                                />
                            ) : null,
                        ),
                    }}
                    node={text?.json}
                />
            )}
        </>
    );
});
