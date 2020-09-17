<template>
  <main class="page-residence">
    <div class="intro">
        <p> La Résidence 1+2 «Photographie & Sciences» est un programme culturel ancré à Toulouse associant la photographie et les sciences. Chaque année,la Résidence 
        1+2 rassemble trois photographes (1 photographe de renom + 2 photographes émergent.es) pour une résidence de deux mois. Durant ce temps, les photographes 
        vivent ensemble et créent une oeuvre personnelle et inédite. Le trio est soutenu dans ses recherches par des institutions scientifiques et des chercheur.e.s
        basé.e.s à Toulouse et en Occitanie. </p>
    </div> 
    <div class="grid">
        <article v-for="r in residence" class="small-article">
            <nuxt-link class="article-padding" :to="r._path+'/'">
                <img class="cover2" :src="r.cover">
                <div class="content" :data-date="r.date">
                    <h3 class="title-article">{{ r.title }}</h3>
                    <hr>
                    <p class="description-article">{{ r.soustitre }}</p>
                    <small class="date">{{ r.date }}</small>
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
        title: 'RESIDENCES | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `RESIDENCES | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/residences/page/', false, /\.json$/);
      const residence = context.keys().map(key => ({
        ...context(key),
        _path: `/residences/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        residence,
        grid: null
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      $("body").addClass('red-page');
      this.titre();
      this.ea();
      this.annee();  
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'RESIDENCES';
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
