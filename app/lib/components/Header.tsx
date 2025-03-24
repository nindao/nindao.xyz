import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import ActionButton from './ActionButton'
import links from '../utils/links'

import Logo from '../styles/img/logo.svg'


export type HeaderPropsType = {}


const Header: React.FC<HeaderPropsType> = () => {
  const mappedLinks = links
  .map(link =>
    <a
      key={link}
      href={`${link !== 'Impressum' ? '/#' : '/'}${link.toLowerCase()}`}
      className='Header__anchor'
    >
      {link}
    </a>
  )

  return  (
    <div className='Header'>
      <div className='container d-flex flex-row align-items-center justify-content-between'>
        <Link href='/'>
          <Image
            className='Logo'
            src={Logo}
            alt=''
          />
        </Link>
        <div className='flex-grow-1 d-none d-lg-flex flex-row justify-content-end'>
          {mappedLinks}
        </div>
        <div className='flex-grow-1 d-flex d-lg-none flex-row justify-content-end'>
          {mappedLinks[4]}
        </div>
        <ActionButton />
      </div>
    </div>
  )
}


export default Header