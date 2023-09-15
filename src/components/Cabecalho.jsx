import { Link } from "react-router-dom";
import styles from '../css/estilo.module.css'

export default function Cabecalho(){

    return(
        <>
            <header className={styles.menu}>
                <h1>Vite+React</h1>
                <nav className={styles.menuNav}>
                    <ul className={styles.menuNnavulli }>
                        <li><Link to="/" className={styles.tlink} >Home</Link></li>
                        <li><Link to="/produtos" className={styles.tlink}>Produtos</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}