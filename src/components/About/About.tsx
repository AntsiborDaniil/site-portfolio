import { useI18n } from '../../i18n/context'
import { Reveal } from '../Reveal/Reveal'
import styles from './About.module.css'

export function About() {
  const { t } = useI18n()
  const { achievements, profile } = t

  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.label}>{t.ui.about.label}</p>
          <h2 className={styles.title}>{t.ui.about.title}</h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.copy} delay={80}>
            <p>{profile.about}</p>
            <p className={styles.meta}>
              {profile.education.school} · {profile.education.degree} · {profile.education.year}
            </p>
          </Reveal>

          <div className={styles.stats}>
            {achievements.map((item, i) => (
              <Reveal key={item.label} className={styles.stat} delay={120 + i * 70} as="article">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
