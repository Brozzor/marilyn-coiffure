export default {
  // Enable server-side rendering for SEO
  ssr: true,

  router: {
    linkExactActiveClass: 'bg-gray-200',
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/index.html',
        redirect: '/'
      })
    }
  },
  // Target server for Docker/SSR deployment
  target: 'server',

  // Global page headers
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: 'Marilyn Coiffure | Coiffeuse et Barbière à Domicile à Poitiers (86)',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Marilyn Coiffure, votre coiffeuse et barbière à domicile à Poitiers et ses alentours (86). 41 ans d\'expérience, +4000 clients satisfaits. Coupe femme, homme, enfant, couleur, brushing, taille de barbe. Réservez en ligne.' },
      // Open Graph / Facebook
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://marilyn-coiffure.fr' },
      { hid: 'og:title', property: 'og:title', content: 'Marilyn Coiffure | Coiffeuse et Barbière à Domicile à Poitiers (86)' },
      { hid: 'og:description', property: 'og:description', content: 'Votre coiffeuse professionnelle à domicile à Poitiers. 41 ans d\'expérience, coupes femme/homme/enfant, couleur, brushing, barbe. Réservez en ligne.' },
      { hid: 'og:image', property: 'og:image', content: 'https://marilyn-coiffure.fr/images/banner-03.jpg' },
      { hid: 'og:locale', property: 'og:locale', content: 'fr_FR' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Marilyn Coiffure' },
      // Twitter Card
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Marilyn Coiffure | Coiffeuse à Domicile à Poitiers (86)' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Coiffeuse et barbière à domicile à Poitiers. 41 ans d\'expérience. Réservez votre rendez-vous en ligne.' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://marilyn-coiffure.fr/images/banner-03.jpg' },
      // SEO avancé
      { name: 'theme-color', content: '#917758' },
      { name: 'author', content: 'Marilyn Buisson' },
      { hid: 'robots', name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'geo.region', content: 'FR-86' },
      { name: 'geo.placename', content: 'Poitiers' },
      { name: 'geo.position', content: '46.5802;0.3404' },
      { name: 'ICBM', content: '46.5802, 0.3404' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'canonical', href: 'https://marilyn-coiffure.fr' },
      // Preconnect pour les fonts Google (accélère le chargement)
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
      }
    ],
    script: [
      {
        src: 'https://vinaly.co/js/script.js',
        defer: true,
        'data-website-id': '07bdc79f-3016-4c95-a82a-acc0cf5d28d1',
      },
      // JSON-LD Schema.org pour le référencement local
      {
        type: 'application/ld+json',
        json: {
          '@context': 'https://schema.org',
          '@type': 'HairSalon',
          'name': 'Marilyn Coiffure',
          'description': 'Coiffeuse et barbière à domicile à Poitiers et ses alentours. 41 ans d\'expérience professionnelle.',
          'url': 'https://marilyn-coiffure.fr',
          'telephone': '+33760789485',
          'email': 'contact@marilyn-coiffure.fr',
          'image': 'https://marilyn-coiffure.fr/images/banner-03.jpg',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': '1 Rue Jules Abonneau',
            'addressLocality': 'Migné-Auxances',
            'postalCode': '86440',
            'addressRegion': 'Vienne',
            'addressCountry': 'FR'
          },
          'geo': {
            '@type': 'GeoCoordinates',
            'latitude': 46.5802,
            'longitude': 0.3404
          },
          'areaServed': {
            '@type': 'City',
            'name': 'Poitiers'
          },
          'openingHoursSpecification': [
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              'opens': '09:00',
              'closes': '19:00'
            },
            {
              '@type': 'OpeningHoursSpecification',
              'dayOfWeek': 'Saturday',
              'opens': '09:00',
              'closes': '15:00'
            }
          ],
          'priceRange': '€',
          'currenciesAccepted': 'EUR',
          'paymentAccepted': 'Cash, Card',
          'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '5',
            'reviewCount': '4000'
          },
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Services de coiffure à domicile',
            'itemListElement': [
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Coupe homme',
                  'description': 'Coupe de cheveux homme avec ou sans shampoing'
                },
                'price': '18',
                'priceCurrency': 'EUR'
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Coupe femme',
                  'description': 'Coupe de cheveux femme avec shampoing et brushing'
                },
                'price': '27',
                'priceCurrency': 'EUR'
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Taille de barbe',
                  'description': 'Entretien et taille de barbe professionnelle'
                },
                'price': '7',
                'priceCurrency': 'EUR'
              },
              {
                '@type': 'Offer',
                'itemOffered': {
                  '@type': 'Service',
                  'name': 'Couleur et brushing',
                  'description': 'Coloration complète avec shampoing, soin et brushing'
                },
                'price': '60',
                'priceCurrency': 'EUR'
              }
            ]
          },
          'founder': {
            '@type': 'Person',
            'name': 'Marilyn Buisson',
            'jobTitle': 'Coiffeuse et barbière professionnelle'
          },
          'sameAs': []
        }
      }
    ]

  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/icofont.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/datepicker.client.js', mode: 'client' },
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
    baseURL: 'https://api.marilyn-coiffure.fr/',
    proxyHeaders: false,
    credentials: false
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
