import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, locales, type Locale } from '../data/content'
import { I18nContext } from './context'

const STORAGE_KEY = 'locale'

function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && locales.includes(saved as Locale)) return saved as Locale
  } catch {
    // storage may be unavailable
  }
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)
  const t = content[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = t.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.meta.description)
    try {
      localStorage.setItem(STORAGE_KEY, locale)
    } catch {
      // storage may be unavailable
    }
  }, [locale, t])

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
