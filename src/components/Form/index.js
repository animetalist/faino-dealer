'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import { useLocale } from 'next-intl'
import { useForm } from 'react-hook-form'
import { useSubmit } from '@formspree/react'
import Button from '../Button'
import Field from './Field'
import { FIELDS, BTN, SUCCESS_MESSAGE } from './constants'
import s from './Form.module.scss'

const Form = ({ isPopup, handleClose }) => {
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)

  const [errorMessage, setErrorMessage] = useState(null)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    shouldUnregister: true,
  })

  const handleReset = () => {
    handleClose && handleClose()
    setSucceeded(false)
    reset()
  }

  const handleError = (error) => {
    setErrorMessage(error?.message)
    setTimeout(() => setErrorMessage(null), 5000)
  }

  const handleSend = useSubmit(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mrgrdbyv',
    {
      onError(error) {
        setSubmitting(false)
        const formErrors = error.getFormErrors()
        handleError(formErrors[0])
      },
      onSuccess() {
        setErrorMessage(null)
        setSubmitting(false)
        setSucceeded(true)
        setTimeout(handleReset, 5000)
      },
    }
  )

  const onSubmit = (submissionData) => {
    setSubmitting(true)
    handleSend(submissionData)
  }

  const data = isPopup ? FIELDS.filter((item) => !item.isExtra) : FIELDS

  const locale = useLocale()

  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className={s.form}
    >
      {data.map((item, i) => (
        <Field
          key={'f' + i}
          {...item}
          register={register}
          errors={errors}
          disabled={submitting || succeeded || errorMessage}
          className={clsx(
            s.form_field,
            { [s.dark]: isPopup },
            { [s.textarea]: item.type === 'textarea' }
          )}
        />
      ))}

      <p className={clsx(s.form_error, { [s.wide]: !isPopup })}>
        {/* validation error */}
        {Object.values(errors)[0]?.message}

        {/* formspree error */}
        {errorMessage}
      </p>

      <Button
        type="submit"
        disabled={submitting || succeeded || errorMessage}
        className={clsx(
          s.form_btn,
          { [s.wide]: !isPopup },
          { [s.success]: succeeded }
        )}
      >
        {succeeded ? SUCCESS_MESSAGE[locale] : BTN[locale]}
      </Button>
    </form>
  )
}

export default Form
