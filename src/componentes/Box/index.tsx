import styles from './box.module.css'
import { ElementType, useState } from "react"

interface boxProps{
    qtdNormal: number
    qtdExtra: number
    horario: string
    icone: ElementType
    isClose?: boolean
}

export default function Box({qtdNormal, qtdExtra, horario, icone:Icon, isClose=false}:boxProps){
    const [fechado, setClose] = useState(isClose)
    
    function toggle(){
        setClose(!fechado)
    }

    function open(){
        return(
            <div className={styles.box} onClick={toggle}>
            <div className={styles.parteDeCima}>
              <h2>FICHAS RESTANTES</h2>
              <h2> <Icon className={styles.icones}  /> </h2>
            </div>

            <div className={styles.horario}>
              <h2>{horario}</h2>
            </div>

            <div className={styles.parteDeBaixo}>
              <div className={styles.normal}>
                <h2>NORMAL</h2>
                <p>{qtdNormal}</p>
              </div>

              <div className={styles.extra}>
                <h2>EXTRA</h2>
                <p>{qtdExtra}</p>
              </div>
            </div>
        </div>
        )
    }

    function close(){
        return(
            <div className={`${styles.box2} ${styles.box}`} onClick={toggle}>
                <Icon className={styles.icones}/>
                <h2>{horario}</h2>
            </div>
        )
    }
    return (
        <>
            {!fechado && open()}
            {fechado && close()}
        </>
    )
}