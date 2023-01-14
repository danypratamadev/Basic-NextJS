import { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import Image from 'next/image'

const Page: NextPageWithLayout = () => {
  return (
    <>
      <div>Home Page</div>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle='Home Page'>
      {page}
    </Layout>
  )
}

export default Page
