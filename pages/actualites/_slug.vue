<template>
  <main class="page-article-actu">
      <div class="article-slug">
          <small class="date">{{ date }}</small>
          <h3 class="title-article">{{ title }}</h3>
          <div class="cover">
              <img :src="thumbnail" class="thumbnail">   
          </div>
          <p class="description-article">{{ soustitre }}</p>
          <div class="content">
              <vue-markdown>{{ description }}</vue-markdown>
          </div>
      </div>
      <div class="sidebar">
          <div class="accordeon">
              <div class="accordeon__head">
                  <div class="accordeon__titre">
                      <h4>CATÉGORIES</h4>
                  </div>
                  <div class="accordeon__icon">
                      <i class="fas fa-angle-down collapsible__icon"></i>
                  </div>
              </div>
              <div class="accordeon__body">
                  <div class="accordeon__content">
                      <div class="accordeon__info" >
                          <div class="horaires">{{ categorie.title }}</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </main>
</template>
<script>
  import $ from 'jquery'
  import VueMarkdown from 'vue-markdown'
  import VueLazyload from 'vue-lazyload'
  export default {
    layout: 'default',
    transition: { name: 'intro', mode: 'out-in' },
    components: { VueMarkdown, VueLazyload },
    async asyncData({ params }) {
      let page = await import('~/content/actualites/page/' + params.slug + '.json');
      return page;
    },
    data() {
      const context = require.context('~/content/categorie/page/', false, /\.json$/);
      const categorie = context.keys().map(key => ({
        ...context(key),
        _path: `/categorie/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        categorie
      };
    },
    head() {
      return {
        title: '1+2 – Photographie & Sciences | ' +this.title,
        meta: [
          { hid: 'description', name: 'description', content: `${this.descriptionseo}` },
          { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `${this.descriptionseo}` },
          { 'property': 'og:image', 'content': `${this.thumbnail}`, 'vmid': 'og:image' }
        ]
      }
    },
    mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
      document.querySelectorAll('.accordeon').forEach(el => el.addEventListener('click', e => {
        e.currentTarget.classList.toggle('accordeon--open');
      }));

    },
    methods: {
      titre(){
          var modif = '<a href="/actualites/" >ACTUALITÉS</a>';
          $('.page-title').html( modif );           
      }
    }
  };
</script>
