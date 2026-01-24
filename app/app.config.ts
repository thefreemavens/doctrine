export default defineAppConfig({
  title: 'The Freemavens',
  vweb: '0.1.1',
  vapp: '29.2',
  url: {
    // discord: 'https://discord.gg/3Ccegp9YrU',
    github: 'https://github.com/thefreemavens',
    repo: 'https://github.com/thefreemavens/doctrine',
    discord: 'https://discord.gg/pThMw5mjWw',
    telegram: 'https://t.me/thefreemavens',
    x: 'https://x.com/thefreemavens'
  },
  ui: {
    colors: {
      primary: 'brand',
      neutral: 'earth'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    },
    page: {
      slots: {
        root: 'xl:gap-16',
      },
    },
    pageCard: {
      slots: {
        container: 'grid',
        leadingIcon: 'size-6'
      }
    },
    pageHero: {
      slots: {
        header: 'font-display',
        // root: 'relative isolate',
        // container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24',
        wrapper: 'text-center lg:text-left',
        headline: 'mb-4',
        title: 'text-5xl sm:text-7xl text-pretty tracking-tight font-bold text-highlighted',
        description: 'text-lg sm:text-xl/8 text-muted',
        body: 'mt-10',
        footer: 'mt-10',
        links: 'flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start'
      }
    },
    pageFeature: {
      slots: {
        leadingIcon: 'size-6 gap-4'
      },
    },
    pageSection: {
      slots: {
        title: 'font-display',
      },
      // variants: {
      //   orientation: {
      //     horizontal: {
      //       features: 'gap-1'
      //     }
      //   }
      // }
    }
  },
  seo: {
    siteName: 'The Freemavens Open Doctrine'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/thefreemavens/doctrine',
      'target': '_blank',
      'aria-label': 'GitHub'
    }]
  },
  footer: {
    credits: `The Freemavens © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://discord.gg/pThMw5mjWw',
      'target': '_blank',
      'aria-label': 'Nuxt on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://go.nuxt.com/x',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt/ui',
      'target': '_blank',
      'aria-label': 'The Freemavens on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/thefreemavens/doctrine/edit/main/content',
      links: [{
        icon: 'i-lucide-star',
        label: 'Star on GitHub',
        to: 'https://github.com/nuxt/ui',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Telegram Group',
        to: 'https://t.me/thefreemavens',
        target: '_blank'
      }]
    }
  }
})
