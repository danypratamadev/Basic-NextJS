import Image from 'next/image'
import React from 'react'
import logoapp from 'assets/images/logo.png'

export default function LogoApp() {
  return (
    <Image src={logoapp} alt="Logo" width={120}/>
  )
}
