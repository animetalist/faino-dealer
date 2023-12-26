import React from 'react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import DATA from './constants'
import s from './Brands.module.scss'

const Brands = () => {
  const t = useTranslations('Brands')

  return (
    <section className={s.brands}>
      <div className={clsx('container', s.brands_inner)}>
        <span className={s.brands_title}>{t('title')}:</span>

        <Marquee autoFill gradient gradientColor="#F7F7FB" gradientWidth={24}>
          {DATA.map(({ name, pic }) => (
            <Image key={name} src={pic} alt={name} className={s.brands_pic} />
          ))}
        </Marquee>
      </div>
    </section>
  )
}

export default Brands
