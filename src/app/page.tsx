'use client'
import styles from './page.module.css';
import { FaUserAlt, FaCoffee, FaMoon } from 'react-icons/fa';
import { BiSolidDish } from 'react-icons/bi';
import { MdOutlineRestaurantMenu } from "react-icons/md";
import Box from '@/componentes/Box';

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
        <Box qtdNormal={9} qtdExtra={150} horario='7:00 ATÉ 9:00' icone={FaCoffee}/>
        <Box qtdNormal={900} qtdExtra={300} horario='11:00 ATÉ 14:00' icone={BiSolidDish} isClose/>
        <Box qtdNormal={300} qtdExtra={150} horario='17:00 ATÉ 19:00' icone={FaMoon} isClose/>

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
              window.location.href='/#'
            }} />
          </div>
        </div>
      </div>
    </main>
  )
}