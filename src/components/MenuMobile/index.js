'use client'

import React, { useState, useEffect, useCallback, useRef } from 'react'
import clsx from 'clsx'
import useClickOutside from '@/hooks/useClickOutside'
import Menu from '../Menu'
import Button from '../Button'
import s from './MenuMobile.module.scss'

const MenuMobile = ({ btnText }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuRef = useRef(null)

  const handleClose = () => {
    if (window.innerWidth >= 1024) return
    setIsMenuOpen(false)
  }

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 1024 && isMenuOpen) {
      setIsMenuOpen(false)
    }
  }, [isMenuOpen])

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen, handleResize])

  useClickOutside(menuRef, () => {
    setIsMenuOpen(false)
  })
  return (
    <div className={s.menu}>
      <button
        type="button"
        aria-label="Menu"
        onClick={() => {
          setIsMenuOpen((prevState) => !prevState)
        }}
        className={clsx(s.menu_hamb, { [s.active]: isMenuOpen })}
      >
        <span className={s.menu_hamb_icon} />
      </button>

      <nav ref={menuRef} className={clsx(s.menu_nav, { [s.show]: isMenuOpen })}>
        <Menu variant="mobile" handleClose={handleClose} />

        <Button isSmall withPopup className={s.menu_btn}>
          {btnText}
        </Button>
      </nav>
    </div>
  )
}

export default MenuMobile
