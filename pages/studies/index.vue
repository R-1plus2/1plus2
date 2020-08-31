<template>
  <main class="page-studies">
    <div class="intro">
        <p> 	Le « <b>1+2 Factory</b> » est un dispositif de résidences photographiques en institutions, 
        territoires et/ou entreprises. Sur une période donnée, un ou une photographe propose son regard d’auteur 
        en créant une oeuvre inédite sur l’entité concernée en revisitant son histoire, son territoire, ses modes opératoires, 
        sa production, ses savoirs-faire. Le fruit de ce travail est présenté à l’automne suivant dans un lieu muséal 
        à Toulouse ou sur le territoire de la métropole toulousaine, lors d’une exposition 
        collective regroupant les « <b>1+2 Factory</b> » de l’année. L’ensemble des « <b>1+2 Factory</b> » est aussi présenté 
        au «  <b>Colloque national - Photographie & Sciences</b> » durant lesquels photographes, scientifiques, entreprises, 
        institutions, journalistes, grand public sont invité.es à s’exprimer sur ce temps de création et échanger 
        avec différents publics. Le programme « <b>1+2 Factory</b> » a pour ambition de créer un réseau d’entreprises et 
        d’institutions sensibles à l’art. Il constitue également une pépinière de photographes aux écritures différentes 
        pour un partage des savoirs vers tous les publics. </p>
    </div>
    <div class="grid">
      <article  v-for="f in studies"  class="small-article">
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
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }
  import $ from 'jquery'
  import VueLazyload from 'vue-lazyload'
  // export
export default {
    layout: 'default',
    components: { VueLazyload },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
      return {
        title: 'STUDIES | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `STUDIES | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/studies/page/', false, /\.json$/);
      const studies = context.keys().map(key => ({
        ...context(key),
        _path: `/studies/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        studies,
        grid: null
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page');
      $("body").addClass('blue-page');
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
          var modif = 'STUDIES';
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
        $(grid.filteredItems[0].element).addClass('big');
        setTimeout(function(){grid.layout(); }, 100);
      }
  }
}
</script>
