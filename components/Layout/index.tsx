import Header from "../header"
import Footer from "../footer"
import { ReactNode } from "react"
import styles from "./Layout.module.css";
import Head from "next/head";

interface LayoutProps {
    children: ReactNode;
    pageTitle: string;
}

export default function Layout(props: LayoutProps) {
    const {children, pageTitle} = props;
  return (
    <>
      <Head>
        <title>Samsung | {pageTitle}</title>
      </Head>
      <div className={styles.container}>
          <Header/>
          <div className={styles.content}>{children}</div>
          <Footer/>
      </div>
    </>
  )
}
