export default {
  mode: 'spa',
  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    title: 'store',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=no'
      },
      {
        name: 'author',
        content: 'Karolina Suchomska'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'store'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/pictures/favicon.ico'
      }
    ]
  },
  loading: {
    color: '#fff'
  },
  manifest: {
    icons: [
      {
        src: '/pictures/favicon.ico',
        sizes: '192x192',
        type: 'image/png'
      }
    ]
  },
  router: {
    base: '/furniture-store/'
  },
  css: [
    '@/assets/sass/main.scss'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios'
  ],
  buildModules: [
    '@nuxtjs/eslint-module'
  ]
}
