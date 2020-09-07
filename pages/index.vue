<template>
  <main class="page-index">
  
      <article v-for="i in fact" class="small-article facto-home">
          <a class="article-padding factory-lien" :href="i.facto">
              <img class="cover" :src="i.photoo"/>
              <div class="content factory-image">
                  <h3 class="title-article factory-nom">{{ i.facto}}</h3>
              </div>
          </a>
      </article>
      
  </main>
</template>
<script>
  import $ from 'jquery'
  import VueMarkdown from 'vue-markdown'
  export default {
    layout: 'default',
    transition: { name: 'intro', mode: 'out-in' },
    components: { VueMarkdown},
    async asyncData({ params }) {
      let page = await import('~/content/accueil/page/accueil.json');
      return page;
    },
    mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
    },
    destroyed() {
    },
    methods: {
        titre(){
            var modif = 'ACCUEIL';
            $('.page-title').html( modif );  
            $('.factory-lien').each( function( ) {
                 var modif = $(this).children('.factory-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 console.log(modif);
                 console.log(NewStr);
                 $(this).attr("href", "/factory/"+NewStr );
            });
        },
    }
  }
</script>

