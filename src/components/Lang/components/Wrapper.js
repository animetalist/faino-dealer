'use client'

import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import { useLocale } from 'next-intl'
import useClickOutside from '@/hooks/useClickOutside'
import s from './Wrapper.module.scss'

const Wrapper = ({ children }) => {
  const langRef = useRef(null)

  const [isLangOpen, setIsLangOpen] = useState(false)

  useClickOutside(langRef, () => {
    setIsLangOpen(false)
  })

  const locale = useLocale()

  return (
    <div className={s.lang}>
      <button
        ref={langRef}
        type="button"
        className={clsx(s.lang_toggler, { [s.active]: isLangOpen })}
        onClick={() => setIsLangOpen((prevState) => !prevState)}
      >
        {locale === 'uk' ? 'ua' : locale}
      </button>

      <ul className={clsx(s.lang_menu, { [s.show]: isLangOpen })}>
        {children}
      </ul>
    </div>
  )
}

export default Wrapper
