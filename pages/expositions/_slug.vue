<template>
  <main class="page-article-expositions">
    <div class="left-side">
        <div class="diapo">
            <div v-for="i in galeries.images" class="image">
              <img class="selected" :src="i.image" :alt="i.alt">
            </div>
        </div>
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
    <div class="right-side">
        <small class="date">{{ horaires }}</small>
        <h3 class="title-article">{{ title }}</h3>
        <p class="description-article">{{ soustitre }}</p>
        <div class="content">
            <vue-markdown class="main-description">{{ body.description }}</vue-markdown>
            <vue-markdown class="main-content">{{ body.content }}</vue-markdown>
            <p class="read-more">POUR EN SAVOIR PLUS</p>
            <a target="_blank" :href="body.readmore.readlien" class="link">{{ body.readmore.readtexte}}</a>
            <p class="no-margin">LIENS &#62;</p>
            <a target="_blank" v-for="i in body.link" :href="i.linklien" class="more-link">{{ i.linktexte}}</a>
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
      let page = await import('~/content/expositions/page/' + params.slug + '.json');
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
          var modif = '<a href="/expositions/" >EXPOSITIONS</a>';
          $('.page-title').html( modif );
      }
    }
  };
</script>
