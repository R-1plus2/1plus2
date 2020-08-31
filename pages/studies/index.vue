<template>
  <main class="page-studies">
    <div class="intro">
        <p> 	<em>« Les analphabètes de demain sont ceux qui ne sauront pas lire une image »</em> écrivait Moholy-Nagy en 1920. 
        Fort de cette maxime, la <b>Résidence 1+2</b> développe depuis sa création en 2015 des actions de pratiques artistiques, 
        de médiation et d’éducation à l’image autour de la photographie en milieux scolaires (écoles élémentaires, collèges et lycées) 
        et universitaires. A ce titre, la Résidence 1+2 participe chaque année à plusieurs dispositifs éducatifs (Passeport pour l’art, 
        Parcours laïque et  citoyen (PLC) et met en place parallèlement un cycle de visites commentées de ses expositions, 
        par une équipe de professionnel.les. en médiation, à destination de tous les publics.
</p>
    </div>
    <div class="grid">
         <article v-for="i in galeries.images" class="small-article">
            <div class="article-padding image">
                <img class="cover" :src="i.image">
            </div>
        </article>
        <div id="myModal" class="modal">
            <span class="close-modal cursor">&times;</span>
            <div class="modal-content">
              <div v-for="i in galeries.images" class="mySlides">
                  <img :src="i.image" :alt="i.alt">
              </div>
              <a class="prev">&#10094;</a>
              <a class="next">&#10095;</a>
            </div>
            <div class="caption-container">
                <p id="caption"></p>
            </div>
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
    async asyncData() {
      let page = await import('~/content/studies/page/lol.json');
      return page;
    },
    data() {
      return {
        slideIndex: 1
      }
    },
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
    mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.diapo();
      this.titre();
    },
    methods: {
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
        });
        $('.prev').on( 'click', function() {
            showSlides(slideIndex -= 1);
        });
        $('.next').on( 'click', function() {
            showSlides(slideIndex += 1);
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
          var modif = '<a href="/studies/" >STUDIES</a>';
          $('.page-title').html( modif );
      }
    }
  };
</script>
