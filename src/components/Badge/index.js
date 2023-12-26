import React from 'react'
import s from './Badge.module.scss'

const Badge = ({ children }) => {
  return <h2 className={s.badge}>{children}</h2>
}

export default Badge
