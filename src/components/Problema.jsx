import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = 'O desafio da sua frota'
const subtitle = 'Multas dispersas, prazos no limite e burocracia consomem a operação. A Multa Zero foi desenhada para essa realidade.'
const pains = [
  { title: 'Multas injustas', desc: 'Multas indevidas gerando custo e pontos na CNH dos motoristas.' },
  { title: 'Falta de tempo', desc: 'Prazos apertados e sem tempo para contestar.' },
  { title: 'Burocracia', desc: 'Trâmites complexos e planilhas dispersas.' },
  { title: 'Volume', desc: 'Alto volume de multas em vários veículos da frota.' },
]

export default function Problema() {
  const sectionRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    if (!cardsRef.current) return
    gsap.fromTo(
      cardsRef.current.children,
      { opacity: 0, y: 28 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--surface-elevated)' }}>
      <div className="section-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--space-24)' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
        <div
          ref={cardsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 'var(--space-24)',
            marginTop: 'var(--space-40)',
          }}
        >
          {pains.map((item) => (
            <div key={item.title} className="card">
              <h3 style={{ margin: '0 0 var(--space-8)', fontSize: 18, fontWeight: 700, color: 'var(--neutral-8)' }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
