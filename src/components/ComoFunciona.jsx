import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = 'Do problema à solução em poucos passos'
const subtitle = 'Cadastre a frota, centralize as multas, recorra com IA e acompanhe tudo em um único painel.'
const steps = [
  { num: '1', title: 'Cadastro', desc: 'Integre veículos e condutores à plataforma.' },
  { num: '2', title: 'Centralização', desc: 'Todas as multas em um único pipeline.' },
  { num: '3', title: 'Recursos com IA', desc: 'Fluxo de recursos com apoio de inteligência artificial.' },
  { num: '4', title: 'Acompanhamento', desc: 'Acompanhe prazos e pagamentos em tempo real.' },
]

export default function ComoFunciona() {
  const sectionRef = useRef(null)
  const stepsRef = useRef(null)

  useEffect(() => {
    if (!stepsRef.current) return
    gsap.fromTo(
      stepsRef.current.children,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="section" style={{ background: 'var(--neutral-1)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--space-24)' }}>
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
          ref={stepsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-32)',
            marginTop: 'var(--space-48)',
          }}
        >
          {steps.map((step) => (
            <div key={step.num} className="card" style={{ textAlign: 'center' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'var(--blue-ribbon-2)',
                  color: 'var(--blue-ribbon-8)',
                  fontWeight: 700,
                  fontSize: 20,
                  marginBottom: 'var(--space-16)',
                }}
              >
                {step.num}
              </span>
              <h3 style={{ margin: '0 0 var(--space-8)', fontSize: 18, fontWeight: 700, color: 'var(--neutral-8)' }}>
                {step.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
