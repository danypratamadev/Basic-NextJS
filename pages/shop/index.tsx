import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <div>Shop Page</div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Shop">
      {page}
    </Layout>
  )
}

export default Page
