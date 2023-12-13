import styles from '@/app/page.module.css';
import { FaUserAlt, FaCoffee, FaMoon, FaWallet } from 'react-icons/fa';
import { BiSolidDish } from 'react-icons/bi';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { TbMessageExclamation } from "react-icons/tb";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.top}>
        <div><h1>DELLÍCIA</h1></div>
        <div className={styles.userIcon}>
          <a href="#">
            <span className={styles.userIcon}> <FaUserAlt /> </span>
          </a>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.darkBox}>
            <h1>Estêvão Vieira</h1>
            <h3 className={styles.element}>Ciência da Computação</h3>
            <h2 className={styles.element}>202210345</h2>
        </div>

        <div className={styles.box}>
            <h3>SALDO</h3>
            <h1 className={styles.element}>R$ 23,00</h1>
        </div>
      </div>

      <div className={styles.down}>
        
        <div className={styles.footer}>
        
          <div>
            <a href="#">
              <span className={styles.sideIcon}> <MdOutlineRestaurantMenu /> </span>
            </a>
          </div>

          <div className={styles.circle}>
            <a href="#">
              <span className={styles.plateIcon}> <FaWallet /> </span>
            </a>
          </div>

          <div>
            <a href="#">
              <span className={styles.sideIcon}> <TbMessageExclamation /> </span>
            </a>
          </div>

        </div>

      </div>

    </main>
  )
}