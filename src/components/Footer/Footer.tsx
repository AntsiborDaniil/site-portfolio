import { useI18n } from '../../i18n/context'
import styles from './Footer.module.css'

export function Footer() {
  const { profile } = useI18n().t

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>{profile.brandNav}</p>
        <p className={styles.copy}>© {new Date().getFullYear()} · Product portfolio</p>
      </div>
    </footer>
  )
}
