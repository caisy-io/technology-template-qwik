import { gql } from "graphql-request";

export const f_FulltextStandalone = gql`
    fragment FulltextStandalone on FulltextStandalone {
        text {
            __typename
            json
            connections {
                ...Asset
            }
        }
        id
        __typename
    }
`;
