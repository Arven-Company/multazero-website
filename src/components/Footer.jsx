const links = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contato', label: 'Contato' },
]
const whatsappUrl = 'https://wa.me/5511999999999'

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--neutral-8)',
        color: 'var(--hero-chart-light)',
        padding: 'var(--space-48) var(--space-24) var(--space-32)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-40)' }}>
        <div>
          <a href="#" style={{ fontSize: 20, fontWeight: 700, color: 'inherit', textDecoration: 'none', letterSpacing: '-0.02em' }}>
            Multa Zero
          </a>
          <p style={{ margin: 'var(--space-16) 0 0', fontSize: 14, opacity: 0.9, maxWidth: 280 }}>
            Plataforma de gestão de multas para frotas. Controle, recursos com IA e pagamentos em um único ambiente.
          </p>
        </div>
        <nav>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-16)', opacity: 0.8 }}>
            Links
          </div>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(({ href, label }) => (
              <li key={href} style={{ marginBottom: 'var(--space-8)' }}>
                <a href={href} style={{ color: 'inherit', textDecoration: 'none', fontSize: 14 }}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 'var(--space-16)', opacity: 0.8 }}>
            Contato
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ fontSize: 14 }}
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: 'var(--space-32) auto 0',
          paddingTop: 'var(--space-24)',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          fontSize: 12,
          opacity: 0.75,
        }}
      >
        © {new Date().getFullYear()} Multa Zero. Dados protegidos (LGPD).
      </div>
    </footer>
  )
}
