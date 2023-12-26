import React from 'react'
import { useTranslations } from 'next-intl'
import Logo from '../Logo'
import clsx from 'clsx'
import SOCIALS from './constants'
import s from './Footer.module.scss'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const t = useTranslations('Footer')
  return (
    <footer className={s.footer}>
      <div className={clsx('container', s.footer_inner)}>
        <Logo isGreen className={s.footer_logo} />

        <div className={s.footer_contacts}>
          <a href="tel:+380682771100">+38 (068) 277 11 00</a>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
        </div>

        <p className={s.footer_copy}>
          {currentYear} {t('copy')}
        </p>

        <ul className={s.footer_socials}>
          {SOCIALS.map(({ name, Icon, link }) => (
            <li key={name}>
              <a
                aria-label={name}
                target="_blank"
                href={link}
                rel="noreferrer"
                className={s.footer_socials_link}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
