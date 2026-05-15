import { defineCollection, z } from 'astro:content';

/** Clusters semânticos do blog — espelham os silos do site */
const clusterEnum = z.enum([
  'seo-tecnico',
  'geo-aeo',
  'seo-b2b',
  'seo-ecommerce',
  'entidade',
  'digital-pr',
]);

/** Nomes legíveis por cluster para exibição na UI */
export const clusterLabels: Record<z.infer<typeof clusterEnum>, string> = {
  'seo-tecnico':   'SEO Técnico',
  'geo-aeo':       'GEO + AEO',
  'seo-b2b':       'SEO B2B',
  'seo-ecommerce': 'SEO E-commerce',
  'entidade':      'Identidade de Entidade',
  'digital-pr':    'Digital PR',
};

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    /** Título principal — usado no H1 e na title tag */
    title: z.string(),
    /** Meta description — máximo 160 caracteres */
    description: z.string().max(165),
    /** Data de publicação original */
    publishedAt: z.coerce.date(),
    /** Data da última atualização relevante — atualizar em revisões de conteúdo */
    updatedAt: z.coerce.date().optional(),
    /** Autor do artigo — default Pedro Aureliano */
    author: z.string().default('Pedro Aureliano'),
    /** Cluster semântico ao qual este artigo pertence */
    cluster: clusterEnum,
    /** URL da imagem OG (1200×630) */
    ogImage: z.string().url().optional(),
    /** Tags para relacionamento entre artigos */
    tags: z.array(z.string()).default([]),
    /** true = não publicar no build de produção */
    draft: z.boolean().default(false),
    /** Contagem de palavras — para cálculo de tempo de leitura e Article Schema */
    wordCount: z.number().optional(),
    /** Tempo de leitura em minutos — calculado automaticamente se wordCount existir */
    readingTime: z.number().optional(),
  }),
});

const cases = defineCollection({
  type: 'content',
  schema: z.object({
    /** Título do case — ex: "HunterHunter: citação por IA em 90 dias" */
    title: z.string(),
    /** Descrição curta para cards e meta description */
    description: z.string().max(165),
    /** Nome do cliente */
    client: z.string(),
    /** Setor/segmento do cliente */
    sector: z.string(),
    /** Resultado principal em uma linha — exibido em destaque */
    result: z.string(),
    /** Data de publicação */
    publishedAt: z.coerce.date(),
    /** URL da imagem OG */
    ogImage: z.string().url().optional(),
    /** Métricas para exibir em grid */
    metrics: z
      .array(z.object({ label: z.string(), value: z.string() }))
      .optional(),
    /** Depoimento do cliente */
    testimonial: z
      .object({
        quote: z.string(),
        author: z.string(),
        role: z.string(),
      })
      .optional(),
    /** true = não publicar no build de produção */
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, cases };
