import { gql } from "graphql-request";

export const f_HeadlineWithImage = gql`
    fragment HeadlineWithImage on HeadlineWithImage {
        __typename
        subheadline
        id
        headline
        image(locale: $locale) {
            ...Asset
        }
        theme
    }
`;
