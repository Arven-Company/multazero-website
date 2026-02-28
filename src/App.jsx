import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import ComoFunciona from './components/ComoFunciona'
import Diferenciais from './components/Diferenciais'
import Resultados from './components/Resultados'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CtaFinal from './components/CtaFinal'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      onUpdate: (self) => {
        document.querySelector('.nav')?.classList.toggle('scrolled', self.scroll() > 40)
      },
    })
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Logos />
        <Problema />
        <Solucao />
        <ComoFunciona />
        <Diferenciais />
        <Resultados />
        <Pricing />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
