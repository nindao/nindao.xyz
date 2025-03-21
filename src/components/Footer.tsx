import React from 'react'

import { Context } from './Store'
import ExternalLink from './ExternalLink'

import telegramImg from '../styles/img/telegram.svg'
import githubImg from '../styles/img/github.svg'
import twitterImg from '../styles/img/twitter.svg'
import links from '../libs/utils/links'


export type FooterPropsType = {}


const Footer: React.FC<FooterPropsType> = () => {
  const store = React.useContext(Context)
  const site = store?.contentful?.sites?.[0]
  const mappedLinks = links
    .map(link =>
      <a
        key={link}
        href={`${link !== 'Impressum' ? '/#' : '/'}${link}`}
        className='Footer__anchor'
      >
        {link}
      </a>
    )

  return !site ?
    <div />
    :
    <div className='Footer'>
      <div className='container d-flex flex-row justify-content-end'>
        <div className='flex-grow-1 d-none d-lg-flex flex-row'>
          {mappedLinks}
        </div>
        <div className='flex-grow-1 d-flex d-lg-none flex-row'>
          {mappedLinks[4]}
        </div>
        {[
          {
            url: site.telegramLink,
            img: telegramImg
          },
          {
            url: site.githubLink,
            img: githubImg
          },
          {
            url: site.twitterLink,
            img: twitterImg
          },
        ].map((link, index) =>
          <ExternalLink
            key={index}
            newTab
            to={link.url || ''}
            disabled={!link.url}
            className='Footer__link'
          >
            <img
              src={link.img}
              alt=''
            />
          </ExternalLink>
        )}
      </div>
    </div>
}


export default Footer