import { ContentfulItem, File, RichTextNode } from './contentfulTypes'


export interface Site extends ContentfulItem {
  slogan?: string
  githubLink?: string
  telegramLink?: string
  twitterLink?: string
  botLink?: string
  botLinkText?: string
  botLinkEnabled?: boolean
  botSection?: Section
  aboutSection?: Section
  gettingStartedSection?: Section
  faqSection?: Section
}

interface Section extends ContentfulItem {
  title?: string
  text?: RichTextNode
  image?: File
  subsections?: Section[]
}