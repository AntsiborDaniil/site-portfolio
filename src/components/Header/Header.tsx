import { useEffect, useState } from 'react'
import { contacts } from '../../data/content'
import { useI18n } from '../../i18n/context'
import styles from './Header.module.css'

export function Header() {
  const { locale, setLocale, t } = useI18n()
  const { nav, profile } = t
  const nextLocale = locale === 'ru' ? 'en' : 'ru'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)
  const toggle = () => setOpen((value) => !value)

  return (
    <>
      <header className={`${styles.header} ${scrolled || open ? styles.scrolled : ''}`}>
        <div className={styles.bar}>
          <div className={styles.inner}>
            <a href="#top" className={styles.brand} onClick={close}>
              {profile.brandNav}
            </a>

            <nav className={styles.nav} aria-label={t.ui.header.mainNav}>
              {nav.map((item) => (
                <a key={item.id} href={`#${item.id}`} className={styles.link}>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.lang}
                aria-label={t.ui.header.switchLang}
                onClick={() => setLocale(nextLocale)}
              >
                {nextLocale.toUpperCase()}
              </button>

              <a className={styles.cta} href={contacts.telegramHref} target="_blank" rel="noreferrer">
                Telegram
              </a>

              <button
                type="button"
                className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
                aria-label={open ? t.ui.header.closeMenu : t.ui.header.openMenu}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={toggle}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label={t.ui.header.mobileNav}>
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} onClick={close}>
              {item.label}
            </a>
          ))}
          <a href={contacts.githubHref} target="_blank" rel="noreferrer" onClick={close}>
            GitHub
          </a>
          <a href={contacts.telegramHref} target="_blank" rel="noreferrer" onClick={close}>
            Telegram
          </a>
        </nav>
      </div>
    </>
  )
}
