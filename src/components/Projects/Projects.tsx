import { useI18n } from '../../i18n/context'
import { Reveal } from '../Reveal/Reveal'
import styles from './Projects.module.css'

export function Projects() {
  const { t } = useI18n()
  const { projects } = t

  return (
    <section className={styles.section} id="projects">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.label}>{t.ui.projects.label}</p>
          <h2 className={styles.title}>{t.ui.projects.title}</h2>
        </Reveal>

        <div className={styles.list}>
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              as="article"
              className={`${styles.project} ${styles[project.accent]}`}
              delay={i * 100}
            >
              <div className={styles.meta}>
                <p className={styles.index}>0{i + 1}</p>
                <p className={styles.subtitle}>{project.subtitle}</p>
              </div>

              <h3 className={styles.name}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <ul className={styles.stack}>
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>

              <div className={styles.links}>
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                    <span aria-hidden>→</span>
                  </a>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
