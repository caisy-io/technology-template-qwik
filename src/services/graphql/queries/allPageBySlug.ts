import { gql } from "graphql-request";
import { f_Asset } from "../fragments/Asset";
import { f_Page } from "../fragments/Page";

export const q_allPageBySlug = gql`
    ${f_Page}
    ${f_Asset}
    query allPageBySlug($slug: String!, $locale: String!) {
        allPage(where: { slug: { eq: $slug } }, locale: $locale) {
            edges {
                node {
                    ...Page
                }
            }
        }
    }
`;
