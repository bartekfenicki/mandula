export default {
    async render() {
      this.res.setHeader('Content-Type', 'application/xml');
  
      const { $content } = this.context;
  
      const posts = await $content('posts').fetch();
      const pages = await $content().only(['path']).fetch();
  
      const host = 'mandula17.vercel.app'; 
  
      const items = [...posts, ...pages].map((item) => ({
        loc: `${host}${item.path}`,
        lastmod: item.updatedAt || item.createdAt, 
        changefreq: 'weekly',
      }));
  
      return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${items
          .map(
            (item) => `
          <url>
            <loc>${item.loc}</loc>
            <lastmod>${item.lastmod}</lastmod>
            <changefreq>${item.changefreq}</changefreq>
          </url>
        `,
          )
          .join('')}
      </urlset>`;
    },
  };