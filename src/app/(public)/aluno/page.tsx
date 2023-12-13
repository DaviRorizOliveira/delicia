import styles from './page.module.css';
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

        <div className={styles.cafe}>

          <div className={styles.box}>

            <div className={styles.parteDeCima}>
              <h2>FICHAS RESTANTES</h2>
              <h2> <FaCoffee /> </h2>
            </div>

            <div className={styles.horario}>
              <h2>7:00 ATÉ 9:00</h2>
            </div>

            <div className={styles.parteDeBaixo}>
              <div className={styles.normal}>
                <h2>NORMAL</h2>
                <h1>09</h1>
              </div>

              <div className={styles.extra}>
                <h2>EXTRA</h2>
                <h1>150</h1>
              </div>
            </div>

          </div>

        </div>

        <div className={styles.almoco}>

          <div className={styles.box}>

            <div className={styles.parteDeCima}>
              <h2>FICHAS RESTANTES</h2>
              <h2> <BiSolidDish /> </h2>
            </div>

            <div className={styles.horario}>
              <h2>11:00 ATÉ 14:00</h2>
            </div>

            <div className={styles.parteDeBaixo}>
              <div className={styles.normal}>
                <h2>NORMAL</h2>
                <h1>900</h1>
              </div>

              <div className={styles.extra}>
                <h2>EXTRA</h2>
                <h1>300</h1>
              </div>
            </div>

          </div>

        </div>

        <div className={styles.jantar}>

          <div className={styles.box}>

            <div className={styles.parteDeCima}>
              <h2>FICHAS RESTANTES</h2>
              <h2> <FaMoon /> </h2>
            </div>

            <div className={styles.horario}>
              <h2>17:00 ATÉ 19:00</h2>
            </div>

            <div className={styles.parteDeBaixo}>
              <div className={styles.normal}>
                <h2>NORMAL</h2>
                <h1>300</h1>
              </div>

              <div className={styles.extra}>
                <h2>EXTRA</h2>
                <h1>150</h1>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.fila}>
          <div className={styles.box}>
            <h2>TAMANHO DA FILA</h2>
            <h1>64</h1>
            <p>*estimativa</p>
          </div>  
        </div>
      </div>

      <div className={styles.down}>
        
        <div className={styles.footer}>
        
          <div>
            <a href="/cardapio">
              <span className={styles.sideIcon}> <MdOutlineRestaurantMenu /> </span>
            </a>
          </div>

          <div className={styles.circle}>
            <a href="/carteira">
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