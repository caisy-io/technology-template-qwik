import { gql } from "graphql-request";

export const f_NavigationCategory = gql`
    fragment NavigationCategory on NavigationCategory {
        __typename
        id
        name
        items(locale: $locale) {
            ...LinkedPage
        }
    }
`;
