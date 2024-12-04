import { gql } from "graphql-request";

export const f_FreeMediaWithText = gql`
    fragment FreeMediaWithText on FreeMediaWithText {
        __typename
        id
        headline
        text {
            __typename
            json
        }
        image {
            ...Asset
        }
        buttonsBelowText(locale: $locale) {
            ...Button
        }
        buttonBelowMedia(locale: $locale) {
            ...Button
        }
        videoUrl
    }
`;
