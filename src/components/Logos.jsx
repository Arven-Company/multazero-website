import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = 'Quem já simplifica as multas com a gente'
const placeholders = ['Frota A', 'Logística B', 'Transportes C', 'Operação D']

export default function Logos() {
  const sectionRef = useRef(null)
  const listRef = useRef(null)

  useEffect(() => {
    if (!listRef.current) return
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="section section--logos" style={{ paddingTop: 'var(--space-48)', paddingBottom: 'var(--space-48)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--space-24)' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: 'clamp(20px, 2.5vw, 24px)', marginBottom: 'var(--space-32)' }}
        >
          {title}
        </motion.h2>
        <div
          ref={listRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-32)',
          }}
        >
          {placeholders.map((name) => (
            <div
              key={name}
              className="tag"
              style={{ padding: '8px 20px', fontSize: 14 }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
