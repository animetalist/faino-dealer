import React from 'react'
import { useTranslations } from 'next-intl'
import Badge from '../Badge'
import clsx from 'clsx'
import Image from 'next/image'
import pic from '@/assets/img/parts.svg?url'
import Label from '@/assets/img/about-label.svg'
import s from './About.module.scss'

const About = () => {
  const t = useTranslations('About')
  return (
    <section id="about" className={clsx('container', s.about)}>
      <div>
        <Badge>{t('badge')}</Badge>

        <p className={s.about_intro}>{t('intro')}</p>
      </div>

      <div
        className={s.about_descr}
        dangerouslySetInnerHTML={{ __html: t.raw('descr') }}
      />

      <div className={s.about_media}>
        <Label className={s.about_label} />

        <Image src={pic} alt="Parts" className={s.about_pic} />
      </div>
    </section>
  )
}

export default About
