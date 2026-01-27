export default defineNuxtConfig({
  // extends: ['docus'],

  css: ['~/assets/css/main.css'],

  
  i18n: {
    defaultLocale: 'en',
    locales: [{
      code: 'en',
      name: 'English',
      dir: 'ltr'
    }, {
      code: 'fr',
      name: 'Français',
      dir: 'ltr'
    }, {
      code: 'he',
      name: 'עברית',
      dir: 'rtl'
    }],
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
      description: 'The structured documentation of **immutable** truth - containing the Hermetic Principles, the Generative Principle of Care, and the objective science of Natural Law. This is the foundational text for the Freemavenry path.'
    },
    // sections: [
    //   {
    //     title: 'Getting Started',
    //     contentCollection: 'doctrine',
    //     contentFilters: [
    //       { field: 'path', operator: 'LIKE', value: '/en/getting-started/introduction%' }
    //     ]
    //   }
    //   // {
    //     //   title: 'Essentials',
    //     //   contentCollection: 'doctrine',
    //     //   contentFilters: [
    //       //     { field: 'path', operator: 'LIKE', value: '/essentials%' }
    //   //   ]
    //   // }
    // ]
  },

  mcp: { enabled: false },
  
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxt/scripts'],
  
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

  // vite: {
  //   build: {
  //     rollupOptions: {
  //       output: {
  //         manualChunks: id => {
  //           if (id.includes('node_modules')) {
  //             if (id.includes('@nuxt/scripts')) {
  //               return '@nuxt/scripts'
  //             }
  //             if (id.includes('docus')) {
  //               return 'docus'
  //             }
  //             return null
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
})