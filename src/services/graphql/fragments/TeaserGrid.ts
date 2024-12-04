import { gql } from "graphql-request";

export const f_TeaserGrid = gql`
    fragment TeaserGrid on TeaserGrid {
        __typename
        id
        headline
        text {
            __typename
            json
        }
        button {
            ...Button
        }
        gridItems(locale: $locale) {
            ... on TeaserGridItem {
                __typename
                id
                title
                text {
                    __typename
                    json
                }
                image(locale: $locale) {
                    ...Asset
                }
                linkedPage(locale: $locale) {
                    ...LinkedPage
                }
            }
        }
    }
`;
