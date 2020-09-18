<template>
  <main class="page-index">
    <div class="intro"><p>{{ edito }}</p></div>
    <div class="colx4">
        <article v-for="i in resi" class="small-article residence-home">
            <a class="article-padding residence-lien color-red" :href="i.resid">
                <img class="cover" :src="i.photoo"/>
                <div class="content residence-image">
                    <h3 class="title-article residence-nom">{{ i.resid}}</h3>
                </div>
            </a>
        </article>
        <h3 class="color-red">RESIDENCE</h3>
        <a class="read-more" href="/residences/">VOIR LES RESIDENCES</a>
    </div> 
    <div class="colx4">
        <article v-for="i in fact" class="small-article facto-home">
            <a class="article-padding factory-lien color-blue" :href="i.facto">
                <img class="cover" :src="i.photoo"/>
                <div class="content factory-image">
                    <h3 class="title-article factory-nom">{{ i.facto}}</h3>
                </div>
            </a>
        </article>
        <h3 class="color-blue">FACTORY</h3>
        <a class="read-more" href="/factory/">VOIR LES FACTORY</a>
    </div>   
    <div class="colx4">
        <article v-for="i in hors" class="small-article horslesmurs-home">
            <a class="article-padding horslesmurs-lien color-yellow" :href="i.horsl">
                <img class="cover" :src="i.photoo"/>
                <div class="content horslesmurs-image">
                    <h3 class="title-article horslesmurs-nom">{{ i.horsl}}</h3>
                </div>
            </a>
        </article>
        <h3 class="color-yellow">HORS LES MURS</h3>
        <a class="read-more" href="/hors-les-murs/">VOIR LES HORS LES MURS</a>
    </div>
    <div class="colx4">
        <article v-for="i in expo" class="small-article exposition-home">
            <a class="article-padding exposition-lien color-gray" :href="i.expos">
                <img class="cover" :src="i.photoo"/>
                <div class="content exposition-image">
                    <h3 class="title-article exposition-nom">{{ i.expos}}</h3>
                </div>
            </a>
        </article>
        <h3 class="color-gray">EXPOSITION</h3>
        <a class="read-more" href="/expositions/">VOIR LES EXPOSITIONS</a>
    </div> 
    
    <div class="colx4 x2">
        <article v-for="i in edit" class="small-article edition-home">
            <a class="article-padding edition-lien color-red" :href="i.editi">
                <img class="cover" :src="i.photoo"/>
                <div class="content edition-image">
                    <h3 class="title-article edition-nom">{{ i.editi}}</h3>
                </div>
            </a>
        </article>
        <h3 class="color-red">EDITION</h3>
        <a class="read-more" href="/editions/">VOIR LES EDITIONS</a>
    </div>
    <div class="colx4 x2">
        <article v-for="i in film" class="small-article film-home">
            <a class="article-padding film-lien color-red" :href="i.films">
                <img class="cover" :src="i.photoo"/>
                <div class="content film-image">
                    <h3 class="title-article film-nom">{{ i.films}}</h3>
                </div>
            </a>
        </article>
        <h3 class="color-red">FILM</h3>
        <a class="read-more" href="/films/">VOIR LES FILMS</a>
    </div> 
    <div class="colx4 x2">
        <article v-for="i in coll" class="small-article colloque-home">
            <a class="article-padding colloque-lien color-red" :href="i.collo">
                <img class="cover" :src="i.photoo"/>
                <div class="content colloque-image">
                    <h3 class="title-article colloque-nom">{{ i.collo}}</h3>
                </div>
            </a>
        </article>
        <h3 class="color-red">COLLOQUE</h3>
        <a class="read-more" href="/colloques/">VOIR LES COLLOQUES</a>
    </div>  
    <div class="colx4 x2">
        <article v-for="i in stud" class="small-article studie-home">
            <a class="article-padding studie-lien color-gray" :href="i.studi">
                <img class="cover" :src="i.photoo"/>
                <div class="content studie-image">
                    <h3 class="title-article studie-nom">{{ i.studi}}</h3>
                </div>
            </a>
        </article>
        <h3 class="color-gray">STUDIES</h3>
        <a class="read-more" href="/studies/">VOIR LES STUDIES</a>
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
      this.lien();
    },
    destroyed() {
    },
    methods: {
        titre(){
            var modif = 'ACCUEIL';
            $('.page-title').html( modif );
        },
        lien(){
            console.log("WEBSITE BY PIKS-L.FR");
            $('.factory-lien').each( function( ) {
                 var modif = $(this).find('.factory-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");                 
                 $(this).attr("href", "/factory/"+NewStr );
            });
            $('.exposition-lien').each( function( ) {
                 var modif = $(this).find('.exposition-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 $(this).attr("href", "/expositions/"+NewStr );
            });
            $('.film-lien').each( function( ) {
                 var modif = $(this).find('.film-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 $(this).attr("href", "/films/"+NewStr );
            });
            $('.residence-lien').each( function( ) {
                 var modif = $(this).find('.residence-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 $(this).attr("href", "/residences/"+NewStr );
            });
            $('.edition-lien').each( function( ) {
                 var modif = $(this).find('.edition-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 $(this).attr("href", "/editions/"+NewStr );
            });
            $('.horslesmurs-lien').each( function( ) {
                 var modif = $(this).find('.horslesmurs-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 $(this).attr("href", "/hors-les-murs/"+NewStr );
            });
            $('.colloque-lien').each( function( ) {
                 var modif = $(this).find('.colloque-nom').html();
                 var NewStr = modif.toLowerCase().replace(/\s/g, "-");
                 $(this).attr("href", "/colloques/"+NewStr );
            });
        }
    }
  }
</script>

