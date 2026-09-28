import { contacts } from '../../data/content'
import { useI18n } from '../../i18n/context'
import { Reveal } from '../Reveal/Reveal'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useI18n()

  const links = [
    { label: 'Telegram', value: contacts.telegram, href: contacts.telegramHref },
    { label: 'Email', value: contacts.email, href: `mailto:${contacts.email}` },
    { label: 'GitHub', value: contacts.github, href: contacts.githubHref },
    { label: t.ui.contact.phone, value: contacts.phone, href: contacts.phoneHref },
  ]

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <Reveal className={styles.panel}>
          <p className={styles.label}>{t.ui.contact.label}</p>
          <h2 className={styles.title}>{t.ui.contact.title}</h2>
          <p className={styles.lead}>
            {t.ui.contact.lead}
          </p>

          <ul className={styles.links}>
            {links.map((item) => (
              <li key={item.label}>
                <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
