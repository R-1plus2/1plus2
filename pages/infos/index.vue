<template>
  <main class="page-contacts">
    <div class="left-side">
            <h3 class="title-article">{{ title }}</h3>

        <h3 class="title-article">{{ soustitre }}</h3>
        <div class="content">
            <vue-markdown class="main-description">{{ content }}</vue-markdown>
        </div>
    </div>
    <div class="right-side">
        <div class="content">
            <vue-markdown class="main-description">{{ contact }}</vue-markdown>
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
      let page = await import('~/content/infos/page/informations.json');
      return page;
    },
    data() {
      return {
        slideIndex: 1
      }
    },
    head() {
      return {
        title: 'À PROPOS | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `INFOS | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    mounted() {
      $("body").removeClass('blue-page yellow-page red-page');
      this.titre();
    },
    methods: {
      titre(){
          var modif = 'INFOS';
          $('.page-title').html( modif );
      }
    }
  };
</script>
