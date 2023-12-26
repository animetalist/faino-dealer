import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import clsx from 'clsx'
import Badge from '../Badge'
import LIST from './constants'
import s from './Catalog.module.scss'
import Image from 'next/image'

const Catalog = () => {
  const t = useTranslations('Catalog')
  const locale = useLocale()
  return (
    <section id="catalog" className={clsx('container', s.catalog)}>
      <Badge>{t('badge')}</Badge>

      <p className="h2">{t('title')}</p>

      <ul className={s.catalog_list}>
        {LIST.map(({ pic, title, descr }, i) => (
          <li key={i} className={s.catalog_item}>
            <Image
              src={pic}
              alt={title}
              sizes="(min-width: 576px) calc(50vw - 72px), (min-width: 1024px) calc(100vw / 3 - 88px), (min-width: 1440px) 396px, calc(100vw - 32px)"
              width={396}
              className={s.catalog_pic}
            />

            <div className={s.catalog_content}>
              <h3 className="h4">{title[locale]}</h3>

              <p className={s.catalog_descr}>{descr[locale]}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Catalog
