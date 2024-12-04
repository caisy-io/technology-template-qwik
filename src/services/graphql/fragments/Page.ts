import { gql } from "graphql-request";

export const f_Page = gql`
    fragment Page on Page {
        id
        __typename
        slug
        title
        description
        releaseDate
        noIndex
        ogImage(locale: $locale) {
            id
            src
            description
        }
        parentPage(locale: $locale) {
            ...LinkedPage
        }
        components(locale: $locale) {
            __typename
            ...ContactForm
            ...HeadlineWithImage
            ...FulltextStandalone
            ...FulltextWithHeader
            ...FreeMediaWithText
            ...TwoHighlights
            ...TeaserGrid
            ...NewspaperGrid
            ...Facts
            ...FramedMediaWithText
            ...Hero
            ...MultiOptionDisplay
            ...BlogLinking
        }
    }
`;
