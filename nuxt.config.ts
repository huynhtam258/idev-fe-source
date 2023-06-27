// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  devtools: { enabled: false },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  typescript: {
    typeCheck: true
  },
  css: [
    'assets/scss/style.scss'
  ],
  runtimeConfig: {
    public: {
      url: `${process.env.NUXT_PUBLIC_API_BASE}` || ''
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap',
          crossorigin: ''
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: []
    }
  }
})
