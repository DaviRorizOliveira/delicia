'use client'
import styles from '@/app/page.module.css';
import { FaUserAlt, FaCoffee, FaMoon, FaWallet } from 'react-icons/fa';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { TbMessageExclamation } from 'react-icons/tb';
import { FaCirclePlus } from "react-icons/fa6";

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{display: 'flex', justifyContent: "center"}}>
        <div className={styles.top}>
          <h1>DELLÍCIA</h1>
          <div className={styles.userIcon}>
            <a href="/aluno">
              <span className={styles.userIcon}> <FaUserAlt /> </span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.middle}>
        <div className={styles.darkBox}>
            <h1 style={{fontSize: '22px'}}>Estêvão Vieira</h1>
            <h3 className={styles.element}>Ciência da Computação</h3>
            <h2 className={styles.element}>202210345</h2>
        </div>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px'}}>
            <div className={styles.box} style={{width: '200px', margin: '0'}}>
                <h3>SALDO</h3>
                <h1 className={styles.element}>R$ 23,00</h1>
            </div>

            <FaCirclePlus style={{fontSize: '60px', color: '#364248'}} />
        </div>
      </div>

      <div className={styles.down}>
        <div className={styles.footer}>
        <div>
            <a href="/#">
              <MdOutlineRestaurantMenu className={styles.sideIcon} />
            </a>
          </div>

          <div className={styles.circle}>
            <a href="/carteira">
              <span className={styles.plateIcon}> <FaWallet /> </span>
            </a>
          </div>

          <div>
            <a href="#">
              <TbMessageExclamation className={styles.sideIcon2}/>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}