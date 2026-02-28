import { motion } from 'framer-motion'

const links = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contato', label: 'Falar com representante', cta: true },
]

export default function Nav() {
  return (
    <motion.header
      className="nav"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="nav-inner">
        <a href="#" className="nav-logo">Multa Zero</a>
        <nav className="nav-links">
          {links.map(({ href, label, cta }) => (
            <a
              key={href}
              href={href}
              className={cta ? 'nav-cta' : ''}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
