import { gql } from "graphql-request";
import { f_LinkedPage } from "../fragments/LinkedPage";

export const q_Footer = gql`
    ${f_LinkedPage}
    query Footer($locale: String!) {
        Footer(locale: $locale) {
            id
            content {
                json
            }
            copyright
            items(locale: $locale) {
                __typename
                ...LinkedPage
                ... on ExternalLink {
                    linkAddress
                    id
                    name
                }
                ... on FooterSection {
                    id
                    name
                }
            }
            socialLinks(locale: $locale) {
                ... on SocialLink {
                    id
                    name
                    __typename
                    icon {
                        __typename
                        ...Asset
                    }
                    linkAddress
                }
            }
        }
    }
`;
