import { useEffect, useRef, useState, type TouchEvent } from 'react'
import { useI18n } from '../../i18n/context'
import { Reveal } from '../Reveal/Reveal'
import styles from './Testimonials.module.css'

const INTERVAL_MS = 5000

export function Testimonials() {
  const { t } = useI18n()
  const { testimonials } = t
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  useEffect(() => {
    if (paused || testimonials.length <= 1) return

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length)
    }, INTERVAL_MS)

    return () => window.clearInterval(id)
  }, [paused, index, testimonials.length])

  const goTo = (next: number) => {
    const total = testimonials.length
    setIndex(((next % total) + total) % total)
  }

  const onTouchStart = (event: TouchEvent) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStartX.current == null) return
    const delta = event.changedTouches[0].clientX - touchStartX.current
    touchStartX.current = null
    if (Math.abs(delta) < 40) return
    goTo(index + (delta < 0 ? 1 : -1))
  }

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.label}>{t.ui.testimonials.label}</p>
          <h2 className={styles.title}>{t.ui.testimonials.title}</h2>
        </Reveal>

        <Reveal delay={80}>
          <div
            className={`${styles.slider} ${paused ? styles.paused : ''}`}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setPaused(false)
              }
            }}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className={styles.viewport}>
              <div
                className={styles.track}
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((item, i) => (
                  <article key={item.id} className={styles.slide} aria-hidden={i !== index}>
                    <p className={styles.mark} aria-hidden>
                      “
                    </p>
                    <blockquote className={styles.quote}>{item.quote}</blockquote>
                    <footer className={styles.author}>
                      <span className={styles.avatar} aria-hidden>
                        {item.name.slice(0, 1)}
                      </span>
                      <div>
                        <strong>{item.name}</strong>
                        <span>
                          {item.role} · {item.company}
                        </span>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </div>

            <div className={styles.controls}>
              <button
                type="button"
                className={styles.arrow}
                aria-label={t.ui.testimonials.prev}
                onClick={() => goTo(index - 1)}
              >
                ←
              </button>

              <div className={styles.dots} role="tablist" aria-label={t.ui.testimonials.label}>
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-label={`${t.ui.testimonials.item} ${i + 1}`}
                    aria-selected={i === index}
                    className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
                    onClick={() => goTo(i)}
                  >
                    {i === index && <span className={styles.progress} key={`${item.id}-${index}`} />}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className={styles.arrow}
                aria-label={t.ui.testimonials.next}
                onClick={() => goTo(index + 1)}
              >
                →
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
