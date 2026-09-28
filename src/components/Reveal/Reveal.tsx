import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import styles from './Reveal.module.css'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: Props) {
  const { ref, inView } = useInView<HTMLElement>()
  const style = { transitionDelay: `${delay}ms` } satisfies CSSProperties

  return (
    <Tag
      ref={ref}
      className={`${styles.reveal} ${inView ? styles.visible : ''} ${className}`}
      style={style}
    >
      {children}
    </Tag>
  )
}
