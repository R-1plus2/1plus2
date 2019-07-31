<template>
  <main class="page-photographe">
    <div class="grid">
        <article v-for="p in photographe" class="small-article">
            <nuxt-link class="article-padding" :to="p._path+'/'">
                <img class="cover" :src="p.cover">
                <div class="content" :data-date="p.date">
                    <h3 class="title-article">{{ p.title }}</h3>
                    <hr>
                    <p class="description-article">{{ p.soustitre }}</p>
                    <small class="date">{{ p.date }}</small>
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
        title: 'PHOTOGRAPHES | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `PHOTOGRAPHES | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/photographes/page/', false, /\.json$/);
      const photographe = context.keys().map(key => ({
        ...context(key),
        _path: `/photographes/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        photographe,
        grid: null
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
      this.ea();
      this.annee();  
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'PHOTOGRAPHES';
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
