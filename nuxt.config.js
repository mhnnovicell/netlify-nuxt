const pkg = require('./package')

module.exports = {
  mode: 'universal',

  loading: {
    color: '#2bf4a1',
    failedColor: '#bf5050',
    duration: 1500,
    loading: true
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat|Source+Code+Pro'
      }

    ]
  },

  /*
   ** Customize the progress-bar color
   */

  /*
   ** Global CSS
   */

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{
      src: '~/plugins/fullpage',
      ssr: false
    },
    {
      src: '~/plugins/vue-parallax',
      ssr: false
    }

  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt'
  ],

  manifest: {
    name: 'MIKKELRAEV',
    lang: 'da',
    short_name: 'MIKKELRAEV',
    icons: [{
        src: "/android-chrome-144x144.png",
        sizes: "144x144",
        type: "image/png"

      },
      {
        src: "/android-chrome-144x144.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/android-chrome-144x144.png",
        sizes: "384x384",
        type: "image/png"
      },
      {
        src: "/android-chrome-144x144.png",
        sizes: "512x512",
        type: "image/png"
      }
    ],
    display: "fullscreen",
    background_color: "#4a0c85",
    theme_color: "#4a0c85",
    orientation: "portrait"
  },

  css: ["assets/main.scss"],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   if (ctx.isDev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }

    extractCSS: true,
    optimizeCSS: true,
    minimize: true,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: undefined,
      cacheGroups: {}
    }

  }
}
