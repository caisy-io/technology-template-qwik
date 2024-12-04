import { gql } from "graphql-request";

export const f_LinkedPage = gql`
    fragment LinkedPage on Page {
        __typename
        id
        slug
        name
        description
        parentPage(locale: $locale) {
            __typename
            id
            slug
            name
            description
            parentPage(locale: $locale) {
                __typename
                id
                slug
                description
                name
            }
        }
    }
`;
