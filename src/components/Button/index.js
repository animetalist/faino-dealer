'use client'

import React from 'react'
import clsx from 'clsx'
import { handleScroll } from '@/utils/handleScroll'
import Popup from '../Popup'
import s from './Button.module.scss'

const Button = ({ href, isSmall, withPopup, children, className, ...rest }) => {
  const isScroll = href?.includes('#')

  const btnProps = isScroll ? { onClick: (e) => handleScroll(e, href) } : null

  return withPopup ? (
    <Popup>
      <button
        type="button"
        className={clsx('btn', s.btn, { [s.small]: isSmall }, className)}
      >
        {children}
      </button>
    </Popup>
  ) : (
    React.createElement(
      href ? 'a' : 'button',
      {
        className: clsx('btn', s.btn, { [s.small]: isSmall }, className),
        href: href && href,
        ...btnProps,
        ...rest,
      },
      children
    )
  )
}

export default Button
