import React, { ReactNode } from 'react'


export type SectionWithBackgroundPropsType = {
  children: ReactNode | ReactNode[]
  backgroundImage?: string
  backgroundContent?: ReactNode | ReactNode[]
  darkened?: boolean
}


const SectionWithBackground: React.FC<SectionWithBackgroundPropsType> = ({
  children,
  backgroundImage,
  backgroundContent,
  darkened
}) =>
  <div className='SectionWithBackground'>
    <div
      className={`SectionWithBackground__background ${darkened && 'SectionWithBackground__background--darkened'}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {backgroundContent}
    </div>
    <div className='SectionWithBackground__container'>
      <div className='SectionWithBackground__container__content'>
        {children}
      </div>
    </div>
  </div>


export default SectionWithBackground