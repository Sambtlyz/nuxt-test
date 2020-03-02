
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Kanit&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet" , href: "css/bootstrap.min.css" },
      { rel: 'stylesheet' , href: 'css/font-awesome.min.css' },
      { rel: 'stylesheet' , href: 'css/bicon.min.css' },
      { rel: 'stylesheet' , href: 'css/animate.min.css' },

      { rel: 'stylesheet' , href: 'css/owl.theme.min.css' },
      { rel: 'stylesheet' , href: 'css/owl.carousel.min.css' },

      { rel: 'stylesheet' , href: 'css/style.blue.css' },
      { rel: 'stylesheet' , href: 'css/responsive.css' },
      { rel: 'stylesheet' , href: 'css/lity.css' },
      // { rel: 'stylesheet' , href: 'css/lity.min.css' },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
      { rel: "stylesheet", href: "https://www.w3schools.com/w3css/4/w3.css" },


    ],
    script: [
      { src: "vendor/jquery.js", body: true },
      { src: "js/lity.js", body: true },
      // { src: "js/lity.min.js", body: true },
      { src: "js/jquery-2.1.1.min.js", body: true },
      { src: "js/bootstrap.min.js", body: true },
      { src: "js/owl.carousel.min.js", body: true },
      { src: "js/jquery.stellar.min.js", body: true },
      { src: "js/jquery.waypoints.min.js", body: true }, 
      { src: "js/jquery.counterup.min.js", body: true },
      { src: "js/theme.js", body: true },
      // { src: "js/owl.carousel.js", body: true },
      // { src: "js/zepto.js", body: true },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
