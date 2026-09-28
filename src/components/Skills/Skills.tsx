import { useI18n } from '../../i18n/context'
import { Reveal } from '../Reveal/Reveal'
import styles from './Skills.module.css'

export function Skills() {
  const { t } = useI18n()
  const { skillGroups } = t

  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.label}>{t.ui.skills.label}</p>
          <h2 className={styles.title}>{t.ui.skills.title}</h2>
        </Reveal>

        <div className={styles.groups}>
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} className={styles.group} delay={gi * 100}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item, ii) => (
                  <li key={item} style={{ transitionDelay: `${gi * 100 + ii * 35}ms` }}>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
