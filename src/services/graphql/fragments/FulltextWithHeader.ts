import { gql } from "graphql-request";

export const f_FulltextWithHeader = gql`
    fragment FulltextWithHeader on FulltextWithHeader {
        id
        __typename
        headerHeadline
        headerImage(locale: $locale) {
            ...Asset
        }
        text {
            __typename
            json
            connections(locale: $locale) {
                ...Asset
            }
        }
    }
`;
