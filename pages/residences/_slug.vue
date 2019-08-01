<template>
  <main class="page-article-residences">
      <div class="entete">
          <img class="cover" :src="cover"/>
      </div>
      <div class="container">
          <h2>EDITIONS <b class="date">{{ date }}</b></h2>
          <h3 class="title-article">{{ title }}</h3>
          <p class="description-article">{{ soustitre }}</p>
          <div class="edito">
              <p class="edito-title">EDITO</p>
              <vue-markdown class="content-edito">{{ edito }}</vue-markdown>
              <div class="extend">-Lire plus-</div>
          </div>
      </div>
      <div class="articles-content">
          <h3 class="photographe-title">LES PHOTOGRAPHES</h3>
          <a v-for="i in phot" :href="i.photo" class="photographe-lien">
            <div class="photographe-image">
                <img :src="i.photoo"/>
            </div>
            <p class="photographe-nom">{{ i.photo}}</p>
          </a>
      
          <div class="bloc bloc1"><vue-markdown class="center">{{ bloc.bloc1 }}</vue-markdown></div>
          <div class="bloc bloc2"><vue-markdown class="center">{{ bloc.bloc2 }}</vue-markdown></div>
          <div class="bloc bloc3"><vue-markdown class="center">{{ bloc.bloc3 }}</vue-markdown></div>
          <div class="bloc bloc4"><vue-markdown class="center">{{ bloc.bloc4 }}</vue-markdown></div>
          
      </div>
      <div class="parrain">
          <vue-markdown class="parrain-content">{{ parrain.article }}</vue-markdown>
          <div class="parrain-image">
              <img :src="parrain.img"/>
          </div>
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
      let page = await import('~/content/residences/page/' + params.slug + '.json');
      return page;
    },
    data() {
      return {
        slideIndex: 1
      }
    },
    head() {
      return {
        title: '1+2 – Photographie & Sciences | ' +this.title,
        meta: [
          { hid: 'description', name: 'description', content: `${this.seo.descriptionseo}` },
          { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `${this.seo.descriptionseo}` },
          { 'property': 'og:image', 'content': `${this.seo.thumbnail}`, 'vmid': 'og:image' }
        ]
      }
    },
    updated() {},
    beforeMount() {},
    destroyed() {},
    mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.diapo();
      this.titre();
      this.annee();
       $('.extend').on( 'click', function() {
          $(".edito").toggleClass( "open" );
      });
    },
    methods: {
      annee(){
          $('.date').each( function( ) {
             var modif = $(this).html().substr(0, 4);
             $(this).html(modif);
          });
          $('.photographe-lien').each( function( ) {
               var modif = $(this).children('.photographe-nom').html();
               var NewStr = modif.toLowerCase().replace(/\s/g, "-");
               console.log(modif);
               console.log(NewStr);
               $(this).attr("href", "/photographes/"+NewStr );
          });
      },
      diapo() {
        var count=0;
        var slideIndex = 1;
        console.log(slideIndex);
        $('.image').each( function( ) {
            count += 1;
            $(this).find( "img" ).attr('data-slide', count);
        });
        $('.close-modal').on( 'click', function() {
            $("#myModal").css('display','none');
        });
        $('.image').on( 'click', function() {
            $("#myModal").css('display','block');
            slideIndex = $(this).find( "img" ).attr("data-slide");
            showSlides(slideIndex);
            console.log(slideIndex);
        });
        $('.prev').on( 'click', function() {
            showSlides(slideIndex -= 1);
            console.log(slideIndex);
        });
        $('.next').on( 'click', function() {
            showSlides(slideIndex += 1);
            console.log(slideIndex);
        });
        function showSlides(n) {
          var i;
          var slides = document.getElementsByClassName("mySlides");
          var dots = document.getElementsByClassName("selected");
          var captionText = document.getElementById("caption");
          if (n > slides.length) {slideIndex = 1}
          if (n < 1) {slideIndex = slides.length}
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slides[slideIndex-1].style.display = "block";
          captionText.innerHTML = dots[slideIndex-1].alt;
        }
      },
      titre(){
          var modif = '<a href="/residences/" >RESIDENCES</a>';
          $('.page-title').html( modif );
      }

    }
  };
</script>
