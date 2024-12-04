import { gql } from "graphql-request";

export const f_BlogLinking = gql`
    fragment BlogLinking on BlogLinking {
        __typename
        id
        headline
        text {
            __typename
            json
        }
        linkedBlogs(locale: $locale) {
            ... on Page {
                __typename
                id
                releaseDate
                _meta {
                    publishedAt
                }
                slug
                description
                parentPage(locale: $locale) {
                    ...LinkedPage
                }
                components(locale: $locale) {
                    ... on HeadlineWithImage {
                        __typename
                        id
                        headline
                        image(locale: $locale) {
                            ...Asset
                        }
                    }
                    ... on FulltextStandalone {
                        __typename
                        id
                        text {
                            __typename
                            json
                            connections(locale: $locale) {
                                ...Asset
                            }
                        }
                    }
                    ... on FulltextWithHeader {
                        id
                        __typename
                        headerHeadline
                        headerImage(locale: $locale) {
                            ...Asset
                        }
                        text {
                            __typename
                            json
                            connections(locale: $locale) {
                                ...Asset
                            }
                        }
                    }
                    ... on FreeMediaWithText {
                        id
                        __typename
                        headline
                        text {
                            __typename
                            json
                        }
                        image(locale: $locale) {
                            ...Asset
                        }
                    }
                    ... on TwoHighlights {
                        id
                        __typename
                        headline
                        text {
                            __typename
                            json
                        }
                        highlights(locale: $locale) {
                            ... on Highlight {
                                id
                                __typename
                                text {
                                    __typename
                                    json
                                }
                                image(locale: $locale) {
                                    ...Asset
                                }
                            }
                        }
                    }
                    ... on TeaserGrid {
                        id
                        __typename
                        headline
                        text {
                            __typename
                            json
                        }
                        gridItems(locale: $locale) {
                            ... on TeaserGridItem {
                                id
                                __typename
                                text {
                                    __typename
                                    json
                                }
                                image(locale: $locale) {
                                    ...Asset
                                }
                            }
                        }
                    }
                    ... on Facts {
                        id
                        __typename
                        headline
                        text {
                            __typename
                            json
                        }
                        image(locale: $locale) {
                            ...Asset
                        }
                    }
                    ... on FramedMediaWithText {
                        id
                        __typename
                        headline
                        text {
                            __typename
                            json
                        }
                        image(locale: $locale) {
                            ...Asset
                        }
                    }
                    ... on Hero {
                        id
                        __typename
                        headline
                        text {
                            __typename
                            json
                        }
                        image(locale: $locale) {
                            ...Asset
                        }
                    }
                    ... on MultiOptionDisplay {
                        id
                        __typename
                        headline
                        optionsDisplay(locale: $locale) {
                            ... on OptionDisplay {
                                id
                                __typename
                                text {
                                    __typename
                                    json
                                }
                                image(locale: $locale) {
                                    ...Asset
                                }
                            }
                        }
                    }
                    ... on NewspaperGrid {
                        id
                        __typename
                        headline
                        text {
                            __typename
                            json
                        }
                        image(locale: $locale) {
                            ...Asset
                        }
                        cards(locale: $locale) {
                            ... on NewsCard {
                                id
                                __typename
                                text {
                                    __typename
                                    json
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
