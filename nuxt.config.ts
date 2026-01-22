// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // baseURL: '/',
    // baseURL: '/doctrine/',
    // buildAssetsDir: '/build/'
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  experimental: {
    asyncContext: true
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    preset: 'static',
    serveStatic: true,
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },

  ssr: true,

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify',
    customCollections: [{
      prefix: 'local',
      dir: './app/assets/icons'
    }]
  },

  llms: {
    domain: 'https://doctrine.thefreemavens.org/',
    title: 'The Open Doctrine',
    description: 'The canonical, open-source repository of Natural Law knowledge. Read, translate, and contribute to the decrypted principles of sovereignty.',
    full: {
      title: 'The Free Mavens Doctrine - Complete Knowledge Base',
      description: 'The structured and evolving body of work containing the Hermetic Principles, the Generative Principle of Care, and the objective science of Natural Law. This is the foundational text for the Freemavenry path.'
    },
    sections: [
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Essentials',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/essentials%' }
        ]
      }
    ]
  },

  mcp: {
    name: 'Docs template'
  }
})
