import { gql } from "graphql-request";

export const f_ContactForm = gql`
    fragment ContactForm on ContactForm {
        __typename
        id
        headline
        text {
            json
        }
        headline
        linkingImages(locale: $locale) {
            ... on LinkingImage {
                __typename
                id
                image(locale: $locale) {
                    __typename
                    ...Asset
                }
                linkAddress
            }
        }
        formDescription {
            json
        }
        privacyPolicyText {
            json
        }
    }
`;
