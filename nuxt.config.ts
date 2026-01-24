// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-11',

  app: {
    // baseURL: '/',
    // baseURL: '/doctrine/',
    // buildAssetsDir: '/build/'
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'rose-pine-moon',
            light: 'slack-ochin',
            dark: 'rose-pine-moon',
          }
        },
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  devtools: {
    enabled: true
  },
  
  experimental: {
    asyncContext: true
  },

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
      title: 'The Freemavens Doctrine - Complete Knowledge Base',
      description: 'The structured documentation of **immutable** truth—containing the Hermetic Principles, the Generative Principle of Care, and the objective science of Natural Law. This is the foundational text for the Freemavenry path.'
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
    name: 'Doctrine'
  },
  
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms',
    '@nuxtjs/mcp-toolkit',
    '@nuxt/scripts'
  ],

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

})