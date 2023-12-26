import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import clsx from 'clsx'
import Badge from '../Badge'
import LIST from './constants'
import s from './Advantages.module.scss'

const Advantages = () => {
  const t = useTranslations('Advantages')
  const locale = useLocale()
  return (
    <section className={clsx('container', s.advantages)}>
      <Badge>{t('badge')}</Badge>

      <p className="h2">{t('title')}</p>

      <ul className={s.advantages_list}>
        {LIST.map(({ Icon, label }, i) => (
          <li key={i} className={s.advantages_item}>
            <Icon className={s.advantages_icon} />

            <span className={s.advantages_label}>{label[locale]}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Advantages
