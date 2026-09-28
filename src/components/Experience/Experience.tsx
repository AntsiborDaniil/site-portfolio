import { useI18n } from '../../i18n/context'
import { Reveal } from '../Reveal/Reveal'
import styles from './Experience.module.css'

export function Experience() {
  const { t } = useI18n()
  const { experience } = t

  return (
    <section className={styles.section} id="experience">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.label}>{t.ui.experience.label}</p>
          <h2 className={styles.title}>{t.ui.experience.title}</h2>
        </Reveal>

        <ol className={styles.list}>
          {experience.map((job, i) => (
            <Reveal key={job.id} as="li" className={styles.item} delay={i * 90}>
              <div className={styles.head}>
                <div>
                  <h3 className={styles.company}>
                    {job.link ? (
                      <a href={job.link} target="_blank" rel="noreferrer">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </h3>
                  <p className={styles.role}>{job.role}</p>
                </div>
                <p className={styles.period}>{job.period}</p>
              </div>
              <ul className={styles.highlights}>
                {job.highlights.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
