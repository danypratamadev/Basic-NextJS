import React, { ReactElement, useEffect } from 'react'
import { NextPageWithLayout } from './_app'
import Layout from '../components/404Layout'
import router from 'next/router'

const Page: NextPageWithLayout = () => {

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2000)
  }, [])
  
  return (
    <div className='container404'>
        <div className='title404'>404</div>
        <div className='subtitle404'>Page Not Found</div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page
