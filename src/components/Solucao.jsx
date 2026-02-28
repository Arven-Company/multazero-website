import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const title = 'Multa Zero na prática'
const subtitle = 'Tudo em um lugar: multas, recursos e pagamentos. Recorra com apoio de IA e controle total para a operação.'
const body = 'A plataforma concentra em um único painel o cadastro de multas, a identificação de condutores e o acompanhamento de prazos. O fluxo de recursos conta com apoio de IA e padrão profissional, reduzindo burocracia.'

export default function Solucao() {
  const sectionRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !imgRef.current) return
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
      }
    )
  }, [])

  return (
    <section ref={sectionRef} className="section">
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 var(--space-24)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 'var(--space-64)' }}>
        <div style={{ flex: '1 1 400px', minWidth: 0 }}>
          <motion.h2
            className="section-title"
            style={{ textAlign: 'left', marginBottom: 'var(--space-16)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', marginBottom: 'var(--space-24)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {subtitle}
          </motion.p>
          <motion.p
            style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--text-primary)', marginBottom: 'var(--space-32)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {body}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a href="#contato" className="btn btn-primary">Solicitar demonstração</a>
          </motion.div>
        </div>
        <div ref={imgRef} style={{ flex: '1 1 360px', minWidth: 0, borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
          <img
            src="/images/truck%20image.png"
            alt="Frota e gestão de multas"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </section>
  )
}
