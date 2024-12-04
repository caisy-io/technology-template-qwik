import { gql } from "graphql-request";
import { f_LinkedPage } from "../fragments/LinkedPage";

export const q_allPageMeta = gql`
    ${f_LinkedPage}
    query allPageMeta($after: String, $locale: String!) {
        allPage(after: $after, locale: $locale) {
            totalCount
            pageInfo {
                hasNextPage
                endCursor
            }
            edges {
                node {
                    noIndex
                    parentPage(locale: $locale) {
                        ...LinkedPage
                    }
                    _meta {
                        publishedAt
                    }
                    id
                    slug
                }
            }
        }
    }
`;
