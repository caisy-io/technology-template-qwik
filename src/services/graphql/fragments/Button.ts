import { gql } from "graphql-request";

export const f_Button = gql`
    fragment Button on Button {
        __typename
        id
        label
        type
        linkToPage(locale: $locale) {
            ...LinkedPage
        }
        externalLink
    }
`;
