import React from 'react'
import { useTranslations } from 'next-intl'
import clsx from 'clsx'
import Menu from '../Menu'
import Logo from '../Logo'
import Lang from '../Lang'
import MenuMobile from '../MenuMobile'
import Button from '../Button'
import s from './Header.module.scss'

const Header = () => {
  const t = useTranslations('Header')
  return (
    <header className={clsx('container', s.header)}>
      <Logo className={s.header_logo} />

      <Menu variant="desktop" />

      <Button isSmall withPopup className={s.header_btn}>
        {t('btn')}
      </Button>

      <Lang />

      <MenuMobile btnText={t('btn')} />
    </header>
  )
}

export default Header
