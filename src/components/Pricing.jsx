import { useState } from 'react'
import { motion } from 'framer-motion'

const title = 'Proposta alinhada à sua operação'
const subtitle = 'Conte-nos sobre sua frota e necessidades; um representante entrará em contato com um orçamento personalizado e sem compromisso.'
const body = 'Cada operação é única. Por isso a Multa Zero não oferece plano único: nossa equipe monta a proposta com base no porte da frota, volume de multas e necessidades de recursos e pagamento. Você recebe um orçamento transparente e pode esclarecer dúvidas em uma conversa consultiva.'
const trust = 'Dados confidenciais e protegidos (LGPD). Sem compromisso.'
const whatsappUrl = 'https://wa.me/5511999999999'

export default function Pricing() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="section" style={{ background: 'var(--neutral-1)' }}>
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
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
        <motion.p
          style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--text-primary)', marginBottom: 'var(--space-32)', textAlign: 'center' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {body}
        </motion.p>
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {!sent ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-24)' }}>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'var(--neutral-8)' }}>Nome</label>
                <input type="text" name="name" placeholder="Seu nome" required style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'var(--neutral-8)' }}>E-mail</label>
                <input type="email" name="email" placeholder="seu@email.com" required style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'var(--neutral-8)' }}>Telefone</label>
                <input type="tel" name="phone" placeholder="(11) 99999-9999" style={{ width: '100%' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 14, fontWeight: 600, marginBottom: 8, color: 'var(--neutral-8)' }}>Mensagem</label>
                <textarea name="message" rows={3} placeholder="Conte-nos sobre sua frota (opcional)" style={{ width: '100%', resize: 'vertical' }} />
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-16)' }}>
                <button type="submit" className="btn btn-primary">Solicitar proposta</button>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Falar no WhatsApp</a>
              </div>
            </form>
          ) : (
            <p style={{ fontSize: 17, color: 'var(--neutral-8)', margin: 0 }}>
              Obrigado. Um representante entrará em contato em breve.
            </p>
          )}
          <p style={{ marginTop: 'var(--space-24)', fontSize: 12, color: 'var(--text-secondary)' }}>{trust}</p>
        </motion.div>
      </div>
    </section>
  )
}
