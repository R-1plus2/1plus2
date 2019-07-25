<template>
  <main class="page-film">
    <div class="grid">
        <article v-for="f in films" class="small-article">
            <nuxt-link class="article-padding" :to="f._path+'/'">
                <img class="cover" :src="f.cover">
                <div class="content" :data-date="f.date">
                    <h3 class="title-article">{{ f.title }}</h3>
                    <hr>
                    <p class="description-article">{{ f.soustitre }}</p>
                    <small class="date">{{ f.date }}</small>
                </div>
            </nuxt-link>
        </article>
    </div>
  </main>
</template>
<script>
  import $ from 'jquery'
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }
  // export
export default {
    layout: 'default',
    components: {  },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
     return {
        title: 'FILM | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `FILM | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/films/page/', false, /\.json$/);
      const films = context.keys().map(key => ({
        ...context(key),
        _path: `/films/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        films,
        grid: null
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
      this.annee();
      this.ea();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'FILMS';
          $('.page-title').html( modif );           
      },
      annee(){
          $('.date').each( function( ) {     
              console.log($(this).html().substr(0, 3));
              
          });
      },
      ea() {
        var grid = new Isotope(".grid", {
          itemSelector: ".small-article",
          getSortData : {
           date : function ($elem) {
            return $($elem).find('.content').attr('data-date');
           }
          },
          sortBy : 'date',
          sortAscending : false
        });
        grid.layout();
      }
  }
}
</script>
