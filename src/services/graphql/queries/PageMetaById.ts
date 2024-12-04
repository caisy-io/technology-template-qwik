import { gql } from "graphql-request";
import { f_LinkedPage } from "../fragments/LinkedPage";

export const q_PageMetaById = gql`
    ${f_LinkedPage}
    query PageMetaById($id: ID!, $locale: String!) {
        Page(id: $id) {
            parentPage(locale: $locale) {
                ...LinkedPage
            }
            _meta {
                publishedAt
            }
            id
            slug
            noIndex
        }
    }
`;
