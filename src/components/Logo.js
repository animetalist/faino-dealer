import React from 'react'
import Image from 'next/image'
import logo from '@/assets/img/logo.svg?url'
import logoGreen from '@/assets/img/logo-green.svg?url'

const Logo = ({ isGreen, className }) => {
  return (
    <Image
      src={isGreen ? logoGreen : logo}
      width="62"
      height="32"
      alt="FAINO DEALER"
      className={className}
    />
  )
}

export default Logo
