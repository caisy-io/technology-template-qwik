import { gql } from "graphql-request";

export const f_FramedMediaWithText = gql`
    fragment FramedMediaWithText on FramedMediaWithText {
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
        buttonsBelowText {
            ...Button
        }
        videoUrl
        layout
        theme
    }
`;
