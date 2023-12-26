import React, { useState } from 'react'
import { useLocale } from 'next-intl'
import * as Dialog from '@radix-ui/react-dialog'
import Form from '../Form'
import Close from '@/assets/icons/icon-close.svg'
import { TITLE, DESCR } from './constants'
import s from './Popup.module.scss'

const Popup = ({ children }) => {
  const [open, setOpen] = useState(false)

  const locale = useLocale()
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay}>
          <Dialog.Content asChild>
            <div className={s.popup}>
              <div className={s.popup_heading}>
                <span className={s.popup_title}>{TITLE[locale]}</span>

                <Dialog.Close asChild>
                  <button type="button" className={s.popup_close}>
                    <Close />
                  </button>
                </Dialog.Close>
              </div>

              <p className={s.popup_descr}>{DESCR[locale]}</p>

              <Form isPopup handleClose={() => setOpen(false)} />
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default Popup
