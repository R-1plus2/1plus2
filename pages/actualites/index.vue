<template>
  <main class="page-actu">
  <div class="grid">
    <article class="article" v-for="a in actualites" :data-date="e.date">
        <nuxt-link class="article-padding" :to="a._path+'/'">
            <div class="thumb">
                <img class="cover" :src="a.thumbnail">
            </div>
            <div class="content">
                <p class="description-article"><b v-for="c in a.catt">{{ c.cat }}</b></p>
                <h3 class="title-article">{{ a.title }}</h3>
                <vue-markdown class="description">{{ body.description }}</vue-markdown>
            </div>
        </nuxt-link>
      </article>
    </div>
  </main>
</template>
<script>
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'
  // export
export default {
    layout: 'default',
    components: { VueLazyload },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
      return {
        title: 'Programmation | Electrobotik Invasion - le 2 & 3 Août 2019',
        meta: [
          { hid: 'description', name: 'description', content: 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:title', 'content': 'Electrobotik Invasion - le 2 & 3 Août 2019', 'vmid': 'og:title' },
          { 'property': 'og:description', 'content': 'Electrobotik Invasion Festival, le 2 & 3 Août 2019, Circuit Paul Ricard - Le Castelet (83).' },
          { 'property': 'og:image', 'content': 'images/uploads/link_share.jpg', 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/films/page/', false, /\.json$/);
      const actualites = context.keys().map(key => ({
        ...context(key),
        _path: `/actualites/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        actualites
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'ACTUALITES';
          $('.page-title').html( modif );           
      }
  }
}
</script>

