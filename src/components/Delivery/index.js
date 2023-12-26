import React from 'react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Image from 'next/image'
import Badge from '../Badge'
import pic from '@/assets/img/wagons.svg?url'
import s from './Delivery.module.scss'

const Delivery = () => {
  const t = useTranslations('Delivery')
  return (
    <section id="delivery" className={clsx('container', s.delivery)}>
      <Badge>{t('badge')}</Badge>

      <p className="h3">{t('title')}</p>

      <Image src={pic} alt="Wagons" className={s.delivery_pic} />

      <div
        dangerouslySetInnerHTML={{ __html: t.raw('descr') }}
        className={s.delivery_descr}
      />
    </section>
  )
}

export default Delivery
