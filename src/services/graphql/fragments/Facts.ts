import { gql } from "graphql-request";
export const f_Facts = gql`
    fragment Facts on Facts {
        __typename
        id
        headline
        image {
            ...Asset
        }
        text {
            __typename
            json
        }
        button(locale: $locale) {
            ...Button
        }
        factItems(locale: $locale) {
            ... on Fact {
                __typename
                id
                label
                value
            }
        }
    }
`;
