<template>
  <main class="page-horslesmurs">
    <div class="intro">
        <p> 	Depuis 2017, le dispositif <b> 1+2 Hors les murs </b> est un dispositif de résidences photographiques sur des territoires bien définis, 
        à l’échelle d’une commune ou d’une vallée, en Haute-Garonne (Castelnau d’Estrétefonds,…) ou en Occitanie.</p>
    </div>
    <div class="grid">
      <article  v-for="h in horslesmurs"  class="small-article">
          <nuxt-link class="article-padding" :to="h._path+'/'">
              <img class="cover" :src="h.cover">
              <div class="content" :data-date="h.date">
                  <h3 class="title-article">{{ h.title }}</h3>
                  <hr>
                  <p class="description-article">{{ h.soustitre }}</p>
                  <small class="date">{{ h.date }}</small>
              </div>
          </nuxt-link>
      </article>
    </div>
  </main>
</template>
<script>
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }
  // export
export default {
    layout: 'default',
    components: { VueLazyload },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
      return {
        title: 'HORS LES MURS | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `HORS LES MURS | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/hors-les-murs/page/', false, /\.json$/);
      const horslesmurs = context.keys().map(key => ({
        ...context(key),
        _path: `/hors-les-murs/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        horslesmurs,
        grid: null
      };
    },
  mounted() {
      $("body").removeClass('red-page blue-page');
      $("body").addClass('yellow-page');
      this.titre();
      this.ea();
      this.annee();
  },
  methods: {
      titre(){
          var modif = 'HORS LES MURS';
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
        $('.grid .small-article:first-child').addClass('big-one');
        grid.layout();
        
        
      }
  }
}
</script>
