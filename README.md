# Organum — Site institucional

Agência de SEO orgânico B2B. Construído com Astro 4, Tailwind CSS e MDX.

## Stack

- **Framework**: Astro 4 (output estático)
- **Estilo**: Tailwind CSS
- **Conteúdo**: MDX via Content Collections
- **Deploy**: Vercel (CI/CD automático via GitHub)
- **Formulários**: GoHighLevel

## Setup local

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento
npm run dev
# → http://localhost:4321

# Build de produção
npm run build

# Preview do build
npm run preview

# Verificar tipos TypeScript
npm run check
```

## Estrutura do projeto

```
src/
├── components/
│   ├── seo/          # SEOHead, SchemaOrg, Breadcrumb
│   └── layout/       # Header, Footer
├── layouts/          # Base, Page, Article, LP, Case
├── pages/            # Rotas do site
├── content/          # MDX: blog/ e cases/
└── styles/           # global.css com tokens Tailwind
public/
├── robots.txt
└── favicon.svg
```

## Adicionar novo artigo de blog

1. Criar arquivo em `src/content/blog/[cluster]/nome-do-artigo.mdx`
2. Preencher frontmatter conforme schema em `src/content/config.ts`
3. Escrever o conteúdo em MDX
4. `git push` → deploy automático na Vercel

## Adicionar novo case

1. Criar arquivo em `src/content/cases/nome-do-cliente.mdx`
2. Criar página em `src/pages/cases/nome-do-cliente.astro`
3. Usar layout `Case.astro` com as métricas do cliente

## Deploy

O site faz deploy automático na Vercel a cada push na branch `main`.

Para configurar pela primeira vez:

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Formulário de auditoria

O formulário em `/auditoria-gratuita` aponta para GoHighLevel.
Substituir `PLACEHOLDER` em `src/pages/auditoria-gratuita.astro` pela URL real do form.

## SEO

- Schema Markup Organization injetado em todas as páginas via `Base.astro`
- Sitemap gerado automaticamente em `/sitemap-index.xml`
- Canonical, OG e Twitter Card gerenciados pelo `SEOHead.astro`
- `robots.txt` em `public/robots.txt`
