<template>
  <main class="page-index">
    <div class="colx4">
        <h2>FACTORY</h2>
        <article v-for="i in fact" class="small-article facto-home">
            <a class="article-padding factory-lien" :href="i.facto">
                <img class="cover" :src="i.photoo"/>
                <div class="content factory-image">
                    <h3 class="title-article factory-nom">{{ i.facto}}</h3>
                </div>
            </a>
        </article>
        <a class="read-more" href="/factory/">FACTORY</a>
    </div>
    <div class="colx4">
        <h2>RESIDENCES</h2>
        <article v-for="i in resi" class="small-article facto-home">
            <a class="article-padding factory-lien" :href="i.resid">
                <img class="cover" :src="i.photoo"/>
                <div class="content factory-image">
                    <h3 class="title-article factory-nom">{{ i.resid}}</h3>
                </div>
            </a>
        </article>
        <a class="read-more" href="/residences/">RESIDENCES</a>
    </div> 
    <div class="colx4">
        <h2>FACTORY</h2>
        <article v-for="i in fact" class="small-article facto-home">
            <a class="article-padding factory-lien" :href="i.facto">
                <img class="cover" :src="i.photoo"/>
                <div class="content factory-image">
                    <h3 class="title-article factory-nom">{{ i.facto}}</h3>
                </div>
            </a>
        </article>
        <a class="read-more" href="/factory/">FACTORY</a>
    </div> 
    <div class="colx4">
        <h2>FACTORY</h2>
        <article v-for="i in fact" class="small-article facto-home">
            <a class="article-padding factory-lien" :href="i.facto">
                <img class="cover" :src="i.photoo"/>
                <div class="content factory-image">
                    <h3 class="title-article factory-nom">{{ i.facto}}</h3>
                </div>
            </a>
        </article>
        <a class="read-more" href="/factory/">FACTORY</a>
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

