import { ReactNode } from 'react'
import { ContentfulItem, File } from './contentfulTypes'


export interface Site extends ContentfulItem {
  botLink?: string
  botLinkText?: string
  botLinkEnabled?: boolean
  githubLink?: string
  telegramLink?: string
  twitterLink?: string
  heroSection?: Section
  botSection?: Section
  aboutSection?: Section
  instructionsSection?: Section
  faqSection?: Section
}

export interface Section extends ContentfulItem {
  title?: string
  text?: ReactNode
  image?: File
  image2?: File
  subsections?: Section[]
}