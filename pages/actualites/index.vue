<template>
  <main class="page-actu">
  <div class="grid">
    <article class="article" v-for="a in actualites" >
        <nuxt-link class="article-padding" :to="a._path+'/'">
            <div class="thumb">
                <img class="cover" :src="a.thumbnail">
            </div>
            <div class="content" :data-date="a.date">
                <p class="description-article"><b v-for="c in a.catt">{{ c.cat }}</b></p>
                <h3 class="title-article">{{ a.title }}</h3>
                <vue-markdown class="description">{{ a.description }}</vue-markdown>
            </div>
        </nuxt-link>
      </article>
    </div>
  </main>
</template>
<script>
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'
  import VueMarkdown from 'vue-markdown'
  // export
export default {
    layout: 'default',
    components: { VueLazyload, VueMarkdown },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
      return {
        title: 'ACTUALITÉS | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `ACTUALITÉS | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/actualites/page/', false, /\.json$/);
      const actualites = context.keys().map(key => ({
        ...context(key),
        _path: `/actualites/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        actualites,
        grid: null
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
      this.ea();
      this.annee();
  },
  methods: {
     titre(){
      var modif = 'ACTUALITES';
      $('.page-title').html( modif );           
     },
     annee(){
          $('.date').each( function( ) {
             var modif = $(this).html().substr(0, 4);
             $(this).html(modif);
          });
     },
      ea() {
        var grid = new Isotope(".grid", {
          itemSelector: ".article",
          getSortData : {
           date : function ($elem) {
            return $($elem).find('.content').attr('data-date');
           }
          },
          sortBy : 'date',
          sortAscending : false
        });
        $('.grid .article:first-child').addClass('big-one');
        grid.layout();  
      }
  }
}
</script>
