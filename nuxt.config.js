module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa'
  ],
  proxy: {
    '/events': 'http://localhost:9000'
  },
  env: {
    FRONT_API_URL: process.env.FRONT_API_URL
  },
  generate: {
    routes (callback) {
      const {api} = require('./src/events')
      require('dotenv').config()
      return api().then((result) => {
        const routes = result.map((event) => {
          return `/event/${event.event_id}`
        })
        callback(null, routes)
      }).catch(callback)
    }
  }
}
