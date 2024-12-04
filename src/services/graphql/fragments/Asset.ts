import { gql } from "graphql-request";

export const f_Asset = gql`
    fragment Asset on Asset {
        __typename
        title
        src
        originType
        keywords
        id
        dominantColor
        description
        copyright
        author
        width
        height
        blurHash
        dominantColor
    }
`;
