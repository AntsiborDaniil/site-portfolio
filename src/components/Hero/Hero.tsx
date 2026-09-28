import { contacts } from '../../data/content'
import { useI18n } from '../../i18n/context'
import { HeroGlassArt } from './HeroGlassArt'
import styles from './Hero.module.css'

export function Hero() {
  const { t } = useI18n()
  const { profile } = t

  return (
    <section className={styles.hero} id="top" aria-label={t.ui.hero.aria}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.art} aria-hidden>
        <HeroGlassArt />
      </div>

      <div className={styles.content}>
        <p className={`${styles.kicker} ${styles.reveal}`} style={{ animationDelay: '0.05s' }}>
          {profile.role} · {profile.location}
        </p>

        <h1 className={`${styles.brand} ${styles.reveal}`} style={{ animationDelay: '0.15s' }}>
          {profile.brandHero}
        </h1>

        <p className={`${styles.headline} ${styles.reveal}`} style={{ animationDelay: '0.28s' }}>
          {t.ui.hero.headline}
        </p>

        <p className={`${styles.lead} ${styles.reveal}`} style={{ animationDelay: '0.4s' }}>
          {t.ui.hero.lead}
        </p>

        <div className={`${styles.actions} ${styles.reveal}`} style={{ animationDelay: '0.52s' }}>
          <a className={styles.primary} href="#projects">
            {t.ui.hero.primary}
          </a>
          <a className={styles.secondary} href={contacts.githubHref} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden>
        <span>scroll</span>
        <i />
      </div>
    </section>
  )
}
