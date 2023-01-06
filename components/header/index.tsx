import Link from "next/link";
import styles from './Header.module.css';
import LogoApp from "../shared/logo";

export default function Header() {
  return (
    <header className={styles.container}>
        <ul className={styles.list}>
            <li className={styles.image}><Link href="/"><LogoApp/></Link></li>
            <li className={styles.item}><Link href="/shop">Shop</Link></li>
            <li className={styles.item}><Link href="/mobile">Mobile</Link></li>
            <li className={styles.item}><Link href="/tv&av">TV & AV</Link></li>
            <li className={styles.item}><Link href="/home_appliances">Home Appliances</Link></li>
            <li className={styles.item}><Link href="/it">IT</Link></li>
            <li className={styles.item}><Link href="/accessories">Accessories</Link></li>
            <li className={styles.item}><Link href="/smartthings">SmartThings</Link></li>
        </ul>
    </header>
  )
}
