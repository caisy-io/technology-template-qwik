import type { Maybe } from "../services/graphql/__generated/sdk";

export function getInspectProps({
    id,
    fieldName,
    key,
}: {
    id: Maybe<string> | undefined;
    fieldName: string;
    key?: any;
}) {
    if (import.meta.env.PUBLIC_ALLOW_PREVIEW !== "true") {
        return {};
    }

    return {
        "data-caisy-document-id": id,
        "data-caisy-field-name": fieldName,
        key: key,
    };
}
