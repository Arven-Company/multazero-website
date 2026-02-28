import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

const headline = 'Gestão de multas sob controle. Uma plataforma.'
const subheadline = 'A Multa Zero centraliza multas, recursos e pagamentos da sua frota em um único ambiente. Recorra com apoio de IA, com confiabilidade e visibilidade total para a operação.'
const body = 'A plataforma reúne o que sua empresa precisa para a gestão de multas: controle por veículo e condutor, fluxo de recursos com IA e pagamento integrado. Reduz burocracia e protege a CNH dos motoristas, com processos claros e acompanhamento em tempo real.'
const trust = 'Proposta personalizada. Sem compromisso. Dados protegidos (LGPD).'

export default function Hero() {
  const videoRef = useRef(null)
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return
    const el = contentRef.current
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
    tl.fromTo(el.querySelector('.hero-headline'), { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(el.querySelector('.hero-subheadline'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .fromTo(el.querySelector('.hero-body'), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .fromTo(el.querySelector('.hero-ctas'), { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.4 }, '-=0.2')
  }, [])

  return (
    <section className="hero">
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video"
          src="/videos/Truck_moving_in_road_32aee69975.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div ref={overlayRef} className="hero-overlay" aria-hidden="true" />
      </div>
      <div className="hero-inner" ref={contentRef}>
        <div className="hero-column hero-column-left">
          <h1 className="hero-headline">{headline}</h1>
          <p className="hero-subheadline">{subheadline}</p>
          <p className="hero-body">{body}</p>
          <div className="hero-ctas">
            <a href="#contato" className="btn btn-primary">Falar com um representante</a>
            <a href="#como-funciona" className="btn btn-outline">Conhecer a plataforma</a>
          </div>
          <p className="hero-trust">{trust}</p>
        </div>
        <div className="hero-column hero-column-right" aria-hidden="true" />
      </div>
    </section>
  )
}
