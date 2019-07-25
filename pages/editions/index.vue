<template>
  <main class="page-editions">
    <div class="grid">
    <article v-for="e in editions" class="small-article">
        <nuxt-link class="article-padding" :to="e._path+'/'">
            <img class="cover" :src="e.cover">
            <div class="content" :data-date="e.date">
                <h3 class="title-article">{{ e.title }}</h3>
                <hr>
                <p class="description-article">{{ e.soustitre }}</p>
                <small class="date">{{ e.date }}</small>
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
  import VueLazyload from 'vue-lazyload'
  // export
export default {
    layout: 'default',
    components: { VueLazyload },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
     return {
        title: 'EDITIONS | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `EDITIONS | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/editions/page/', false, /\.json$/);
      const editions = context.keys().map(key => ({
        ...context(key),
        _path: `/editions/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        editions,
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
      annee(){
        $('.date').each( function( ) {     
           var modif = $(this).html().substr(0, 4);
           $(this).html(modif);
        });
      },
      titre(){
          var modif = 'EDITIONS';
          $('.page-title').html( modif );           
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

