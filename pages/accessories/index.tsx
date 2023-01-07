import { ReactElement } from "react";
import Layout from "../../components/Layout";
import { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  return (
    <div>Accessories Page</div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout pageTitle="Accessories">
      {page}
    </Layout>
  )
}

export default Page
