import { gql } from "graphql-request";
import { f_LinkedPage } from "../fragments/LinkedPage";
import { f_NavigationCategory } from "../fragments/NavigationCategory";

export const q_Navigation = gql`
    ${f_NavigationCategory}
    ${f_LinkedPage}
    query Navigation($locale: String!) {
        Navigation(locale: $locale) {
            id
            homePage {
                id
                slug
            }
            notFoundPage {
                id
                slug
            }
            items(locale: $locale) {
                __typename
                ...LinkedPage
                ... on ExternalLink {
                    linkAddress
                    id
                    name
                }
                ...NavigationCategory
            }
        }
    }
`;
