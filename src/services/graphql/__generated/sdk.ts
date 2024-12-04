import type { DocumentNode } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type IGenAsset = {
  __typename?: 'Asset';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  author?: Maybe<Scalars['String']['output']>;
  blurHash?: Maybe<Scalars['String']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dominantColor?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  keywords?: Maybe<Scalars['String']['output']>;
  originType?: Maybe<Scalars['String']['output']>;
  originalName?: Maybe<Scalars['String']['output']>;
  src?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type IGenAsset_Connection = {
  __typename?: 'Asset_Connection';
  edges?: Maybe<Array<Maybe<IGenAsset_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenAsset_ConnectionEdge = {
  __typename?: 'Asset_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenAsset>;
};

export type IGenAsset_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Nested_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  blurHash?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  height?: InputMaybe<IGenCaisyField_Number_WhereInt>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  width?: InputMaybe<IGenCaisyField_Number_WhereInt>;
};

export type IGenAsset_Sort = {
  author?: InputMaybe<IGenOrder>;
  blurHash?: InputMaybe<IGenOrder>;
  copyright?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  dominantColor?: InputMaybe<IGenOrder>;
  height?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  keywords?: InputMaybe<IGenOrder>;
  originType?: InputMaybe<IGenOrder>;
  originalName?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  width?: InputMaybe<IGenOrder>;
};

export type IGenAsset_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
  author?: InputMaybe<IGenCaisyField_String_Where>;
  blurHash?: InputMaybe<IGenCaisyField_String_Where>;
  copyright?: InputMaybe<IGenCaisyField_String_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  dominantColor?: InputMaybe<IGenCaisyField_Color_Where>;
  height?: InputMaybe<IGenCaisyField_Number_WhereInt>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  keywords?: InputMaybe<IGenCaisyField_String_Where>;
  originType?: InputMaybe<IGenCaisyField_String_Where>;
  originalName?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
  width?: InputMaybe<IGenCaisyField_Number_WhereInt>;
};

export type IGenBlogLinking = {
  __typename?: 'BlogLinking';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  linkedBlogs?: Maybe<Array<Maybe<IGenBlogLinking_LinkedBlogs>>>;
  text?: Maybe<IGenBlogLinking_Text>;
};


export type IGenBlogLinkingLinkedBlogsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenBlogLinkingTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenBlogLinking_Connection = {
  __typename?: 'BlogLinking_Connection';
  edges?: Maybe<Array<Maybe<IGenBlogLinking_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenBlogLinking_ConnectionEdge = {
  __typename?: 'BlogLinking_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenBlogLinking>;
};

export type IGenBlogLinking_LinkedBlogs_Where = {
  findOne?: InputMaybe<IGenBlogLinking_LinkedBlogs_WhereConnection>;
};

export type IGenBlogLinking_LinkedBlogs_WhereConnection = {
  Page?: InputMaybe<IGenPage_Nested_Where>;
};

export type IGenBlogLinking_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBlogLinking_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBlogLinking_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenBlogLinking_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  linkedBlogs?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenBlogLinking_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenBlogLinking_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenBlogLinking_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  linkedBlogs?: InputMaybe<IGenBlogLinking_LinkedBlogs_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenBlogLinking_LinkedBlogs = IGenPage;

export type IGenBlogLinking_Text = {
  __typename?: 'BlogLinking_text';
  connections?: Maybe<Array<Maybe<IGenBlogLinking_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenBlogLinking_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenBlogLinking_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenButton = {
  __typename?: 'Button';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  externalLink?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  linkToPage?: Maybe<IGenPage>;
  type?: Maybe<Scalars['String']['output']>;
};


export type IGenButtonLinkToPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenButton_Connection = {
  __typename?: 'Button_Connection';
  edges?: Maybe<Array<Maybe<IGenButton_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenButton_ConnectionEdge = {
  __typename?: 'Button_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenButton>;
};

export type IGenButton_LinkToPage_Where = {
  findOne?: InputMaybe<IGenButton_LinkToPage_WhereConnection>;
};

export type IGenButton_LinkToPage_WhereConnection = {
  Page?: InputMaybe<IGenPage_Nested_Where>;
};

export type IGenButton_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenButton_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenButton_Nested_Where>>>;
  externalLink?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  type?: InputMaybe<IGenButton_Type_Where>;
};

export type IGenButton_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  externalLink?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  label?: InputMaybe<IGenOrder>;
  linkToPage?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  type?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export enum IGenButton_Type {
  Primary = 'primary',
  Secondary = 'secondary',
  Special = 'special'
}

export type IGenButton_Type_Where = {
  eq?: InputMaybe<IGenButton_Type>;
};

export type IGenButton_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenButton_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenButton_Where>>>;
  externalLink?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  linkToPage?: InputMaybe<IGenButton_LinkToPage_Where>;
  type?: InputMaybe<IGenButton_Type_Where>;
};

export type IGenCaisyDocument_Meta = {
  __typename?: 'CaisyDocument_Meta';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type IGenCaisyField_Color_Where = {
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
};

export type IGenCaisyField_Number_WhereInt = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

export type IGenCaisyField_Richtext_Where = {
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
};

export type IGenCaisyField_String_Where = {
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
};

export type IGenCaisy_Field_DateTime_Where = {
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type IGenCaisy_Field_Document_NotFound = {
  __typename?: 'Caisy_Field_Document_NotFound';
  id?: Maybe<Scalars['ID']['output']>;
  message?: Maybe<Scalars['String']['output']>;
};

export type IGenCaisy_Field_Tag = {
  __typename?: 'Caisy_Field_Tag';
  color?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IGenCaisy_Id__Where = {
  /** Equal */
  eq?: InputMaybe<Scalars['ID']['input']>;
  /** In (up to 100 IDs supported) */
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Not Equal */
  neq?: InputMaybe<Scalars['ID']['input']>;
  /** Not In (up to 100 IDs supported) */
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type IGenContactForm = {
  __typename?: 'ContactForm';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  formDescription?: Maybe<IGenContactForm_FormDescription>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  linkingImages?: Maybe<Array<Maybe<IGenContactForm_LinkingImages>>>;
  privacyPolicyText?: Maybe<IGenContactForm_PrivacyPolicyText>;
  text?: Maybe<IGenContactForm_Text>;
};


export type IGenContactFormFormDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenContactFormLinkingImagesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenContactFormPrivacyPolicyTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenContactFormTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenContactForm_Connection = {
  __typename?: 'ContactForm_Connection';
  edges?: Maybe<Array<Maybe<IGenContactForm_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenContactForm_ConnectionEdge = {
  __typename?: 'ContactForm_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenContactForm>;
};

export type IGenContactForm_LinkingImages_Where = {
  findOne?: InputMaybe<IGenContactForm_LinkingImages_WhereConnection>;
};

export type IGenContactForm_LinkingImages_WhereConnection = {
  LinkingImage?: InputMaybe<IGenLinkingImage_Nested_Where>;
};

export type IGenContactForm_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenContactForm_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenContactForm_Nested_Where>>>;
  formDescription?: InputMaybe<IGenCaisyField_Richtext_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  privacyPolicyText?: InputMaybe<IGenCaisyField_Richtext_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenContactForm_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  linkingImages?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenContactForm_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
  formDescription?: InputMaybe<IGenCaisyField_Richtext_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  linkingImages?: InputMaybe<IGenContactForm_LinkingImages_Where>;
  privacyPolicyText?: InputMaybe<IGenCaisyField_Richtext_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenContactForm_FormDescription = {
  __typename?: 'ContactForm_formDescription';
  connections?: Maybe<Array<Maybe<IGenContactForm_FormDescription_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenContactForm_FormDescriptionConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenContactForm_FormDescription_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenContactForm_LinkingImages = IGenLinkingImage;

export type IGenContactForm_PrivacyPolicyText = {
  __typename?: 'ContactForm_privacyPolicyText';
  connections?: Maybe<Array<Maybe<IGenContactForm_PrivacyPolicyText_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenContactForm_PrivacyPolicyTextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenContactForm_PrivacyPolicyText_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenContactForm_Text = {
  __typename?: 'ContactForm_text';
  connections?: Maybe<Array<Maybe<IGenContactForm_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenContactForm_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenContactForm_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenExternalLink = {
  __typename?: 'ExternalLink';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']['output']>;
  linkAddress?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IGenExternalLink_Connection = {
  __typename?: 'ExternalLink_Connection';
  edges?: Maybe<Array<Maybe<IGenExternalLink_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenExternalLink_ConnectionEdge = {
  __typename?: 'ExternalLink_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenExternalLink>;
};

export type IGenExternalLink_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  linkAddress?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenExternalLink_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenExternalLink_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenExternalLink_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  linkAddress?: InputMaybe<IGenCaisyField_String_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFact = {
  __typename?: 'Fact';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type IGenFact_Connection = {
  __typename?: 'Fact_Connection';
  edges?: Maybe<Array<Maybe<IGenFact_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenFact_ConnectionEdge = {
  __typename?: 'Fact_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenFact>;
};

export type IGenFact_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFact_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFact_Nested_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  value?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFact_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  label?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  value?: InputMaybe<IGenOrder>;
};

export type IGenFact_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFact_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFact_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  value?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFacts = {
  __typename?: 'Facts';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  button?: Maybe<IGenButton>;
  factItems?: Maybe<Array<Maybe<IGenFacts_FactItems>>>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  text?: Maybe<IGenFacts_Text>;
};


export type IGenFactsButtonArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFactsFactItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFactsImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFactsTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFacts_Button_Where = {
  findOne?: InputMaybe<IGenFacts_Button_WhereConnection>;
};

export type IGenFacts_Button_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenFacts_Connection = {
  __typename?: 'Facts_Connection';
  edges?: Maybe<Array<Maybe<IGenFacts_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenFacts_ConnectionEdge = {
  __typename?: 'Facts_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenFacts>;
};

export type IGenFacts_FactItems_Where = {
  findOne?: InputMaybe<IGenFacts_FactItems_WhereConnection>;
};

export type IGenFacts_FactItems_WhereConnection = {
  Fact?: InputMaybe<IGenFact_Nested_Where>;
};

export type IGenFacts_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFacts_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFacts_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenFacts_Sort = {
  button?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  factItems?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenFacts_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFacts_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFacts_Where>>>;
  button?: InputMaybe<IGenFacts_Button_Where>;
  factItems?: InputMaybe<IGenFacts_FactItems_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenFacts_FactItems = IGenFact;

export type IGenFacts_Text = {
  __typename?: 'Facts_text';
  connections?: Maybe<Array<Maybe<IGenFacts_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenFacts_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFacts_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenFooter = {
  __typename?: 'Footer';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  content?: Maybe<IGenFooter_Content>;
  copyright?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  items?: Maybe<Array<Maybe<IGenFooter_Items>>>;
  socialLinks?: Maybe<Array<Maybe<IGenFooter_SocialLinks>>>;
};


export type IGenFooterContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFooterItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFooterSocialLinksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFooterSection = {
  __typename?: 'FooterSection';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type IGenFooterSection_Connection = {
  __typename?: 'FooterSection_Connection';
  edges?: Maybe<Array<Maybe<IGenFooterSection_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenFooterSection_ConnectionEdge = {
  __typename?: 'FooterSection_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenFooterSection>;
};

export type IGenFooterSection_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenFooterSection_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFooterSection_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFooterSection_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFooter_Content = {
  __typename?: 'Footer_content';
  connections?: Maybe<Array<Maybe<IGenFooter_Content_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenFooter_ContentConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFooter_Content_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenFooter_Items = IGenExternalLink | IGenFooterSection | IGenPage;

export type IGenFooter_SocialLinks = IGenSocialLink;

export type IGenFramedMediaWithText = {
  __typename?: 'FramedMediaWithText';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  buttonsBelowText?: Maybe<Array<Maybe<IGenFramedMediaWithText_ButtonsBelowText>>>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  layout?: Maybe<Scalars['String']['output']>;
  text?: Maybe<IGenFramedMediaWithText_Text>;
  theme?: Maybe<Scalars['String']['output']>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};


export type IGenFramedMediaWithTextButtonsBelowTextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFramedMediaWithTextImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFramedMediaWithTextTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFramedMediaWithText_ButtonsBelowText_Where = {
  findOne?: InputMaybe<IGenFramedMediaWithText_ButtonsBelowText_WhereConnection>;
};

export type IGenFramedMediaWithText_ButtonsBelowText_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenFramedMediaWithText_Connection = {
  __typename?: 'FramedMediaWithText_Connection';
  edges?: Maybe<Array<Maybe<IGenFramedMediaWithText_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenFramedMediaWithText_ConnectionEdge = {
  __typename?: 'FramedMediaWithText_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenFramedMediaWithText>;
};

export type IGenFramedMediaWithText_Image_Where = {
  findOne?: InputMaybe<IGenFramedMediaWithText_Image_WhereConnection>;
};

export type IGenFramedMediaWithText_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export enum IGenFramedMediaWithText_Layout {
  Textleft = 'textleft',
  Textright = 'textright'
}

export type IGenFramedMediaWithText_Layout_Where = {
  eq?: InputMaybe<IGenFramedMediaWithText_Layout>;
};

export type IGenFramedMediaWithText_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFramedMediaWithText_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFramedMediaWithText_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  layout?: InputMaybe<IGenFramedMediaWithText_Layout_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  theme?: InputMaybe<IGenFramedMediaWithText_Theme_Where>;
  videoUrl?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFramedMediaWithText_Sort = {
  buttonsBelowText?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  layout?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  theme?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  videoUrl?: InputMaybe<IGenOrder>;
};

export enum IGenFramedMediaWithText_Theme {
  Dark = 'dark',
  Light = 'light'
}

export type IGenFramedMediaWithText_Theme_Where = {
  eq?: InputMaybe<IGenFramedMediaWithText_Theme>;
};

export type IGenFramedMediaWithText_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFramedMediaWithText_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFramedMediaWithText_Where>>>;
  buttonsBelowText?: InputMaybe<IGenFramedMediaWithText_ButtonsBelowText_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  image?: InputMaybe<IGenFramedMediaWithText_Image_Where>;
  layout?: InputMaybe<IGenFramedMediaWithText_Layout_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  theme?: InputMaybe<IGenFramedMediaWithText_Theme_Where>;
  videoUrl?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFramedMediaWithText_ButtonsBelowText = IGenButton;

export type IGenFramedMediaWithText_Text = {
  __typename?: 'FramedMediaWithText_text';
  connections?: Maybe<Array<Maybe<IGenFramedMediaWithText_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenFramedMediaWithText_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFramedMediaWithText_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenFreeMediaWithText = {
  __typename?: 'FreeMediaWithText';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  buttonBelowMedia?: Maybe<IGenButton>;
  buttonsBelowText?: Maybe<Array<Maybe<IGenFreeMediaWithText_ButtonsBelowText>>>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  text?: Maybe<IGenFreeMediaWithText_Text>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};


export type IGenFreeMediaWithTextButtonBelowMediaArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFreeMediaWithTextButtonsBelowTextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFreeMediaWithTextImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFreeMediaWithTextTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFreeMediaWithText_ButtonBelowMedia_Where = {
  findOne?: InputMaybe<IGenFreeMediaWithText_ButtonBelowMedia_WhereConnection>;
};

export type IGenFreeMediaWithText_ButtonBelowMedia_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenFreeMediaWithText_ButtonsBelowText_Where = {
  findOne?: InputMaybe<IGenFreeMediaWithText_ButtonsBelowText_WhereConnection>;
};

export type IGenFreeMediaWithText_ButtonsBelowText_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenFreeMediaWithText_Connection = {
  __typename?: 'FreeMediaWithText_Connection';
  edges?: Maybe<Array<Maybe<IGenFreeMediaWithText_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenFreeMediaWithText_ConnectionEdge = {
  __typename?: 'FreeMediaWithText_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenFreeMediaWithText>;
};

export type IGenFreeMediaWithText_Image_Where = {
  findOne?: InputMaybe<IGenFreeMediaWithText_Image_WhereConnection>;
};

export type IGenFreeMediaWithText_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenFreeMediaWithText_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFreeMediaWithText_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFreeMediaWithText_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  videoUrl?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFreeMediaWithText_Sort = {
  buttonBelowMedia?: InputMaybe<IGenOrder>;
  buttonsBelowText?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  videoUrl?: InputMaybe<IGenOrder>;
};

export type IGenFreeMediaWithText_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFreeMediaWithText_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFreeMediaWithText_Where>>>;
  buttonBelowMedia?: InputMaybe<IGenFreeMediaWithText_ButtonBelowMedia_Where>;
  buttonsBelowText?: InputMaybe<IGenFreeMediaWithText_ButtonsBelowText_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  image?: InputMaybe<IGenFreeMediaWithText_Image_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  videoUrl?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenFreeMediaWithText_ButtonsBelowText = IGenButton;

export type IGenFreeMediaWithText_Text = {
  __typename?: 'FreeMediaWithText_text';
  connections?: Maybe<Array<Maybe<IGenFreeMediaWithText_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenFreeMediaWithText_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFreeMediaWithText_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenFulltextStandalone = {
  __typename?: 'FulltextStandalone';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<IGenFulltextStandalone_Text>;
};


export type IGenFulltextStandaloneTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFulltextStandalone_Connection = {
  __typename?: 'FulltextStandalone_Connection';
  edges?: Maybe<Array<Maybe<IGenFulltextStandalone_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenFulltextStandalone_ConnectionEdge = {
  __typename?: 'FulltextStandalone_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenFulltextStandalone>;
};

export type IGenFulltextStandalone_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFulltextStandalone_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFulltextStandalone_Nested_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenFulltextStandalone_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenFulltextStandalone_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFulltextStandalone_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFulltextStandalone_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenFulltextStandalone_Text = {
  __typename?: 'FulltextStandalone_text';
  connections?: Maybe<Array<Maybe<IGenFulltextStandalone_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenFulltextStandalone_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFulltextStandalone_Text_Connections = IGenAsset;

export type IGenFulltextWithHeader = {
  __typename?: 'FulltextWithHeader';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headerHeadline?: Maybe<Scalars['String']['output']>;
  headerImage?: Maybe<IGenAsset>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<IGenFulltextWithHeader_Text>;
};


export type IGenFulltextWithHeaderHeaderImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenFulltextWithHeaderTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFulltextWithHeader_Connection = {
  __typename?: 'FulltextWithHeader_Connection';
  edges?: Maybe<Array<Maybe<IGenFulltextWithHeader_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenFulltextWithHeader_ConnectionEdge = {
  __typename?: 'FulltextWithHeader_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenFulltextWithHeader>;
};

export type IGenFulltextWithHeader_HeaderImage_Where = {
  findOne?: InputMaybe<IGenFulltextWithHeader_HeaderImage_WhereConnection>;
};

export type IGenFulltextWithHeader_HeaderImage_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenFulltextWithHeader_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFulltextWithHeader_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFulltextWithHeader_Nested_Where>>>;
  headerHeadline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenFulltextWithHeader_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  headerHeadline?: InputMaybe<IGenOrder>;
  headerImage?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenFulltextWithHeader_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenFulltextWithHeader_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenFulltextWithHeader_Where>>>;
  headerHeadline?: InputMaybe<IGenCaisyField_String_Where>;
  headerImage?: InputMaybe<IGenFulltextWithHeader_HeaderImage_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenFulltextWithHeader_Text = {
  __typename?: 'FulltextWithHeader_text';
  connections?: Maybe<Array<Maybe<IGenFulltextWithHeader_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenFulltextWithHeader_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenFulltextWithHeader_Text_Connections = IGenAsset;

export type IGenHeadlineWithImage = {
  __typename?: 'HeadlineWithImage';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  subheadline?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
};


export type IGenHeadlineWithImageImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenHeadlineWithImage_Connection = {
  __typename?: 'HeadlineWithImage_Connection';
  edges?: Maybe<Array<Maybe<IGenHeadlineWithImage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenHeadlineWithImage_ConnectionEdge = {
  __typename?: 'HeadlineWithImage_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenHeadlineWithImage>;
};

export type IGenHeadlineWithImage_Image_Where = {
  findOne?: InputMaybe<IGenHeadlineWithImage_Image_WhereConnection>;
};

export type IGenHeadlineWithImage_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenHeadlineWithImage_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenHeadlineWithImage_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenHeadlineWithImage_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  theme?: InputMaybe<IGenHeadlineWithImage_Theme_Where>;
};

export type IGenHeadlineWithImage_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  subheadline?: InputMaybe<IGenOrder>;
  theme?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export enum IGenHeadlineWithImage_Theme {
  Dark = 'dark',
  Light = 'light'
}

export type IGenHeadlineWithImage_Theme_Where = {
  eq?: InputMaybe<IGenHeadlineWithImage_Theme>;
};

export type IGenHeadlineWithImage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenHeadlineWithImage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenHeadlineWithImage_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  image?: InputMaybe<IGenHeadlineWithImage_Image_Where>;
  subheadline?: InputMaybe<IGenCaisyField_String_Where>;
  theme?: InputMaybe<IGenHeadlineWithImage_Theme_Where>;
};

export type IGenHero = {
  __typename?: 'Hero';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  buttonsBelowText?: Maybe<Array<Maybe<IGenHero_ButtonsBelowText>>>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  text?: Maybe<IGenHero_Text>;
  videoUrl?: Maybe<Scalars['String']['output']>;
};


export type IGenHeroButtonsBelowTextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenHeroImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenHeroTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenHero_ButtonsBelowText_Where = {
  findOne?: InputMaybe<IGenHero_ButtonsBelowText_WhereConnection>;
};

export type IGenHero_ButtonsBelowText_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenHero_Connection = {
  __typename?: 'Hero_Connection';
  edges?: Maybe<Array<Maybe<IGenHero_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenHero_ConnectionEdge = {
  __typename?: 'Hero_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenHero>;
};

export type IGenHero_Image_Where = {
  findOne?: InputMaybe<IGenHero_Image_WhereConnection>;
};

export type IGenHero_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenHero_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenHero_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenHero_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  videoUrl?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenHero_Sort = {
  buttonsBelowText?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
  videoUrl?: InputMaybe<IGenOrder>;
};

export type IGenHero_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenHero_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenHero_Where>>>;
  buttonsBelowText?: InputMaybe<IGenHero_ButtonsBelowText_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  image?: InputMaybe<IGenHero_Image_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  videoUrl?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenHero_ButtonsBelowText = IGenButton;

export type IGenHero_Text = {
  __typename?: 'Hero_text';
  connections?: Maybe<Array<Maybe<IGenHero_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenHero_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenHero_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenHighlight = {
  __typename?: 'Highlight';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  facts?: Maybe<Array<Maybe<IGenHighlight_Facts>>>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  text?: Maybe<IGenHighlight_Text>;
};


export type IGenHighlightFactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenHighlightImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenHighlightTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenHighlight_Connection = {
  __typename?: 'Highlight_Connection';
  edges?: Maybe<Array<Maybe<IGenHighlight_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenHighlight_ConnectionEdge = {
  __typename?: 'Highlight_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenHighlight>;
};

export type IGenHighlight_Facts_Where = {
  findOne?: InputMaybe<IGenHighlight_Facts_WhereConnection>;
};

export type IGenHighlight_Facts_WhereConnection = {
  Fact?: InputMaybe<IGenFact_Nested_Where>;
};

export type IGenHighlight_Image_Where = {
  findOne?: InputMaybe<IGenHighlight_Image_WhereConnection>;
};

export type IGenHighlight_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenHighlight_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenHighlight_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenHighlight_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenHighlight_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  facts?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenHighlight_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenHighlight_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenHighlight_Where>>>;
  facts?: InputMaybe<IGenHighlight_Facts_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  image?: InputMaybe<IGenHighlight_Image_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenHighlight_Facts = IGenFact;

export type IGenHighlight_Text = {
  __typename?: 'Highlight_text';
  connections?: Maybe<Array<Maybe<IGenHighlight_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenHighlight_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenHighlight_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenLinkingImage = {
  __typename?: 'LinkingImage';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  linkAddress?: Maybe<Scalars['String']['output']>;
};


export type IGenLinkingImageImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenLinkingImage_Connection = {
  __typename?: 'LinkingImage_Connection';
  edges?: Maybe<Array<Maybe<IGenLinkingImage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenLinkingImage_ConnectionEdge = {
  __typename?: 'LinkingImage_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenLinkingImage>;
};

export type IGenLinkingImage_Image_Where = {
  findOne?: InputMaybe<IGenLinkingImage_Image_WhereConnection>;
};

export type IGenLinkingImage_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenLinkingImage_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenLinkingImage_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenLinkingImage_Nested_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  linkAddress?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenLinkingImage_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  linkAddress?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenLinkingImage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenLinkingImage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenLinkingImage_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  image?: InputMaybe<IGenLinkingImage_Image_Where>;
  linkAddress?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenMultiOptionDisplay = {
  __typename?: 'MultiOptionDisplay';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  optionsDisplay?: Maybe<Array<Maybe<IGenMultiOptionDisplay_OptionsDisplay>>>;
  text?: Maybe<IGenMultiOptionDisplay_Text>;
};


export type IGenMultiOptionDisplayOptionsDisplayArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenMultiOptionDisplayTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenMultiOptionDisplay_Connection = {
  __typename?: 'MultiOptionDisplay_Connection';
  edges?: Maybe<Array<Maybe<IGenMultiOptionDisplay_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenMultiOptionDisplay_ConnectionEdge = {
  __typename?: 'MultiOptionDisplay_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenMultiOptionDisplay>;
};

export type IGenMultiOptionDisplay_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenMultiOptionDisplay_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenMultiOptionDisplay_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenMultiOptionDisplay_OptionsDisplay_Where = {
  findOne?: InputMaybe<IGenMultiOptionDisplay_OptionsDisplay_WhereConnection>;
};

export type IGenMultiOptionDisplay_OptionsDisplay_WhereConnection = {
  OptionDisplay?: InputMaybe<IGenOptionDisplay_Nested_Where>;
};

export type IGenMultiOptionDisplay_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  optionsDisplay?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenMultiOptionDisplay_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenMultiOptionDisplay_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenMultiOptionDisplay_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  optionsDisplay?: InputMaybe<IGenMultiOptionDisplay_OptionsDisplay_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenMultiOptionDisplay_OptionsDisplay = IGenOptionDisplay;

export type IGenMultiOptionDisplay_Text = {
  __typename?: 'MultiOptionDisplay_text';
  connections?: Maybe<Array<Maybe<IGenMultiOptionDisplay_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenMultiOptionDisplay_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenMultiOptionDisplay_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenNavigation = {
  __typename?: 'Navigation';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  homePage?: Maybe<IGenPage>;
  id?: Maybe<Scalars['ID']['output']>;
  items?: Maybe<Array<Maybe<IGenNavigation_Items>>>;
  notFoundPage?: Maybe<IGenPage>;
};


export type IGenNavigationHomePageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenNavigationItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenNavigationNotFoundPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenNavigationCategory = {
  __typename?: 'NavigationCategory';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']['output']>;
  items?: Maybe<Array<Maybe<IGenNavigationCategory_Items>>>;
  name?: Maybe<Scalars['String']['output']>;
};


export type IGenNavigationCategoryItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenNavigationCategory_Connection = {
  __typename?: 'NavigationCategory_Connection';
  edges?: Maybe<Array<Maybe<IGenNavigationCategory_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenNavigationCategory_ConnectionEdge = {
  __typename?: 'NavigationCategory_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenNavigationCategory>;
};

export type IGenNavigationCategory_Items_Where = {
  findOne?: InputMaybe<IGenNavigationCategory_Items_WhereConnection>;
};

export type IGenNavigationCategory_Items_WhereConnection = {
  Page?: InputMaybe<IGenPage_Nested_Where>;
};

export type IGenNavigationCategory_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  items?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenNavigationCategory_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNavigationCategory_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNavigationCategory_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  items?: InputMaybe<IGenNavigationCategory_Items_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenNavigationCategory_Items = IGenPage;

export type IGenNavigation_Items = IGenExternalLink | IGenNavigationCategory | IGenPage;

export type IGenNewsCard = {
  __typename?: 'NewsCard';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  icon?: Maybe<IGenAsset>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<IGenNewsCard_Text>;
  title?: Maybe<Scalars['String']['output']>;
};


export type IGenNewsCardIconArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenNewsCardTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenNewsCard_Connection = {
  __typename?: 'NewsCard_Connection';
  edges?: Maybe<Array<Maybe<IGenNewsCard_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenNewsCard_ConnectionEdge = {
  __typename?: 'NewsCard_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenNewsCard>;
};

export type IGenNewsCard_Icon_Where = {
  findOne?: InputMaybe<IGenNewsCard_Icon_WhereConnection>;
};

export type IGenNewsCard_Icon_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenNewsCard_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNewsCard_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNewsCard_Nested_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenNewsCard_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  icon?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenNewsCard_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNewsCard_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNewsCard_Where>>>;
  icon?: InputMaybe<IGenNewsCard_Icon_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenNewsCard_Text = {
  __typename?: 'NewsCard_text';
  connections?: Maybe<Array<Maybe<IGenNewsCard_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenNewsCard_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenNewsCard_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenNewspaperGrid = {
  __typename?: 'NewspaperGrid';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  buttonBelow?: Maybe<Array<Maybe<IGenNewspaperGrid_ButtonBelow>>>;
  cards?: Maybe<Array<Maybe<IGenNewspaperGrid_Cards>>>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  strap?: Maybe<Scalars['String']['output']>;
  text?: Maybe<IGenNewspaperGrid_Text>;
  theme?: Maybe<Scalars['String']['output']>;
};


export type IGenNewspaperGridButtonBelowArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenNewspaperGridCardsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenNewspaperGridImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenNewspaperGridTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenNewspaperGrid_ButtonBelow_Where = {
  findOne?: InputMaybe<IGenNewspaperGrid_ButtonBelow_WhereConnection>;
};

export type IGenNewspaperGrid_ButtonBelow_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenNewspaperGrid_Cards_Where = {
  findOne?: InputMaybe<IGenNewspaperGrid_Cards_WhereConnection>;
};

export type IGenNewspaperGrid_Cards_WhereConnection = {
  NewsCard?: InputMaybe<IGenNewsCard_Nested_Where>;
};

export type IGenNewspaperGrid_Connection = {
  __typename?: 'NewspaperGrid_Connection';
  edges?: Maybe<Array<Maybe<IGenNewspaperGrid_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenNewspaperGrid_ConnectionEdge = {
  __typename?: 'NewspaperGrid_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenNewspaperGrid>;
};

export type IGenNewspaperGrid_Image_Where = {
  findOne?: InputMaybe<IGenNewspaperGrid_Image_WhereConnection>;
};

export type IGenNewspaperGrid_Image_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenNewspaperGrid_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNewspaperGrid_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNewspaperGrid_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  strap?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  theme?: InputMaybe<IGenNewspaperGrid_Theme_Where>;
};

export type IGenNewspaperGrid_Sort = {
  buttonBelow?: InputMaybe<IGenOrder>;
  cards?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  strap?: InputMaybe<IGenOrder>;
  theme?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export enum IGenNewspaperGrid_Theme {
  Dark = 'dark',
  Light = 'light'
}

export type IGenNewspaperGrid_Theme_Where = {
  eq?: InputMaybe<IGenNewspaperGrid_Theme>;
};

export type IGenNewspaperGrid_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenNewspaperGrid_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenNewspaperGrid_Where>>>;
  buttonBelow?: InputMaybe<IGenNewspaperGrid_ButtonBelow_Where>;
  cards?: InputMaybe<IGenNewspaperGrid_Cards_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  image?: InputMaybe<IGenNewspaperGrid_Image_Where>;
  strap?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  theme?: InputMaybe<IGenNewspaperGrid_Theme_Where>;
};

export type IGenNewspaperGrid_ButtonBelow = IGenButton;

export type IGenNewspaperGrid_Cards = IGenNewsCard;

export type IGenNewspaperGrid_Text = {
  __typename?: 'NewspaperGrid_text';
  connections?: Maybe<Array<Maybe<IGenNewspaperGrid_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenNewspaperGrid_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenNewspaperGrid_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenOptionDisplay = {
  __typename?: 'OptionDisplay';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  buttonBelowImage?: Maybe<IGenButton>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  label?: Maybe<Scalars['String']['output']>;
  strap?: Maybe<Scalars['String']['output']>;
  text?: Maybe<IGenOptionDisplay_Text>;
  title?: Maybe<Scalars['String']['output']>;
};


export type IGenOptionDisplayButtonBelowImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenOptionDisplayImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenOptionDisplayTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenOptionDisplay_ButtonBelowImage_Where = {
  findOne?: InputMaybe<IGenOptionDisplay_ButtonBelowImage_WhereConnection>;
};

export type IGenOptionDisplay_ButtonBelowImage_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenOptionDisplay_Connection = {
  __typename?: 'OptionDisplay_Connection';
  edges?: Maybe<Array<Maybe<IGenOptionDisplay_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenOptionDisplay_ConnectionEdge = {
  __typename?: 'OptionDisplay_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenOptionDisplay>;
};

export type IGenOptionDisplay_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenOptionDisplay_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenOptionDisplay_Nested_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  strap?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenOptionDisplay_Sort = {
  buttonBelowImage?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  label?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  strap?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenOptionDisplay_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenOptionDisplay_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenOptionDisplay_Where>>>;
  buttonBelowImage?: InputMaybe<IGenOptionDisplay_ButtonBelowImage_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  label?: InputMaybe<IGenCaisyField_String_Where>;
  strap?: InputMaybe<IGenCaisyField_String_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenOptionDisplay_Text = {
  __typename?: 'OptionDisplay_text';
  connections?: Maybe<Array<Maybe<IGenOptionDisplay_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenOptionDisplay_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenOptionDisplay_Text_Connections = IGenCaisy_Field_Document_NotFound;

export enum IGenOrder {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type IGenPage = {
  __typename?: 'Page';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  components?: Maybe<Array<Maybe<IGenPage_Components>>>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  noIndex?: Maybe<Scalars['Boolean']['output']>;
  ogImage?: Maybe<IGenAsset>;
  parentPage?: Maybe<IGenPage>;
  releaseDate?: Maybe<Scalars['Date']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<IGenCaisy_Field_Tag>>>;
  title?: Maybe<Scalars['String']['output']>;
};


export type IGenPageComponentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenPageOgImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenPageParentPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenPageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type IGenPage_Components_Where = {
  findOne?: InputMaybe<IGenPage_Components_WhereConnection>;
};

export type IGenPage_Components_WhereConnection = {
  BlogLinking?: InputMaybe<IGenBlogLinking_Nested_Where>;
  ContactForm?: InputMaybe<IGenContactForm_Nested_Where>;
  Facts?: InputMaybe<IGenFacts_Nested_Where>;
  FramedMediaWithText?: InputMaybe<IGenFramedMediaWithText_Nested_Where>;
  FreeMediaWithText?: InputMaybe<IGenFreeMediaWithText_Nested_Where>;
  FulltextStandalone?: InputMaybe<IGenFulltextStandalone_Nested_Where>;
  FulltextWithHeader?: InputMaybe<IGenFulltextWithHeader_Nested_Where>;
  HeadlineWithImage?: InputMaybe<IGenHeadlineWithImage_Nested_Where>;
  Hero?: InputMaybe<IGenHero_Nested_Where>;
  MultiOptionDisplay?: InputMaybe<IGenMultiOptionDisplay_Nested_Where>;
  NewspaperGrid?: InputMaybe<IGenNewspaperGrid_Nested_Where>;
  TeaserGrid?: InputMaybe<IGenTeaserGrid_Nested_Where>;
  TwoHighlights?: InputMaybe<IGenTwoHighlights_Nested_Where>;
};

export type IGenPage_Connection = {
  __typename?: 'Page_Connection';
  edges?: Maybe<Array<Maybe<IGenPage_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenPage_ConnectionEdge = {
  __typename?: 'Page_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenPage>;
};

export type IGenPage_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Nested_Where>>>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  releaseDate?: InputMaybe<IGenCaisy_Field_DateTime_Where>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  tags?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenPage_OgImage_Where = {
  findOne?: InputMaybe<IGenPage_OgImage_WhereConnection>;
};

export type IGenPage_OgImage_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenPage_ParentPage_Where = {
  findOne?: InputMaybe<IGenPage_ParentPage_WhereConnection>;
};

export type IGenPage_ParentPage_WhereConnection = {
  Page?: InputMaybe<IGenPage_Nested_Where>;
};

export type IGenPage_Sort = {
  components?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  description?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  noIndex?: InputMaybe<IGenOrder>;
  ogImage?: InputMaybe<IGenOrder>;
  parentPage?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  releaseDate?: InputMaybe<IGenOrder>;
  slug?: InputMaybe<IGenOrder>;
  tags?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
  components?: InputMaybe<IGenPage_Components_Where>;
  description?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
  noIndex?: InputMaybe<Scalars['Boolean']['input']>;
  ogImage?: InputMaybe<IGenPage_OgImage_Where>;
  parentPage?: InputMaybe<IGenPage_ParentPage_Where>;
  releaseDate?: InputMaybe<IGenCaisy_Field_DateTime_Where>;
  slug?: InputMaybe<IGenCaisyField_String_Where>;
  tags?: InputMaybe<IGenCaisyField_String_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenPage_Components = IGenBlogLinking | IGenContactForm | IGenFacts | IGenFramedMediaWithText | IGenFreeMediaWithText | IGenFulltextStandalone | IGenFulltextWithHeader | IGenHeadlineWithImage | IGenHero | IGenMultiOptionDisplay | IGenNewspaperGrid | IGenTeaserGrid | IGenTwoHighlights;

export type IGenQuery = {
  __typename?: 'Query';
  Asset?: Maybe<IGenAsset>;
  BlogLinking?: Maybe<IGenBlogLinking>;
  Button?: Maybe<IGenButton>;
  ContactForm?: Maybe<IGenContactForm>;
  ExternalLink?: Maybe<IGenExternalLink>;
  Fact?: Maybe<IGenFact>;
  Facts?: Maybe<IGenFacts>;
  Footer?: Maybe<IGenFooter>;
  FooterSection?: Maybe<IGenFooterSection>;
  FramedMediaWithText?: Maybe<IGenFramedMediaWithText>;
  FreeMediaWithText?: Maybe<IGenFreeMediaWithText>;
  FulltextStandalone?: Maybe<IGenFulltextStandalone>;
  FulltextWithHeader?: Maybe<IGenFulltextWithHeader>;
  HeadlineWithImage?: Maybe<IGenHeadlineWithImage>;
  Hero?: Maybe<IGenHero>;
  Highlight?: Maybe<IGenHighlight>;
  LinkingImage?: Maybe<IGenLinkingImage>;
  MultiOptionDisplay?: Maybe<IGenMultiOptionDisplay>;
  Navigation?: Maybe<IGenNavigation>;
  NavigationCategory?: Maybe<IGenNavigationCategory>;
  NewsCard?: Maybe<IGenNewsCard>;
  NewspaperGrid?: Maybe<IGenNewspaperGrid>;
  OptionDisplay?: Maybe<IGenOptionDisplay>;
  Page?: Maybe<IGenPage>;
  SocialLink?: Maybe<IGenSocialLink>;
  Tag?: Maybe<IGenCaisy_Field_Tag>;
  TeaserGrid?: Maybe<IGenTeaserGrid>;
  TeaserGridItem?: Maybe<IGenTeaserGridItem>;
  TwoHighlights?: Maybe<IGenTwoHighlights>;
  allAsset?: Maybe<IGenAsset_Connection>;
  allBlogLinking?: Maybe<IGenBlogLinking_Connection>;
  allButton?: Maybe<IGenButton_Connection>;
  allContactForm?: Maybe<IGenContactForm_Connection>;
  allExternalLink?: Maybe<IGenExternalLink_Connection>;
  allFact?: Maybe<IGenFact_Connection>;
  allFacts?: Maybe<IGenFacts_Connection>;
  allFooterSection?: Maybe<IGenFooterSection_Connection>;
  allFramedMediaWithText?: Maybe<IGenFramedMediaWithText_Connection>;
  allFreeMediaWithText?: Maybe<IGenFreeMediaWithText_Connection>;
  allFulltextStandalone?: Maybe<IGenFulltextStandalone_Connection>;
  allFulltextWithHeader?: Maybe<IGenFulltextWithHeader_Connection>;
  allHeadlineWithImage?: Maybe<IGenHeadlineWithImage_Connection>;
  allHero?: Maybe<IGenHero_Connection>;
  allHighlight?: Maybe<IGenHighlight_Connection>;
  allLinkingImage?: Maybe<IGenLinkingImage_Connection>;
  allMultiOptionDisplay?: Maybe<IGenMultiOptionDisplay_Connection>;
  allNavigationCategory?: Maybe<IGenNavigationCategory_Connection>;
  allNewsCard?: Maybe<IGenNewsCard_Connection>;
  allNewspaperGrid?: Maybe<IGenNewspaperGrid_Connection>;
  allOptionDisplay?: Maybe<IGenOptionDisplay_Connection>;
  allPage?: Maybe<IGenPage_Connection>;
  allSocialLink?: Maybe<IGenSocialLink_Connection>;
  allTags?: Maybe<IGenTag_Connection>;
  allTeaserGrid?: Maybe<IGenTeaserGrid_Connection>;
  allTeaserGridItem?: Maybe<IGenTeaserGridItem_Connection>;
  allTwoHighlights?: Maybe<IGenTwoHighlights_Connection>;
};


export type IGenQueryAssetArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryBlogLinkingArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryButtonArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryContactFormArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryExternalLinkArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryFactArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryFactsArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryFooterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryFooterSectionArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryFramedMediaWithTextArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryFreeMediaWithTextArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryFulltextStandaloneArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryFulltextWithHeaderArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryHeadlineWithImageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryHeroArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryHighlightArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryLinkingImageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryMultiOptionDisplayArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryNavigationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryNavigationCategoryArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryNewsCardArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryNewspaperGridArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryOptionDisplayArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryPageArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQuerySocialLinkArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryTagArgs = {
  id: Scalars['ID']['input'];
};


export type IGenQueryTeaserGridArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryTeaserGridItemArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryTwoHighlightsArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenQueryAllAssetArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenAsset_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenAsset_Where>>>;
};


export type IGenQueryAllBlogLinkingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenBlogLinking_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenBlogLinking_Where>>>;
};


export type IGenQueryAllButtonArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenButton_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenButton_Where>>>;
};


export type IGenQueryAllContactFormArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenContactForm_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenContactForm_Where>>>;
};


export type IGenQueryAllExternalLinkArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenExternalLink_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenExternalLink_Where>>>;
};


export type IGenQueryAllFactArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFact_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFact_Where>>>;
};


export type IGenQueryAllFactsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFacts_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFacts_Where>>>;
};


export type IGenQueryAllFooterSectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFooterSection_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFooterSection_Where>>>;
};


export type IGenQueryAllFramedMediaWithTextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFramedMediaWithText_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFramedMediaWithText_Where>>>;
};


export type IGenQueryAllFreeMediaWithTextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFreeMediaWithText_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFreeMediaWithText_Where>>>;
};


export type IGenQueryAllFulltextStandaloneArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFulltextStandalone_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFulltextStandalone_Where>>>;
};


export type IGenQueryAllFulltextWithHeaderArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenFulltextWithHeader_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenFulltextWithHeader_Where>>>;
};


export type IGenQueryAllHeadlineWithImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenHeadlineWithImage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenHeadlineWithImage_Where>>>;
};


export type IGenQueryAllHeroArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenHero_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenHero_Where>>>;
};


export type IGenQueryAllHighlightArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenHighlight_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenHighlight_Where>>>;
};


export type IGenQueryAllLinkingImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenLinkingImage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenLinkingImage_Where>>>;
};


export type IGenQueryAllMultiOptionDisplayArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenMultiOptionDisplay_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenMultiOptionDisplay_Where>>>;
};


export type IGenQueryAllNavigationCategoryArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenNavigationCategory_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenNavigationCategory_Where>>>;
};


export type IGenQueryAllNewsCardArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenNewsCard_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenNewsCard_Where>>>;
};


export type IGenQueryAllNewspaperGridArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenNewspaperGrid_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenNewspaperGrid_Where>>>;
};


export type IGenQueryAllOptionDisplayArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenOptionDisplay_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenOptionDisplay_Where>>>;
};


export type IGenQueryAllPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenPage_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenPage_Where>>>;
};


export type IGenQueryAllSocialLinkArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenSocialLink_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenSocialLink_Where>>>;
};


export type IGenQueryAllTagsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type IGenQueryAllTeaserGridArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenTeaserGrid_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenTeaserGrid_Where>>>;
};


export type IGenQueryAllTeaserGridItemArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenTeaserGridItem_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenTeaserGridItem_Where>>>;
};


export type IGenQueryAllTwoHighlightsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<IGenTwoHighlights_Sort>>>;
  where?: InputMaybe<Array<InputMaybe<IGenTwoHighlights_Where>>>;
};

export type IGenSocialLink = {
  __typename?: 'SocialLink';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  icon?: Maybe<IGenAsset>;
  id?: Maybe<Scalars['ID']['output']>;
  linkAddress?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};


export type IGenSocialLinkIconArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenSocialLink_Connection = {
  __typename?: 'SocialLink_Connection';
  edges?: Maybe<Array<Maybe<IGenSocialLink_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenSocialLink_ConnectionEdge = {
  __typename?: 'SocialLink_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenSocialLink>;
};

export type IGenSocialLink_Icon_Where = {
  findOne?: InputMaybe<IGenSocialLink_Icon_WhereConnection>;
};

export type IGenSocialLink_Icon_WhereConnection = {
  Asset?: InputMaybe<IGenAsset_Nested_Where>;
};

export type IGenSocialLink_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  icon?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  linkAddress?: InputMaybe<IGenOrder>;
  name?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenSocialLink_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenSocialLink_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenSocialLink_Where>>>;
  icon?: InputMaybe<IGenSocialLink_Icon_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  linkAddress?: InputMaybe<IGenCaisyField_String_Where>;
  name?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenTag_Connection = {
  __typename?: 'Tag_Connection';
  edges?: Maybe<Array<Maybe<IGenTag_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenTag_ConnectionEdge = {
  __typename?: 'Tag_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenCaisy_Field_Tag>;
};

export type IGenTeaserGrid = {
  __typename?: 'TeaserGrid';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  button?: Maybe<IGenButton>;
  gridItems?: Maybe<Array<Maybe<IGenTeaserGrid_GridItems>>>;
  headline?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<IGenTeaserGrid_Text>;
};


export type IGenTeaserGridButtonArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenTeaserGridGridItemsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenTeaserGridTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenTeaserGridItem = {
  __typename?: 'TeaserGridItem';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  id?: Maybe<Scalars['ID']['output']>;
  image?: Maybe<IGenAsset>;
  linkedPage?: Maybe<IGenPage>;
  text?: Maybe<IGenTeaserGridItem_Text>;
  title?: Maybe<Scalars['String']['output']>;
};


export type IGenTeaserGridItemImageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenTeaserGridItemLinkedPageArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenTeaserGridItemTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenTeaserGridItem_Connection = {
  __typename?: 'TeaserGridItem_Connection';
  edges?: Maybe<Array<Maybe<IGenTeaserGridItem_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenTeaserGridItem_ConnectionEdge = {
  __typename?: 'TeaserGridItem_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenTeaserGridItem>;
};

export type IGenTeaserGridItem_LinkedPage_Where = {
  findOne?: InputMaybe<IGenTeaserGridItem_LinkedPage_WhereConnection>;
};

export type IGenTeaserGridItem_LinkedPage_WhereConnection = {
  Page?: InputMaybe<IGenPage_Nested_Where>;
};

export type IGenTeaserGridItem_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenTeaserGridItem_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenTeaserGridItem_Nested_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenTeaserGridItem_Sort = {
  createdAt?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  image?: InputMaybe<IGenOrder>;
  linkedPage?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  title?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenTeaserGridItem_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenTeaserGridItem_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenTeaserGridItem_Where>>>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  linkedPage?: InputMaybe<IGenTeaserGridItem_LinkedPage_Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
  title?: InputMaybe<IGenCaisyField_String_Where>;
};

export type IGenTeaserGridItem_Text = {
  __typename?: 'TeaserGridItem_text';
  connections?: Maybe<Array<Maybe<IGenTeaserGridItem_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenTeaserGridItem_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenTeaserGridItem_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenTeaserGrid_Button_Where = {
  findOne?: InputMaybe<IGenTeaserGrid_Button_WhereConnection>;
};

export type IGenTeaserGrid_Button_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenTeaserGrid_Connection = {
  __typename?: 'TeaserGrid_Connection';
  edges?: Maybe<Array<Maybe<IGenTeaserGrid_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenTeaserGrid_ConnectionEdge = {
  __typename?: 'TeaserGrid_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenTeaserGrid>;
};

export type IGenTeaserGrid_GridItems_Where = {
  findOne?: InputMaybe<IGenTeaserGrid_GridItems_WhereConnection>;
};

export type IGenTeaserGrid_GridItems_WhereConnection = {
  TeaserGridItem?: InputMaybe<IGenTeaserGridItem_Nested_Where>;
};

export type IGenTeaserGrid_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenTeaserGrid_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenTeaserGrid_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenTeaserGrid_Sort = {
  button?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  gridItems?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenTeaserGrid_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenTeaserGrid_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenTeaserGrid_Where>>>;
  button?: InputMaybe<IGenTeaserGrid_Button_Where>;
  gridItems?: InputMaybe<IGenTeaserGrid_GridItems_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenTeaserGrid_GridItems = IGenTeaserGridItem;

export type IGenTeaserGrid_Text = {
  __typename?: 'TeaserGrid_text';
  connections?: Maybe<Array<Maybe<IGenTeaserGrid_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenTeaserGrid_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenTeaserGrid_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenTwoHighlights = {
  __typename?: 'TwoHighlights';
  _meta?: Maybe<IGenCaisyDocument_Meta>;
  buttonsBelowText?: Maybe<Array<Maybe<IGenTwoHighlights_ButtonsBelowText>>>;
  headline?: Maybe<Scalars['String']['output']>;
  highlights?: Maybe<Array<Maybe<IGenTwoHighlights_Highlights>>>;
  id?: Maybe<Scalars['ID']['output']>;
  text?: Maybe<IGenTwoHighlights_Text>;
};


export type IGenTwoHighlightsButtonsBelowTextArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenTwoHighlightsHighlightsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};


export type IGenTwoHighlightsTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenTwoHighlights_ButtonsBelowText_Where = {
  findOne?: InputMaybe<IGenTwoHighlights_ButtonsBelowText_WhereConnection>;
};

export type IGenTwoHighlights_ButtonsBelowText_WhereConnection = {
  Button?: InputMaybe<IGenButton_Nested_Where>;
};

export type IGenTwoHighlights_Connection = {
  __typename?: 'TwoHighlights_Connection';
  edges?: Maybe<Array<Maybe<IGenTwoHighlights_ConnectionEdge>>>;
  pageInfo?: Maybe<IGenPageInfo>;
  totalCount?: Maybe<Scalars['Int']['output']>;
};

export type IGenTwoHighlights_ConnectionEdge = {
  __typename?: 'TwoHighlights_ConnectionEdge';
  cursor?: Maybe<Scalars['String']['output']>;
  node?: Maybe<IGenTwoHighlights>;
};

export type IGenTwoHighlights_Highlights_Where = {
  findOne?: InputMaybe<IGenTwoHighlights_Highlights_WhereConnection>;
};

export type IGenTwoHighlights_Highlights_WhereConnection = {
  Highlight?: InputMaybe<IGenHighlight_Nested_Where>;
};

export type IGenTwoHighlights_Nested_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenTwoHighlights_Nested_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenTwoHighlights_Nested_Where>>>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenTwoHighlights_Sort = {
  buttonsBelowText?: InputMaybe<IGenOrder>;
  createdAt?: InputMaybe<IGenOrder>;
  headline?: InputMaybe<IGenOrder>;
  highlights?: InputMaybe<IGenOrder>;
  id?: InputMaybe<IGenOrder>;
  publishedAt?: InputMaybe<IGenOrder>;
  updatedAt?: InputMaybe<IGenOrder>;
};

export type IGenTwoHighlights_Where = {
  AND?: InputMaybe<Array<InputMaybe<IGenTwoHighlights_Where>>>;
  OR?: InputMaybe<Array<InputMaybe<IGenTwoHighlights_Where>>>;
  buttonsBelowText?: InputMaybe<IGenTwoHighlights_ButtonsBelowText_Where>;
  headline?: InputMaybe<IGenCaisyField_String_Where>;
  highlights?: InputMaybe<IGenTwoHighlights_Highlights_Where>;
  id?: InputMaybe<IGenCaisy_Id__Where>;
  text?: InputMaybe<IGenCaisyField_Richtext_Where>;
};

export type IGenTwoHighlights_ButtonsBelowText = IGenButton;

export type IGenTwoHighlights_Highlights = IGenHighlight;

export type IGenTwoHighlights_Text = {
  __typename?: 'TwoHighlights_text';
  connections?: Maybe<Array<Maybe<IGenTwoHighlights_Text_Connections>>>;
  json?: Maybe<Scalars['JSON']['output']>;
};


export type IGenTwoHighlights_TextConnectionsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type IGenTwoHighlights_Text_Connections = IGenCaisy_Field_Document_NotFound;

export type IGenAssetFragment = { __typename: 'Asset', title?: string | null, src?: string | null, originType?: string | null, keywords?: string | null, id?: string | null, dominantColor?: string | null, description?: string | null, copyright?: string | null, author?: string | null, width?: number | null, height?: number | null, blurHash?: string | null };

export type IGenBlogLinkingFragment = { __typename: 'BlogLinking', id?: string | null, headline?: string | null, text?: { __typename: 'BlogLinking_text', json?: any | null } | null, linkedBlogs?: Array<{ __typename: 'Page', id?: string | null, releaseDate?: any | null, slug?: string | null, description?: string | null, _meta?: { __typename?: 'CaisyDocument_Meta', publishedAt?: any | null } | null, parentPage?: (
      { __typename?: 'Page' }
      & IGenLinkedPageFragment
    ) | null, components?: Array<{ __typename?: 'BlogLinking' } | { __typename?: 'ContactForm' } | { __typename: 'Facts', id?: string | null, headline?: string | null, text?: { __typename: 'Facts_text', json?: any | null } | null, image?: (
        { __typename?: 'Asset' }
        & IGenAssetFragment
      ) | null } | { __typename: 'FramedMediaWithText', id?: string | null, headline?: string | null, text?: { __typename: 'FramedMediaWithText_text', json?: any | null } | null, image?: (
        { __typename?: 'Asset' }
        & IGenAssetFragment
      ) | null } | { __typename: 'FreeMediaWithText', id?: string | null, headline?: string | null, text?: { __typename: 'FreeMediaWithText_text', json?: any | null } | null, image?: (
        { __typename?: 'Asset' }
        & IGenAssetFragment
      ) | null } | { __typename: 'FulltextStandalone', id?: string | null, text?: { __typename: 'FulltextStandalone_text', json?: any | null, connections?: Array<(
          { __typename?: 'Asset' }
          & IGenAssetFragment
        ) | null> | null } | null } | { __typename: 'FulltextWithHeader', id?: string | null, headerHeadline?: string | null, headerImage?: (
        { __typename?: 'Asset' }
        & IGenAssetFragment
      ) | null, text?: { __typename: 'FulltextWithHeader_text', json?: any | null, connections?: Array<(
          { __typename?: 'Asset' }
          & IGenAssetFragment
        ) | null> | null } | null } | { __typename: 'HeadlineWithImage', id?: string | null, headline?: string | null, image?: (
        { __typename?: 'Asset' }
        & IGenAssetFragment
      ) | null } | { __typename: 'Hero', id?: string | null, headline?: string | null, text?: { __typename: 'Hero_text', json?: any | null } | null, image?: (
        { __typename?: 'Asset' }
        & IGenAssetFragment
      ) | null } | { __typename: 'MultiOptionDisplay', id?: string | null, headline?: string | null, optionsDisplay?: Array<{ __typename: 'OptionDisplay', id?: string | null, text?: { __typename: 'OptionDisplay_text', json?: any | null } | null, image?: (
          { __typename?: 'Asset' }
          & IGenAssetFragment
        ) | null } | null> | null } | { __typename: 'NewspaperGrid', id?: string | null, headline?: string | null, text?: { __typename: 'NewspaperGrid_text', json?: any | null } | null, image?: (
        { __typename?: 'Asset' }
        & IGenAssetFragment
      ) | null, cards?: Array<{ __typename: 'NewsCard', id?: string | null, text?: { __typename: 'NewsCard_text', json?: any | null } | null } | null> | null } | { __typename: 'TeaserGrid', id?: string | null, headline?: string | null, text?: { __typename: 'TeaserGrid_text', json?: any | null } | null, gridItems?: Array<{ __typename: 'TeaserGridItem', id?: string | null, text?: { __typename: 'TeaserGridItem_text', json?: any | null } | null, image?: (
          { __typename?: 'Asset' }
          & IGenAssetFragment
        ) | null } | null> | null } | { __typename: 'TwoHighlights', id?: string | null, headline?: string | null, text?: { __typename: 'TwoHighlights_text', json?: any | null } | null, highlights?: Array<{ __typename: 'Highlight', id?: string | null, text?: { __typename: 'Highlight_text', json?: any | null } | null, image?: (
          { __typename?: 'Asset' }
          & IGenAssetFragment
        ) | null } | null> | null } | null> | null } | null> | null };

export type IGenButtonFragment = { __typename: 'Button', id?: string | null, label?: string | null, type?: string | null, externalLink?: string | null, linkToPage?: (
    { __typename?: 'Page' }
    & IGenLinkedPageFragment
  ) | null };

export type IGenContactFormFragment = { __typename: 'ContactForm', id?: string | null, headline?: string | null, text?: { __typename?: 'ContactForm_text', json?: any | null } | null, linkingImages?: Array<{ __typename: 'LinkingImage', id?: string | null, linkAddress?: string | null, image?: (
      { __typename: 'Asset' }
      & IGenAssetFragment
    ) | null } | null> | null, formDescription?: { __typename?: 'ContactForm_formDescription', json?: any | null } | null, privacyPolicyText?: { __typename?: 'ContactForm_privacyPolicyText', json?: any | null } | null };

export type IGenFactsFragment = { __typename: 'Facts', id?: string | null, headline?: string | null, image?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null, text?: { __typename: 'Facts_text', json?: any | null } | null, button?: (
    { __typename?: 'Button' }
    & IGenButtonFragment
  ) | null, factItems?: Array<{ __typename: 'Fact', id?: string | null, label?: string | null, value?: string | null } | null> | null };

export type IGenFramedMediaWithTextFragment = { __typename: 'FramedMediaWithText', id?: string | null, headline?: string | null, videoUrl?: string | null, layout?: string | null, theme?: string | null, text?: { __typename: 'FramedMediaWithText_text', json?: any | null } | null, image?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null, buttonsBelowText?: Array<(
    { __typename?: 'Button' }
    & IGenButtonFragment
  ) | null> | null };

export type IGenFreeMediaWithTextFragment = { __typename: 'FreeMediaWithText', id?: string | null, headline?: string | null, videoUrl?: string | null, text?: { __typename: 'FreeMediaWithText_text', json?: any | null } | null, image?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null, buttonsBelowText?: Array<(
    { __typename?: 'Button' }
    & IGenButtonFragment
  ) | null> | null, buttonBelowMedia?: (
    { __typename?: 'Button' }
    & IGenButtonFragment
  ) | null };

export type IGenFulltextStandaloneFragment = { __typename: 'FulltextStandalone', id?: string | null, text?: { __typename: 'FulltextStandalone_text', json?: any | null, connections?: Array<(
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null> | null } | null };

export type IGenFulltextWithHeaderFragment = { __typename: 'FulltextWithHeader', id?: string | null, headerHeadline?: string | null, headerImage?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null, text?: { __typename: 'FulltextWithHeader_text', json?: any | null, connections?: Array<(
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null> | null } | null };

export type IGenHeadlineWithImageFragment = { __typename: 'HeadlineWithImage', subheadline?: string | null, id?: string | null, headline?: string | null, theme?: string | null, image?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null };

export type IGenHeroFragment = { __typename: 'Hero', id?: string | null, headline?: string | null, videoUrl?: string | null, text?: { __typename: 'Hero_text', json?: any | null } | null, image?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null, buttonsBelowText?: Array<(
    { __typename?: 'Button' }
    & IGenButtonFragment
  ) | null> | null };

export type IGenLinkedPageFragment = { __typename: 'Page', id?: string | null, slug?: string | null, name?: string | null, description?: string | null, parentPage?: { __typename: 'Page', id?: string | null, slug?: string | null, name?: string | null, description?: string | null, parentPage?: { __typename: 'Page', id?: string | null, slug?: string | null, description?: string | null, name?: string | null } | null } | null };

export type IGenMultiOptionDisplayFragment = { __typename: 'MultiOptionDisplay', id?: string | null, headline?: string | null, text?: { __typename?: 'MultiOptionDisplay_text', json?: any | null } | null, optionsDisplay?: Array<{ __typename: 'OptionDisplay', id?: string | null, label?: string | null, strap?: string | null, title?: string | null, text?: { __typename: 'OptionDisplay_text', json?: any | null } | null, image?: (
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null, buttonBelowImage?: (
      { __typename?: 'Button' }
      & IGenButtonFragment
    ) | null } | null> | null };

export type IGenNavigationCategoryFragment = { __typename: 'NavigationCategory', id?: string | null, name?: string | null, items?: Array<(
    { __typename?: 'Page' }
    & IGenLinkedPageFragment
  ) | null> | null };

export type IGenNewspaperGridFragment = { __typename: 'NewspaperGrid', id?: string | null, strap?: string | null, headline?: string | null, theme?: string | null, text?: { __typename: 'NewspaperGrid_text', json?: any | null } | null, image?: (
    { __typename?: 'Asset' }
    & IGenAssetFragment
  ) | null, buttonBelow?: Array<(
    { __typename?: 'Button' }
    & IGenButtonFragment
  ) | null> | null, cards?: Array<{ __typename: 'NewsCard', id?: string | null, title?: string | null, text?: { __typename: 'NewsCard_text', json?: any | null } | null, icon?: (
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null } | null> | null };

export type IGenPageFragment = { __typename: 'Page', id?: string | null, slug?: string | null, title?: string | null, description?: string | null, releaseDate?: any | null, noIndex?: boolean | null, ogImage?: { __typename?: 'Asset', id?: string | null, src?: string | null, description?: string | null } | null, parentPage?: (
    { __typename?: 'Page' }
    & IGenLinkedPageFragment
  ) | null, components?: Array<(
    { __typename: 'BlogLinking' }
    & IGenBlogLinkingFragment
  ) | (
    { __typename: 'ContactForm' }
    & IGenContactFormFragment
  ) | (
    { __typename: 'Facts' }
    & IGenFactsFragment
  ) | (
    { __typename: 'FramedMediaWithText' }
    & IGenFramedMediaWithTextFragment
  ) | (
    { __typename: 'FreeMediaWithText' }
    & IGenFreeMediaWithTextFragment
  ) | (
    { __typename: 'FulltextStandalone' }
    & IGenFulltextStandaloneFragment
  ) | (
    { __typename: 'FulltextWithHeader' }
    & IGenFulltextWithHeaderFragment
  ) | (
    { __typename: 'HeadlineWithImage' }
    & IGenHeadlineWithImageFragment
  ) | (
    { __typename: 'Hero' }
    & IGenHeroFragment
  ) | (
    { __typename: 'MultiOptionDisplay' }
    & IGenMultiOptionDisplayFragment
  ) | (
    { __typename: 'NewspaperGrid' }
    & IGenNewspaperGridFragment
  ) | (
    { __typename: 'TeaserGrid' }
    & IGenTeaserGridFragment
  ) | (
    { __typename: 'TwoHighlights' }
    & IGenTwoHighlightsFragment
  ) | null> | null };

export type IGenTeaserGridFragment = { __typename: 'TeaserGrid', id?: string | null, headline?: string | null, text?: { __typename: 'TeaserGrid_text', json?: any | null } | null, button?: (
    { __typename?: 'Button' }
    & IGenButtonFragment
  ) | null, gridItems?: Array<{ __typename: 'TeaserGridItem', id?: string | null, title?: string | null, text?: { __typename: 'TeaserGridItem_text', json?: any | null } | null, image?: (
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null, linkedPage?: (
      { __typename?: 'Page' }
      & IGenLinkedPageFragment
    ) | null } | null> | null };

export type IGenTwoHighlightsFragment = { __typename: 'TwoHighlights', headline?: string | null, id?: string | null, text?: { __typename: 'TwoHighlights_text', json?: any | null } | null, buttonsBelowText?: Array<(
    { __typename?: 'Button' }
    & IGenButtonFragment
  ) | null> | null, highlights?: Array<{ __typename: 'Highlight', id?: string | null, headline?: string | null, text?: { __typename: 'Highlight_text', json?: any | null } | null, image?: (
      { __typename?: 'Asset' }
      & IGenAssetFragment
    ) | null, facts?: Array<{ __typename: 'Fact', id?: string | null, label?: string | null, value?: string | null } | null> | null } | null> | null };

export type IGenFooterQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type IGenFooterQuery = { __typename?: 'Query', Footer?: { __typename?: 'Footer', id?: string | null, copyright?: string | null, content?: { __typename?: 'Footer_content', json?: any | null } | null, items?: Array<{ __typename: 'ExternalLink', linkAddress?: string | null, id?: string | null, name?: string | null } | { __typename: 'FooterSection', id?: string | null, name?: string | null } | (
      { __typename: 'Page' }
      & IGenLinkedPageFragment
    ) | null> | null, socialLinks?: Array<{ __typename: 'SocialLink', id?: string | null, name?: string | null, linkAddress?: string | null, icon?: (
        { __typename: 'Asset' }
        & IGenAssetFragment
      ) | null } | null> | null } | null };

export type IGenNavigationQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type IGenNavigationQuery = { __typename?: 'Query', Navigation?: { __typename?: 'Navigation', id?: string | null, homePage?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null, notFoundPage?: { __typename?: 'Page', id?: string | null, slug?: string | null } | null, items?: Array<{ __typename: 'ExternalLink', linkAddress?: string | null, id?: string | null, name?: string | null } | (
      { __typename: 'NavigationCategory' }
      & IGenNavigationCategoryFragment
    ) | (
      { __typename: 'Page' }
      & IGenLinkedPageFragment
    ) | null> | null } | null };

export type IGenPageMetaByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
  locale: Scalars['String']['input'];
}>;


export type IGenPageMetaByIdQuery = { __typename?: 'Query', Page?: { __typename?: 'Page', id?: string | null, slug?: string | null, noIndex?: boolean | null, parentPage?: (
      { __typename?: 'Page' }
      & IGenLinkedPageFragment
    ) | null, _meta?: { __typename?: 'CaisyDocument_Meta', publishedAt?: any | null } | null } | null };

export type IGenAllPageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type IGenAllPageBySlugQuery = { __typename?: 'Query', allPage?: { __typename?: 'Page_Connection', edges?: Array<{ __typename?: 'Page_ConnectionEdge', node?: (
        { __typename?: 'Page' }
        & IGenPageFragment
      ) | null } | null> | null } | null };

export type IGenAllPageMetaQueryVariables = Exact<{
  after?: InputMaybe<Scalars['String']['input']>;
  locale: Scalars['String']['input'];
}>;


export type IGenAllPageMetaQuery = { __typename?: 'Query', allPage?: { __typename?: 'Page_Connection', totalCount?: number | null, pageInfo?: { __typename?: 'PageInfo', hasNextPage?: boolean | null, endCursor?: string | null } | null, edges?: Array<{ __typename?: 'Page_ConnectionEdge', node?: { __typename?: 'Page', noIndex?: boolean | null, id?: string | null, slug?: string | null, parentPage?: (
          { __typename?: 'Page' }
          & IGenLinkedPageFragment
        ) | null, _meta?: { __typename?: 'CaisyDocument_Meta', publishedAt?: any | null } | null } | null } | null> | null } | null };

export const LinkedPageFragmentDoc = gql`
    fragment LinkedPage on Page {
  __typename
  id
  slug
  name
  description
  parentPage(locale: $locale) {
    __typename
    id
    slug
    name
    description
    parentPage(locale: $locale) {
      __typename
      id
      slug
      description
      name
    }
  }
}
    `;
export const NavigationCategoryFragmentDoc = gql`
    fragment NavigationCategory on NavigationCategory {
  __typename
  id
  name
  items(locale: $locale) {
    ...LinkedPage
  }
}
    `;
export const AssetFragmentDoc = gql`
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
export const ContactFormFragmentDoc = gql`
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
export const HeadlineWithImageFragmentDoc = gql`
    fragment HeadlineWithImage on HeadlineWithImage {
  __typename
  subheadline
  id
  headline
  image(locale: $locale) {
    ...Asset
  }
  theme
}
    `;
export const FulltextStandaloneFragmentDoc = gql`
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
export const FulltextWithHeaderFragmentDoc = gql`
    fragment FulltextWithHeader on FulltextWithHeader {
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
    `;
export const ButtonFragmentDoc = gql`
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
export const FreeMediaWithTextFragmentDoc = gql`
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
export const TwoHighlightsFragmentDoc = gql`
    fragment TwoHighlights on TwoHighlights {
  __typename
  headline
  text {
    __typename
    json
  }
  id
  buttonsBelowText(locale: $locale) {
    ...Button
  }
  highlights(locale: $locale) {
    ... on Highlight {
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
      facts(locale: $locale) {
        ... on Fact {
          __typename
          id
          label
          value
        }
      }
    }
  }
}
    `;
export const TeaserGridFragmentDoc = gql`
    fragment TeaserGrid on TeaserGrid {
  __typename
  id
  headline
  text {
    __typename
    json
  }
  button {
    ...Button
  }
  gridItems(locale: $locale) {
    ... on TeaserGridItem {
      __typename
      id
      title
      text {
        __typename
        json
      }
      image(locale: $locale) {
        ...Asset
      }
      linkedPage(locale: $locale) {
        ...LinkedPage
      }
    }
  }
}
    `;
export const NewspaperGridFragmentDoc = gql`
    fragment NewspaperGrid on NewspaperGrid {
  id
  __typename
  strap
  headline
  theme
  text {
    __typename
    json
  }
  image(locale: $locale) {
    ...Asset
  }
  buttonBelow(locale: $locale) {
    ...Button
  }
  cards(locale: $locale) {
    ... on NewsCard {
      __typename
      id
      text {
        __typename
        json
      }
      title
      icon(locale: $locale) {
        ...Asset
      }
    }
  }
}
    `;
export const FactsFragmentDoc = gql`
    fragment Facts on Facts {
  __typename
  id
  headline
  image {
    ...Asset
  }
  text {
    __typename
    json
  }
  button(locale: $locale) {
    ...Button
  }
  factItems(locale: $locale) {
    ... on Fact {
      __typename
      id
      label
      value
    }
  }
}
    `;
export const FramedMediaWithTextFragmentDoc = gql`
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
export const HeroFragmentDoc = gql`
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
export const MultiOptionDisplayFragmentDoc = gql`
    fragment MultiOptionDisplay on MultiOptionDisplay {
  id
  __typename
  headline
  text {
    json
  }
  optionsDisplay(locale: $locale) {
    ... on OptionDisplay {
      __typename
      id
      label
      strap
      title
      text {
        __typename
        json
      }
      image(locale: $locale) {
        ...Asset
      }
      buttonBelowImage(locale: $locale) {
        ...Button
      }
    }
  }
}
    `;
export const BlogLinkingFragmentDoc = gql`
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
export const PageFragmentDoc = gql`
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
export const FooterDocument = gql`
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
    ${LinkedPageFragmentDoc}
${AssetFragmentDoc}`;
export const NavigationDocument = gql`
    query Navigation($locale: String!) {
  Navigation(locale: $locale) {
    id
    homePage {
      id
      slug
    }
    notFoundPage {
      id
      slug
    }
    items(locale: $locale) {
      __typename
      ...LinkedPage
      ... on ExternalLink {
        linkAddress
        id
        name
      }
      ...NavigationCategory
    }
  }
}
    ${LinkedPageFragmentDoc}
${NavigationCategoryFragmentDoc}`;
export const PageMetaByIdDocument = gql`
    query PageMetaById($id: ID!, $locale: String!) {
  Page(id: $id) {
    parentPage(locale: $locale) {
      ...LinkedPage
    }
    _meta {
      publishedAt
    }
    id
    slug
    noIndex
  }
}
    ${LinkedPageFragmentDoc}`;
export const AllPageBySlugDocument = gql`
    query allPageBySlug($slug: String!, $locale: String!) {
  allPage(where: {slug: {eq: $slug}}, locale: $locale) {
    edges {
      node {
        ...Page
      }
    }
  }
}
    ${PageFragmentDoc}
${LinkedPageFragmentDoc}
${ContactFormFragmentDoc}
${AssetFragmentDoc}
${HeadlineWithImageFragmentDoc}
${FulltextStandaloneFragmentDoc}
${FulltextWithHeaderFragmentDoc}
${FreeMediaWithTextFragmentDoc}
${ButtonFragmentDoc}
${TwoHighlightsFragmentDoc}
${TeaserGridFragmentDoc}
${NewspaperGridFragmentDoc}
${FactsFragmentDoc}
${FramedMediaWithTextFragmentDoc}
${HeroFragmentDoc}
${MultiOptionDisplayFragmentDoc}
${BlogLinkingFragmentDoc}`;
export const AllPageMetaDocument = gql`
    query allPageMeta($after: String, $locale: String!) {
  allPage(after: $after, locale: $locale) {
    totalCount
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        noIndex
        parentPage(locale: $locale) {
          ...LinkedPage
        }
        _meta {
          publishedAt
        }
        id
        slug
      }
    }
  }
}
    ${LinkedPageFragmentDoc}`;
export type Requester<C = {}> = <R, V>(doc: DocumentNode, vars?: V, options?: C) => Promise<R> | AsyncIterable<R>
export function getSdk<C>(requester: Requester<C>) {
  return {
    Footer(variables: IGenFooterQueryVariables, options?: C): Promise<IGenFooterQuery> {
      return requester<IGenFooterQuery, IGenFooterQueryVariables>(FooterDocument, variables, options) as Promise<IGenFooterQuery>;
    },
    Navigation(variables: IGenNavigationQueryVariables, options?: C): Promise<IGenNavigationQuery> {
      return requester<IGenNavigationQuery, IGenNavigationQueryVariables>(NavigationDocument, variables, options) as Promise<IGenNavigationQuery>;
    },
    PageMetaById(variables: IGenPageMetaByIdQueryVariables, options?: C): Promise<IGenPageMetaByIdQuery> {
      return requester<IGenPageMetaByIdQuery, IGenPageMetaByIdQueryVariables>(PageMetaByIdDocument, variables, options) as Promise<IGenPageMetaByIdQuery>;
    },
    allPageBySlug(variables: IGenAllPageBySlugQueryVariables, options?: C): Promise<IGenAllPageBySlugQuery> {
      return requester<IGenAllPageBySlugQuery, IGenAllPageBySlugQueryVariables>(AllPageBySlugDocument, variables, options) as Promise<IGenAllPageBySlugQuery>;
    },
    allPageMeta(variables: IGenAllPageMetaQueryVariables, options?: C): Promise<IGenAllPageMetaQuery> {
      return requester<IGenAllPageMetaQuery, IGenAllPageMetaQueryVariables>(AllPageMetaDocument, variables, options) as Promise<IGenAllPageMetaQuery>;
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;