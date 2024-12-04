import { gql } from "graphql-request";

export const f_TwoHighlights = gql`
    fragment TwoHighlights on TwoHighlights {
        __typename
        headline
        text {
            __typename
            json
        }
        id
        buttonsBelowText(locale: $locale) {
            ...Button
        }
        highlights(locale: $locale) {
            ... on Highlight {
                __typename
                id
                headline
                text {
                    __typename
                    json
                }
                image(locale: $locale) {
                    ...Asset
                }
                facts(locale: $locale) {
                    ... on Fact {
                        __typename
                        id
                        label
                        value
                    }
                }
            }
        }
    }
`;
