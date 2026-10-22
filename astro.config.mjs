import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Site estático da Incorion. Tudo vira HTML pronto, o que ajuda o Google.
export default defineConfig({
  site: 'https://incorion.com.br',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap({ filter: (pagina) => !pagina.includes('/previa/') })],
});
