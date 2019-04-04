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
        rel: 'prefetch',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Montserrat|Source+Code+Pro'
      },
      {
        rel: 'prefetch',
        as: 'style',
        href: 'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'
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
      src: '~/plugins/LazyLoadDirective',
      ssr: false
    },
    {
      src: '~/plugins/fullpage',
      ssr: false
    },
    {
      src: '~/plugins/vue-parallax',
      ssr: false
    },


  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    'bootstrap-vue/nuxt',
    'nuxt-brotli'
  ],

  bootstrapVue: {
    componentPlugins: ['Layout', 'Tabs', 'Button', 'Image', 'Card', 'Form', 'FormInput', 'FormGroup', 'FormTextarea'],
    directivePlugins: []
  },

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

  css: ["~/assets/main.scss"],

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

    extend(config, ctx) {
      const vueLoader = config.module.rules.find(rule => rule.loader === 'vue-loader')
      vueLoader.options.transformAssetUrls = {
        video: ['src', 'poster'],
        source: 'src',
        img: 'src',
        image: 'xlink:href',
        'b-img': 'src',
        'b-img-lazy': ['src', 'blank-src'],
        'b-card': 'img-src',
        'b-card-img': 'img-src',
        'b-card-img-lazy': ['src', 'blank-src'],
        'b-carousel-slide': 'img-src',
        'b-embed': 'src'
      }
    },

    analyze: true,
    optimizeCSS: true,
    minimize: true,
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: undefined,
      cacheGroups: {}
    },
    transpile: [/^vue2-google-maps($|\/)/]


  }
}
