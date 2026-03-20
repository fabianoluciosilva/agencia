# Inamob Negócios Digitais — Site Institucional

Site profissional para agência de marketing digital imobiliária.
Stack: **Next.js 14 + Tailwind CSS + React**

---

## 🚀 Setup & Deploy

```bash
# 1. Instalar dependências
npm install

# 2. Desenvolvimento local
npm run dev
# Acesse http://localhost:3000

# 3. Build para produção (estático — compatível com Vercel/GitHub Pages)
npm run build

# 4. Deploy no Vercel
# Conecte o repositório GitHub ao Vercel normalmente
# O next.config.js já está configurado com output: 'export'
```

---

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── layout.jsx       ← SEO, metadados, JSON-LD, fontes
│   ├── page.jsx         ← Monta todas as seções
│   └── sitemap.js       ← Sitemap automático
├── components/
│   ├── Header.jsx       ← Navbar sticky + menu mobile
│   ├── Footer.jsx       ← Rodapé completo
│   ├── WhatsAppFloat.jsx ← Botão WhatsApp flutuante
│   └── ScrollAnimation.jsx ← Hook de animação por scroll
├── sections/
│   ├── HeroSection.jsx        ← Hero com stats card
│   ├── ServicesSection.jsx    ← 6 serviços em cards
│   ├── ResultsSection.jsx     ← Comparativo agência comum vs Inamob
│   ├── ProcessSection.jsx     ← 4 etapas + garantia
│   ├── TestimonialsSection.jsx ← Depoimentos + clientes
│   ├── FaqSection.jsx         ← FAQ accordion
│   └── ContactSection.jsx     ← Formulário + WhatsApp + info
├── data/
│   └── site.js          ← ⭐ TODOS os textos centralizados aqui
└── styles/
    └── globals.css      ← Animações, tema, tipografia
```

---

## ✏️ Como Personalizar

Quase tudo está centralizado em **`src/data/site.js`**.
Abra esse arquivo e atualize:

```js
export const SITE = {
  whatsapp: '5521999999999',     // ← Número real (só dígitos)
  phone: '+5521999999999',       // ← Telefone de exibição
  email: 'contato@inamob.com.br',
  cnpj: '00.000.000/0001-00',
  instagram: 'https://instagram.com/inamob',
  linkedin: 'https://linkedin.com/company/inamob',
}
```

---

## 🔍 SEO Implementado

- ✅ `<title>` e `<meta description>` otimizados
- ✅ Open Graph (Facebook/WhatsApp preview)
- ✅ Twitter Card
- ✅ JSON-LD (Organization + LocalBusiness + WebSite)
- ✅ Sitemap automático (`/sitemap.xml`)
- ✅ `robots.txt`
- ✅ Canonical URL
- ✅ Web Manifest
- ✅ Fontes com preconnect (performance)
- ✅ `lang="pt-BR"` correto no HTML

**Ações adicionais recomendadas:**
1. Adicionar código do Google Search Console em `layout.jsx` → `verification.google`
2. Criar imagem OG real (`public/og-image.jpg`, 1200×630px)
3. Criar favicon real (`public/favicon.ico`) e ícones
4. Cadastrar no Google Meu Negócio
5. Integrar formulário com serviço real (Formspree, EmailJS, ou API própria)

---

## 🖼️ PROMPT PARA GERAR A LOGO

Cole este prompt no **Midjourney**, **DALL-E 3**, **Adobe Firefly** ou **Ideogram**:

---

### PROMPT PRINCIPAL (em inglês para melhores resultados):

```
Minimalist luxury real estate digital agency logo for "Inamob Negócios Digitais", 
a Brazilian company. The logo combines a stylized house/building silhouette 
with a subtle upward arrow or growth curve integrated into the design.

Visual style:
- Color palette: rich gold (#C9A84C) and deep navy/near-black (#0A0A0F)
- Typography: elegant serif display font (similar to Playfair Display) 
  for "Inamob", paired with small clean sans-serif for "Negócios Digitais"
- Icon: geometric, sharp, architectural — a modern townhouse or building 
  outline combined with a subtle digital element (pixel, circuit node, or 
  rising arrow)
- Mood: premium, trustworthy, contemporary luxury real estate
- Format: vector-style, works on dark background and white background
- NO gradients, NO drop shadows, NO 3D effects — flat and refined
- Logomark + logotype horizontal version
- Clean negative space, strong silhouette recognition

The icon should be recognizable at 32×32px as a favicon and at full size as 
a website header logo. Think of brands like Sotheby's International Realty 
meets a modern fintech startup.
```

---

### VARIAÇÕES PARA TESTAR:

**Versão mais icônica:**
```
Logo icon only for "Inamob": a stylized letter "I" that doubles as 
a building/skyscraper silhouette with a small gold pixel-dot accent. 
Flat design, gold on dark navy. Premium real estate brand mark.
```

**Versão tipográfica:**
```
Wordmark logo "INAMOB" in a custom geometric serif typeface, 
gold color, with a small architectural icon to the left — 
a simplified house with a rising trend line integrated. 
Luxury Brazilian real estate digital agency aesthetic.
```

---

### DICA DE USO NO MIDJOURNEY:
Adicione ao final: `--ar 3:1 --style raw --v 6.1`
Para ícone quadrado: `--ar 1:1 --style raw --v 6.1`

---

## 📋 Checklist de Lançamento

- [ ] Atualizar dados em `src/data/site.js`
- [ ] Criar e adicionar logo em `public/`
- [ ] Criar imagem OG (`public/og-image.jpg`)
- [ ] Criar favicon e ícones
- [ ] Integrar formulário de contato com backend
- [ ] Adicionar fotos reais da equipe/projetos
- [ ] Configurar domínio no Vercel
- [ ] Registrar no Google Search Console
- [ ] Configurar Google Analytics 4
- [ ] Instalar Meta Pixel
- [ ] Cadastrar Google Meu Negócio
- [ ] Adicionar depoimentos e clientes reais
