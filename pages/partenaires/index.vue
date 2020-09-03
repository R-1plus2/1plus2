<template>
  <main class="page-article-expositions">
    <div class="left-side">
        <div class="diapo">
            <div v-for="i in galeries.images" class="image">
              <img class="selected" :src="i.image" :alt="i.alt">
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
      let page = await import('~/content/partenaires/page/lol.json');
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
      this.titre();
    },
    methods: {
      titre(){
          var modif = '<a href="/partenaires/" >PARTENAIRES</a>';
          $('.page-title').html( modif );
      }
    }
  };
</script>
