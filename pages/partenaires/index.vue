<template>
  <main class="page-partenaires">
    <div class="left-side">
        <div class="diapo">
            <h3>PARTENAIRES OFFICIELS</h3>
            <div v-for="i in officiels.images" class="image">
              <a :href="i.link"><img class="selected" :src="i.image" :alt="i.alt"></a>
            </div>
        </div>
        <div class="diapo">
            <h3>PARTENAIRES INSTITUTIONNELS ET PRIVÉS</h3>
            <div v-for="i in institutionnels.images" class="image">
              <a :href="i.link"><img class="selected" :src="i.image" :alt="i.alt"></a>
            </div>
        </div>
        <div class="diapo">
            <h3>PARTENAIRES SCIENTIFIQUES</h3>
            <div v-for="i in scientifiques.images" class="image">
              <a :href="i.link"><img class="selected" :src="i.image" :alt="i.alt"></a>
            </div>
        </div>
        <div class="diapo">
            <h3>LIEUX ASSOCIÉS</h3>
            <div v-for="i in lieuxasso.images" class="image">
              <a :href="i.link"><img class="selected" :src="i.image" :alt="i.alt"></a>
            </div>
        </div>
        <div class="diapo">
            <h3>PROGRAMMES ASSOCIÉS</h3>
            <div v-for="i in prograsso.images" class="image">
              <a :href="i.link"><img class="selected" :src="i.image" :alt="i.alt"></a>
            </div>
        </div>
        <div class="diapo">
            <h3>PROGRAMMES ASSOCIÉS</h3>
            <div v-for="i in prograsso.images" class="image">
              <a :href="i.link"><img class="selected" :src="i.image" :alt="i.alt"></a>
            </div>
        </div>
        <div class="diapo">
            <h3>PARTENAIRES MÉDIAS</h3>
            <div v-for="i in medias.images" class="image">
              <a :href="i.link"><img class="selected" :src="i.image" :alt="i.alt"></a>
            </div>
        </div>
    </div>
    <div class="right-side">
        <h3 class="title-article">{{ title }}</h3>
        <p class="description-article">{{ soustitre }}</p>
        <div class="content">
            <vue-markdown class="main-description">{{ content }}</vue-markdown>
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
