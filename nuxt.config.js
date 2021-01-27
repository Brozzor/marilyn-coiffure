export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Coiffeuse à domicile Marilyn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Coiffeuse à domicile Poitiers (86) et ces alentours. Votre coiffeuse professionnelle et expérimentée se déplace à domicile pour réaliser votre coiffure idéale.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700'
      }
    ]

  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/icofont.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    //'@nuxtjs/tailwindcss'

  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/proxy'
  ],
  proxy: {
    // '/api/': { target: 'https://marilyn-coiffure-back.herokuapp.com', pathRewrite: {'^/api/': ''}, changeOrigin: true }
 
   }, 


  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: 'https://marilyn-coiffure-back.herokuapp.com/',
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
