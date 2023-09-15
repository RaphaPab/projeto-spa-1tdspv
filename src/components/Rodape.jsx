import styles from '../css/estilo.module.css'

export default function Rodape() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.menuNav}>
          <ul>
            <li>
              <a href="#" className={styles.link}>GitHub</a>
            </li>
            <li>
              <a href="#" className={styles.link}>X</a>
            </li>
            <li>
              <a href="#" className={styles.link}>Reddit</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}