export default defineAppConfig({
  title: 'The Open Doctrine',
  description: 'The immutable body of Natural Law knowledge made permanently and freely accessible to all.',
  vweb: '0.1.1',
  vapp: '29.2',
  url: {
    gh_tfm: 'https://github.com/thefreemavens',
  },
  
  github: {
    url: 'https://github.com/thefreemavens/doctrine',
    branch: 'main',
    rootDir: ''
  },
  
  socials: {
    x: 'https://x.com/thefreemavens',
    discord: 'https://discord.gg/hJmUCPjtR4',
    telegram: 'https://t.me/thefreemavens'
  },

  toc: {
    title: 'On this page:',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/thefreemavens/doctrine/edit/main/content',
      icon: 'i-local-',
      links: [
        {
          icon: 'i-local-star',
          label: 'Star on GitHub',
          to: 'https://github.com/thefreemavens/doctrine',
          target: '_blank'
        },
        {
          icon: 'i-local-discord',
          label: 'Discord',
          to: 'https://discord.gg/hJmUCPjtR4',
          target: '_blank'
        },
        {
          icon: 'i-local-telegram',
          label: 'Telegram',
          to: 'https://t.me/thefreemavens',
          target: '_blank'
        }
      ]
    }
  },

  ui: {
    colors: {
      primary: 'brand',
      secondary: 'indigo',
      neutral: 'earth'
    },
    contentSearch: {
      slots: {
        modal: 'bg-neutral-50 dark:bg-neutral-800',
      }
    },
    contentSearchButton: {
      slots: {
        base: 'bg-neutral-200/80 hover:bg-neutral-300/60 dark:bg-neutral-600/50 dark:hover:bg-neutral-600/80',
      },
    },
    // prose: {
    //   p: {
    //     base: 'my-5 leading-20 text-pretty text-base'
    //   }
    // }
    // pageCard: {
      // slots: {
      //   body: 'flex-0',
      // }
      // variants: {
      //   variant: {
      //     outline: {
      //       root: 'bg-neutral-900'
      //     }
      //   }
      // }
    // }
  }
})
