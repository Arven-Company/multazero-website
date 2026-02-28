import { motion } from 'framer-motion'

const title = 'Controle e eficiência na gestão de multas'
const subtitle = 'Converse com um representante e conheça como a Multa Zero se encaixa na sua operação. Sem compromisso.'
const body = 'Centralizar multas, recursos e pagamentos em uma única plataforma é um passo estratégico para a frota. Tudo começa com uma conversa: conte-nos sobre sua operação e um representante entrará em contato para apresentar a proposta e esclarecer dúvidas.'
const trust = 'Fale com um representante. Dados protegidos. Sem compromisso.'
const whatsappUrl = 'https://wa.me/5511999999999'

export default function CtaFinal() {
  return (
    <section className="section" style={{ background: 'var(--blue-ribbon-2)', padding: 'var(--space-80) var(--space-24)' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <motion.h2
          style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 700,
            lineHeight: 1.25,
            color: 'var(--neutral-8)',
            margin: '0 0 var(--space-24)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--text-secondary)', marginBottom: 'var(--space-16)' }}
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
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-16)' }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a href="#contato" className="btn btn-primary">Solicitar proposta</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Falar no WhatsApp</a>
        </motion.div>
        <motion.p
          style={{ marginTop: 'var(--space-24)', fontSize: 12, color: 'var(--text-secondary)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
        >
          {trust}
        </motion.p>
      </div>
    </section>
  )
}

