import React from 'react'
import style from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <p className={style.overline}>Copyright© 1995-2022 Samsung. All rights reserved.</p>
      </div>
      <div className={style.container}>
        <ul className={style.list}>
          <li className={style.item_language}>Bahasa</li>
          <li className={style.item}>Privasi</li>
          <li className={style.item}>Legal</li>
          <li className={style.item}>Peta Situs</li>
        </ul>
      </div>
    </>
  )
}
