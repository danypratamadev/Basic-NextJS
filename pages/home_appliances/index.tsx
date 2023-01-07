import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <div>Home Appliances Page</div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Home Appliances">
      {page}
    </Layout>
  )
}

export default Page
