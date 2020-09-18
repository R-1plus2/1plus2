<template>
  <main class="page-partenaires">
    <div class="left-side">
        <div class="diapo">
            <h3>LABELS</h3>
            <div v-for="i in label.images" class="image">
              <a :href="i.link"><img class="selected" :src="i.image" :alt="i.alt"></a>
            </div>
        </div>
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
      let page = await import('~/content/partenaires/page/partenaires.json');
      return page;
    },
    data() {
      return {
        slideIndex: 1
      }
    },
    head() {
      return {
        title: 'PARTENAIRES | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `PARTENAIRES | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    mounted() {
      $("body").removeClass('blue-page yellow-page');
      $("body").addClass('red-page');
      this.titre();
    },
    methods: {
      titre(){
          var modif = 'PARTENAIRES';
          $('.page-title').html( modif );
      }
    }
  };
</script>
