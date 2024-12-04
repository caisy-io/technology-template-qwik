import { gql } from "graphql-request";

export const f_Hero = gql`
    fragment Hero on Hero {
        __typename
        id
        headline
        text {
            __typename
            json
        }
        image(locale: $locale) {
            ...Asset
        }
        buttonsBelowText(locale: $locale) {
            ...Button
        }
        videoUrl
    }
`;
