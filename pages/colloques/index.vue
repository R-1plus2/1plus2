<template>
  <main class="page-colloques">
   <div class="intro">
        <p> 	
	Comprendre et agir face aux enjeux du monde contemporain, c’est aussi interpeler chaque citoyen et construire avec lui de nouvelles réflexions
  pour de nouvelles pratiques. Chaque année, un week-end inaugural ouvert à tous les publics est organisé avec plusieurs temps forts dont le 
  <b>colloque national « Photographie &amp; Sciences »</b> où photographes, scientifiques et citoyens échangent lors de plusieurs tables-rondes 
  thématiques et interactives. 
</p>
    </div>
    <div class="grid">  
      <article v-for="c in colloques" class="small-article">
          <nuxt-link class="article-padding" :to="c._path+'/'">
              <img class="cover2" :src="c.cover">
              <div class="content" :data-date="c.date">
                  <h3 class="title-article">{{ c.title }}</h3>
                  <hr>
                  <p class="description-article">{{ c.soustitre }}</p>
                  <small class="date">{{ c.horaires }}</small>
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
        title: 'COLLOQUES | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `COLLOQUES | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/colloques/page/', false, /\.json$/);
      const colloques = context.keys().map(key => ({
        ...context(key),
        _path: `/colloques/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        colloques,
        grid: null
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      $("body").addClass('red-page');
      this.titre();
      this.ea();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'COLLOQUES';
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
          sortAscending : true
        });
        setTimeout(function(){grid.layout(); }, 100);
        
      }
  }
}
</script>
