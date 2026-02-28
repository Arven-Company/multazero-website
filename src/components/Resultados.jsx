import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = 'Resultados que falam por si'
const subtitle = 'Empresas de diferentes portes usam a Multa Zero para centralizar a gestão de multas, ganhar eficiência e proteger a CNH dos motoristas.'
const stats = [
  { value: '+', suffix: ' multas gerenciadas', label: 'em um único painel' },
  { value: 'Menos', suffix: ' tempo em planilhas', label: 'processos claros' },
  { value: 'Recursos', suffix: ' com IA', label: 'ao alcance da operação' },
]
const testimonial = {
  quote: 'Passamos a ter visibilidade total das multas e a recorrer com muito mais tranquilidade. A plataforma se encaixou na nossa rotina.',
  role: 'Gestor de Frota',
  company: 'Empresa de logística',
}

export default function Resultados() {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    if (!statsRef.current) return
    gsap.fromTo(
      statsRef.current.children,
      { opacity: 0, scale: 0.96 },
      {
        opacity: 1,
        scale: 1,
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
    <section id="resultados" ref={sectionRef} className="section">
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
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 'var(--space-32)',
            marginTop: 'var(--space-48)',
            marginBottom: 'var(--space-48)',
          }}
        >
          {stats.map((s, i) => (
            <div key={i} className="card" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--blue-ribbon-8)', marginBottom: 'var(--space-8)' }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <motion.div
          className="card"
          style={{ maxWidth: 640, margin: '0 auto var(--space-32)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--text-primary)', margin: '0 0 var(--space-16)', fontStyle: 'italic' }}>
            "{testimonial.quote}"
          </p>
          <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--neutral-8)' }}>{testimonial.role}</p>
          <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--text-secondary)' }}>{testimonial.company}</p>
        </motion.div>
        <motion.div
          style={{ textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a href="#contato" className="btn btn-primary">Conhecer a plataforma</a>
        </motion.div>
      </div>
    </section>
  )
}
