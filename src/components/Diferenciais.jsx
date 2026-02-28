import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = 'Por que Multa Zero'
const subtitle = 'Controle por veículo e condutor, recursos com IA, proteção de pontos na CNH e pagamentos centralizados.'
const items = [
  { tag: 'IA', title: 'Recursos com IA', desc: 'Fluxo de recursos com apoio de inteligência artificial e padrão profissional.' },
  { tag: 'Menos burocracia', title: 'Processos claros', desc: 'Reduza papelada e prazos perdidos em um único ambiente.' },
  { tag: 'CNH', title: 'Proteção de pontos', desc: 'Proteja a CNH dos motoristas e reduza exposição da frota.' },
  { tag: 'Pipeline', title: 'Tudo em um lugar', desc: 'Cadastro de multas, identificação de condutores e acompanhamento de prazos.' },
  { tag: 'Pagamento', title: 'Pagamento integrado', desc: 'Pague multas direto na plataforma e acompanhe cada etapa do recurso.' },
]

export default function Diferenciais() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    if (!gridRef.current) return
    gsap.fromTo(
      gridRef.current.children,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.45,
        stagger: 0.08,
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
          ref={gridRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 'var(--space-24)',
            marginTop: 'var(--space-40)',
          }}
        >
          {items.map((item) => (
            <div key={item.title} className="card">
              <span className="tag" style={{ marginBottom: 'var(--space-12)' }}>{item.tag}</span>
              <h3 style={{ margin: '0 0 var(--space-8)', fontSize: 18, fontWeight: 700, color: 'var(--neutral-8)' }}>
                {item.title}
              </h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
        <motion.div
          style={{ textAlign: 'center', marginTop: 'var(--space-40)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <a href="#contato" className="btn btn-primary">Falar com representante</a>
        </motion.div>
      </div>
    </section>
  )
}
