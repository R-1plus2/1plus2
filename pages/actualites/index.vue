<template>
  <main class="page-actu">
    <div class="grid">
      <article class="article" v-for="a in actualites" >
          <div class="article-padding">
              <div class="thumb">
                  <img class="cover" :src="a.thumbnail">
              </div>
              <div class="content" :data-date="a.date">
                  <p class="description-article"><b class="category" v-for="c in a.catt">{{ c.cat }}</b></p>
                  <nuxt-link :to="a._path+'/'"><h3 class="title-article">{{ a.title }}</h3></nuxt-link>
                  <p class="description">{{ a.intro }}</p>
                  <nuxt-link class="link" :to="a._path+'/'">Lire la suite</nuxt-link>
              </div>
          </div>
       </article>
    </div>
  </main>
</template>
<script>
  import $ from 'jquery'
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }  
  import VueLazyload from 'vue-lazyload'
  // export
export default {
    layout: 'default',
    components: { VueLazyload },
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
        $('.category').each( function( ) {

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
        $(grid.filteredItems[0].element).addClass('big');
        setTimeout(function(){grid.layout(); }, 100);
     }
  }
}
</script>
