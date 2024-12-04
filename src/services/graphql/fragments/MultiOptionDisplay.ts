import { gql } from "graphql-request";

export const f_MultiOptionDisplay = gql`
    fragment MultiOptionDisplay on MultiOptionDisplay {
        id
        __typename
        headline
        text {
            json
        }
        optionsDisplay(locale: $locale) {
            ... on OptionDisplay {
                __typename
                id
                label
                strap
                title
                text {
                    __typename
                    json
                }
                image(locale: $locale) {
                    ...Asset
                }
                buttonBelowImage(locale: $locale) {
                    ...Button
                }
            }
        }
    }
`;
