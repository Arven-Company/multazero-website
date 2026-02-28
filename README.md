# Multa Zero — Site institucional

Site institucional da **Multa Zero**, plataforma de gestão de multas para frotas. Desenvolvido com base nos documentos em `docs/` (Blueprint, Conversion Copy, Design System).

## Stack

- **React 18** + **Vite**
- **Framer Motion** — animações de entrada e interação
- **GSAP** + **ScrollTrigger** — animações ao scroll (staggered reveal)
- **Aileron** (font em `public/font/aileron`)
- Assets em `public/images` e `public/videos`

## Como rodar

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build para produção

```bash
npm run build
```

A saída fica em `dist/`. Para preview:

```bash
npm run preview
```

## Estrutura do site (Blueprint)

1. **Hero** — vídeo de fundo, headline, CTAs
2. **Logos** — “Quem já simplifica as multas com a gente”
3. **Problema** — O desafio da sua frota (4 dores)
4. **Solução** — Multa Zero na prática + imagem
5. **Como funciona** — 4 passos
6. **Diferenciais** — Por que Multa Zero (cards)
7. **Resultados** — Números + depoimento
8. **Pricing/Oferta** — Formulário + WhatsApp (#contato)
9. **FAQ** — Acordeão
10. **CTA final** — Último empurrão
11. **Footer** — Links e contato

## Documentos de referência

- `docs/MULTAZERO-WEBSITE-BLUEPRINT.md` — Estrutura, UX flow, hierarquia
- `docs/CONVERSION-COPY-GUIDE.md` — Copy por seção (benefit/problem/identity-led)
- `docs/DESIGN-SYSTEM-BRIEF.md` — Cores, tipografia, componentes, constraints

## Deploy (ex.: GitHub Pages)

Com `base: './'` no `vite.config.js`, após `npm run build` publique a pasta `dist/` no branch `gh-pages` ou em qualquer host estático.
