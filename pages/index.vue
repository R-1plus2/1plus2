<template>
  <main class="page-index">
    <div class="colx4">
        <h3>FACTORY</h3>
        <article v-for="i in fact" class="small-article facto-home">
            <a class="article-padding factory-lien" :href="i.facto">
                <img class="cover" :src="i.photoo"/>
                <div class="content factory-image">
                    <h3 class="title-article factory-nom">{{ i.facto}}</h3>
                </div>
            </a>
        </article>
        <a class="read-more" href="/factory/">VOIR LES FACTORY</a>
    </div>
    <div class="colx4">
        <h2>RESIDENCE</h2>
        <article v-for="i in resi" class="small-article residence-home">
            <a class="article-padding residence-lien" :href="i.resid">
                <img class="cover" :src="i.photoo"/>
                <div class="content residence-image">
                    <h3 class="title-article residence-nom">{{ i.resid}}</h3>
                </div>
            </a>
        </article>
        <a class="read-more" href="/residences/">VOIR LES RESIDENCES</a>
    </div> 
    <div class="colx4">
        <h2>FILM</h2>
        <article v-for="i in film" class="small-article film-home">
            <a class="article-padding film-lien" :href="i.films">
                <img class="cover" :src="i.photoo"/>
                <div class="content film-image">
                    <h3 class="title-article film-nom">{{ i.films}}</h3>
                </div>
            </a>
        </article>
        <a class="read-more" href="/factory/">VOIR LES FILMS</a>
    </div> 
    <div class="colx4">
        <h2>EXPOSITIONS</h2>
        <article v-for="i in expo" class="small-article exposition-home">
            <a class="article-padding exposition-lien" :href="i.expos">
                <img class="cover" :src="i.photoo"/>
                <div class="content exposition-image">
                    <h3 class="title-article exposition-nom">{{ i.expos}}</h3>
                </div>
            </a>
        </article>
        <a class="read-more" href="/factory/">VOIR LES EXPOSITIONS</a>
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
                var modif = '<a href="/" >ACCUEIL</a>';
                $('.page-title').html( modif );
            }
 
            $('.factory-lien').each( function( ) {
                 var modif = $(this).find('.factory-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 console.log(modif);
                 console.log(NewStr);
                 $(this).attr("href", "/factory/"+NewStr );
            });
            $('.exposition-lien').each( function( ) {
                 var modif = $(this).find('.exposition-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 console.log(modif);
                 console.log(NewStr);
                 $(this).attr("href", "/expositions/"+NewStr );
            });
            $('.film-lien').each( function( ) {
                 var modif = $(this).find('.film-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 console.log(modif);
                 console.log(NewStr);
                 $(this).attr("href", "/films/"+NewStr );
            });
            $('.residence-lien').each( function( ) {
                 var modif = $(this).find('.residence-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 console.log(modif);
                 console.log(NewStr);
                 $(this).attr("href", "/residences/"+NewStr );
            });
        
    }
  }
</script>

