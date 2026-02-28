import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const title = 'Perguntas frequentes'
const items = [
  {
    q: 'Meus dados estão seguros?',
    a: 'Sim. Tratamos seus dados com confidencialidade e em conformidade com a LGPD. As informações da sua frota são utilizadas apenas para montar a proposta e prestar o serviço.',
  },
  {
    q: 'Como funciona a integração com a frota?',
    a: 'Nossa equipe adapta a integração ao tamanho e à realidade da sua operação. O processo é explicado em detalhes na conversa com um representante.',
  },
  {
    q: 'Para qual porte de frota a Multa Zero é indicada?',
    a: 'A plataforma atende empresas de diferentes portes — desde frotas menores até operações com muitos veículos. A proposta é personalizada conforme sua necessidade.',
  },
  {
    q: 'Posso agendar uma demonstração?',
    a: 'Sim. Entre em contato pelo formulário ou pelo WhatsApp e um representante agendará uma demonstração sob medida para sua operação.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="como-funciona" className="section" style={{ background: 'var(--surface-elevated)' }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 var(--space-24)' }}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div style={{ marginTop: 'var(--space-40)' }}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className="card"
              style={{ marginBottom: 'var(--space-16)', cursor: 'pointer' }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 'var(--space-16)' }}>
                <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: 'var(--neutral-8)' }}>{item.q}</h3>
                <span style={{ fontSize: 18, color: 'var(--neutral-7)', flexShrink: 0 }}>
                  {openIndex === index ? '−' : '+'}
                </span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ margin: 'var(--space-16) 0 0', fontSize: 15, lineHeight: 1.55, color: 'var(--text-secondary)', overflow: 'hidden' }}
                  >
                    {item.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
