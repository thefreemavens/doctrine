import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const doctrineSchema = z.object({
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    to: z.string(),
    target: z.string().optional()
  })).optional()
})

export default defineContentConfig({
  collections: {
    // landing: defineCollection({
    //   type: 'page',
    //   source: 'index.md'
    // }),
    doctrine: defineCollection({
      type: 'page',
      source: {
        include: '**'
      },
      schema: doctrineSchema
    })
  }
})
