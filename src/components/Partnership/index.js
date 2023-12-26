import React from 'react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Button from '../Button'
import s from './Partnership.module.scss'

const Partnership = () => {
  const t = useTranslations('Partnership')
  return (
    <section id="partnership" className="container">
      <div className={s.partnership}>
        <h2 className={clsx('h1', s.partnership_title)}>{t('title')}</h2>

        <p className={s.partnership_descr}>{t('descr')}</p>

        <Button withPopup>{t('btn')}</Button>
      </div>
    </section>
  )
}

export default Partnership
