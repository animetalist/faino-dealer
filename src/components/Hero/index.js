import React from 'react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Button from '../Button'
import bg from '@/assets/img/bg-hero.svg?url'
import * as s from './Hero.module.scss'

const Hero = () => {
  const t = useTranslations('Hero')
  return (
    <section className={s.hero} style={{ backgroundImage: `url('${bg.src}')` }}>
      <div className={clsx('container', s.hero_inner)}>
        <h1 className={clsx('h2', s.hero_title)}>{t('title')}</h1>

        <p className={s.hero_descr}>{t('descr')}</p>

        <Button href="#about">{t('btn')}</Button>
      </div>
    </section>
  )
}

export default Hero
