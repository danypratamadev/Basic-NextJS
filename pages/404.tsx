import React, { useEffect } from 'react'
import router from 'next/router'

export default function Custom404() {

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [])

  return (
    <div className='container404'>
        <div className='title404'>404</div>
        <div className='subtitle404'>Halaman yang anda tuju tidak tersedia!</div>
    </div>
  )
}
