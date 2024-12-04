import { gql } from "graphql-request";

export const f_NewspaperGrid = gql`
    fragment NewspaperGrid on NewspaperGrid {
        id
        __typename
        strap
        headline
        theme
        text {
            __typename
            json
        }
        image(locale: $locale) {
            ...Asset
        }
        buttonBelow(locale: $locale) {
            ...Button
        }
        cards(locale: $locale) {
            ... on NewsCard {
                __typename
                id
                text {
                    __typename
                    json
                }
                title
                icon(locale: $locale) {
                    ...Asset
                }
            }
        }
    }
`;
