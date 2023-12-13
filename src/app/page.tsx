'use client'
import styles from './page.module.css';
import { FaUserAlt, FaCoffee, FaMoon } from 'react-icons/fa';
import { BiSolidDish } from 'react-icons/bi';
import { MdOutlineRestaurantMenu } from "react-icons/md";

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

        <div className={styles.cafe}>

          <div className={styles.box}>

            <div className={styles.parteDeCima}>
              <h2>FICHAS RESTANTES</h2>
              <FaCoffee className={styles.icones} />
            </div>

            <div className={styles.horario}>
              <h2>7:00 ATÉ 9:00</h2>
            </div>

            <div className={styles.parteDeBaixo}>
              <div className={styles.normal}>
                <h2>NORMAL</h2>
                <p>09</p>
              </div>

              <div className={styles.extra}>
                <h2>EXTRA</h2>
                <p>150</p>
              </div>
            </div>

          </div>

        </div>

        <div className={styles.almoco}>

          <div className={styles.box}>

            <div className={styles.parteDeCima}>
              <h2>FICHAS RESTANTES</h2>
              <BiSolidDish className={styles.icones}  />
            </div>

            <div className={styles.horario}>
              <h2>11:00 ATÉ 14:00</h2>
            </div>

            <div className={styles.parteDeBaixo}>
              <div className={styles.normal}>
                <h2>NORMAL</h2>
                <p>900</p>
              </div>

              <div className={styles.extra}>
                <h2>EXTRA</h2>
                <p>300</p>
              </div>
            </div>

          </div>

        </div>

        <div className={styles.jantar}>

          <div className={styles.box}>

            <div className={styles.parteDeCima}>
              <h2>FICHAS RESTANTES</h2>
              <h2> <FaMoon className={styles.icones}  /> </h2>
            </div>

            <div className={styles.horario}>
              <h2>17:00 ATÉ 19:00</h2>
            </div>

            <div className={styles.parteDeBaixo}>
              <div className={styles.normal}>
                <h2>NORMAL</h2>
                <p>300</p>
              </div>

              <div className={styles.extra}>
                <h2>EXTRA</h2>
                <p>150</p>
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
          <div className={styles.circle}>
            <MdOutlineRestaurantMenu className={styles.plateIcon} onClick={()=>{
              window.location.href='/cardarpio'
            }} />
          </div>
        </div>
      </div>
    </main>
  )
}