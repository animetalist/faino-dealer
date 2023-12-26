import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import clsx from 'clsx'
import Badge from '../Badge'
import Form from '../Form'
import s from './Cta.module.scss'

const Cta = () => {
  const t = useTranslations('Cta')
  const locale = useLocale()
  const isUA = locale === 'uk'
  return (
    <section className={clsx('container', s.cta)}>
      <div className={clsx({ [s.cta_content]: isUA })}>
        <Badge>{t('badge')}</Badge>

        <p className={s.cta_title}>{t('title')}</p>

        <p className={s.cta_descr}>{t('descr')}</p>
      </div>

      <div className={s.cta_form}>
        <Form />
      </div>
    </section>
  )
}

export default Cta
