var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
var dynamicRoutes = getDynamicPaths({
  '/factory': 'factory/page/*.json',
  '/hors-les-murs': 'hors-les-murs/page/*.json',
  '/films': 'films/page/*.json',
  '/actualites': 'actualites/page/*.json',
  '/editions': 'editions/page/*.json',
  '/expositions': 'expositions/page/*.json',
  '/colloques': 'colloques/page/*.json',
  '/residences': 'residences/page/*.json',
  '/photographes': 'photographes/page/*.json',
  '/categories': 'categorie/page/*.json'
});
module.exports = {
  head: {
    title: '1+2 – Photographie & Sciences',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: '1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.' },
      { 'property': 'og:title', 'content': '1+2 – Photographie & Sciences', 'vmid': 'og:title' },
      { 'property': 'og:description', 'content': '1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.' },
      { 'property': 'og:image', 'content': 'images/uploads/logof.jpeg', 'vmid': 'og:image' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.jpg' },
      { rel: 'stylesheet', integrity: 'sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz', href: 'https://use.fontawesome.com/releases/v5.4.1/css/all.css', crossorigin: 'anonymous' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js', ssr: false },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js', ssr: false }
    ]
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/responsive.css',
    '~/assets/css/transition.css',
    '~/assets/css/fonts.css'
  ],
  router: {
    scrollBehavior: function (to, from, savedPosition) { return { x: 0, y: 0 } }
  },
  plugins: [
    { src: '~/plugins/vue-lazyload', ssr: false },
    { src: "~/plugins/isotope.js", ssr: false },
    { src: '~/plugins/ga.js', ssr: false },
    { src: '~/plugins/owl.js', ssr: false }
  ],
  loading: '~/components/ui/loading.vue',
  /*loading: false,*/
  generate: {
    routes: dynamicRoutes
  },
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  },
  build: {
    vendor: ['jquery'],
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ],
    extend(config, { isDev, isClient }) {
      const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
      vueLoader.options.transformToRequire['img'] = ['src', 'data-src'];
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
