import React from 'react'
import { Link } from '@/navigation'
import clsx from 'clsx'
import { useLocale, useTranslations } from 'next-intl'
import { locales } from '@/config'
import Wrapper from './components/Wrapper'
import s from './Lang.module.scss'

const Lang = () => {
  const locale = useLocale()
  const t = useTranslations('Header')

  return (
    <Wrapper>
      {locales.map((item, i) => {
        const isLink = locale !== item

        return (
          <li key={item}>
            {React.createElement(
              isLink ? Link : 'span',
              {
                href: isLink ? '/' : null,
                locale: isLink ? item : null,
                className: clsx(s.item, { [s.link]: isLink }),
              },
              t('locale', { locale: item })
            )}
          </li>
        )
      })}
    </Wrapper>
  )
}

export default Lang
