import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Posts do blog: um arquivo .md por post em src/content/blog.
// "rascunho: true" deixa o post fora do site até ser aprovado.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    autor: z.enum(['Leo', 'Equipe Incorion']),
    categoria: z.enum(['Novidades', 'Gestão', 'Mercado e crédito', 'Corretores', 'Leo']),
    rascunho: z.boolean().default(false),
    capa: z.string().optional(),
    capaAlt: z.string().optional(),
    audio: z.string().optional(),
  }),
});

export const collections = { blog };
