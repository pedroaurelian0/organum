import { getCollection } from 'astro:content';

export async function GET() {
  const BASE = 'https://organum.com.br';
  const today = new Date().toISOString().split('T')[0];

  const staticRoutes = [
    { url: '/',                               priority: '1.0', changefreq: 'weekly'  },
    { url: '/metodo/',                        priority: '0.9', changefreq: 'monthly' },
    { url: '/metodo/fundacao/',               priority: '0.8', changefreq: 'monthly' },
    { url: '/metodo/entidade/',               priority: '0.9', changefreq: 'monthly' },
    { url: '/metodo/conteudo/',               priority: '0.8', changefreq: 'monthly' },
    { url: '/metodo/geo-aeo/',                priority: '0.9', changefreq: 'monthly' },
    { url: '/metodo/digital-pr/',             priority: '0.8', changefreq: 'monthly' },
    { url: '/servicos/',                      priority: '0.9', changefreq: 'monthly' },
    { url: '/servicos/seo-tecnico/',          priority: '0.8', changefreq: 'monthly' },
    { url: '/servicos/geo-aeo/',              priority: '0.9', changefreq: 'monthly' },
    { url: '/servicos/seo-b2b/',              priority: '0.8', changefreq: 'monthly' },
    { url: '/servicos/conteudo/',             priority: '0.7', changefreq: 'monthly' },
    { url: '/servicos/link-building/',        priority: '0.7', changefreq: 'monthly' },
    { url: '/servicos/seo-ecommerce/',        priority: '0.7', changefreq: 'monthly' },
    { url: '/servicos/identidade-entidade/',  priority: '0.8', changefreq: 'monthly' },
    { url: '/cases/',                         priority: '0.8', changefreq: 'monthly' },
    { url: '/cases/hunterhunter/',            priority: '0.8', changefreq: 'monthly' },
    { url: '/cases/7-vacations/',             priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/',                          priority: '0.8', changefreq: 'weekly'  },
    { url: '/sobre/',                         priority: '0.7', changefreq: 'monthly' },
    { url: '/sobre/pedro-aureliano/',         priority: '0.8', changefreq: 'monthly' },
    { url: '/auditoria-gratuita/',            priority: '0.9', changefreq: 'monthly' },
  ];

  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const blogRoutes = posts.map((post) => {
    const slug = post.slug.split('/').pop();
    const lastmod = (post.data.updatedAt || post.data.publishedAt).toISOString().split('T')[0];
    return { url: `/blog/${post.data.cluster}/${slug}/`, priority: '0.7', changefreq: 'monthly', lastmod };
  });

  const allRoutes = [...staticRoutes, ...blogRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${BASE}${r.url}</loc>
    <lastmod>${r.lastmod || today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
