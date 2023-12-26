'use client'

import React from 'react'
import clsx from 'clsx'
import MENU from './constants'
import { useLocale } from 'next-intl'
import { handleScroll } from '@/utils/handleScroll'
import s from './Menu.module.scss'

const Menu = ({ handleClose, variant }) => {
  const handleClick = (e, link) => {
    handleScroll(e, link)
    handleClose && handleClose()
  }

  const locale = useLocale()
  return (
    <ul className={clsx(s.menu, { [s[variant]]: variant })}>
      {MENU.map(({ name, link }) => (
        <li key={link}>
          <a
            href={link}
            onClick={(e) => handleClick(e, link)}
            className={s.menu_link}
          >
            {name[locale]}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Menu
