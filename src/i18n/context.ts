import { createContext, useContext } from 'react'
import { content, type Content, type Locale } from '../data/content'

export type I18nValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Content
}

export const I18nContext = createContext<I18nValue>({
  locale: 'ru',
  setLocale: () => {},
  t: content.ru,
})

export const useI18n = () => useContext(I18nContext)
