import { ReactNode } from "react"
import styles from "./404Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
    const {children} = props;
  return (
    <div className={styles.container}>
        <div className={styles.content}>{children}</div>
    </div>
  )
}
