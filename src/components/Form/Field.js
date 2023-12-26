import React from 'react'
import { useLocale } from 'next-intl'
import { ERROR_MESSAGE } from './constants'

const Field = ({
  type,
  name,
  placeholder,
  pattern,
  required,
  isPopup,
  register,
  errors,
  disabled,
  className,
}) => {
  const isTextarea = type === 'textarea'

  const locale = useLocale()

  return React.createElement(isTextarea ? 'textarea' : 'input', {
    type: isTextarea ? null : type || 'text',
    name: name,
    rows: isTextarea ? (isPopup ? 3 : 1) : null,
    placeholder: placeholder[locale] + (required ? ' *' : ''),
    disabled: disabled,
    ...register(name, {
      required:
        !!required &&
        ERROR_MESSAGE.required[locale] + ': ' + placeholder[locale],
      pattern: {
        value: pattern,
        message: ERROR_MESSAGE.pattern[locale] + ': ' + placeholder[locale],
      },
    }),
    'data-state': errors[name] && 'error',
    className: className,
  })
}

export default Field
