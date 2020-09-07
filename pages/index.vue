<template>
  <main class="page-index">
      <div class="articles-content">
          <h3 class="factory-title">FACTORY</h3>
          <a v-for="i in fact" :href="i.facto" class="factory-lien">
            <div class="factory-image">
                <img :src="i.photoo"/>
            </div>
            <p class="factory-nom">{{ i.facto}}</p>
          </a>
      </div>
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

