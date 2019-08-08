<template>
  <div class="accordeon">
      <div class="accordeon__head">
          <div class="accordeon__titre">
              <h4>sélectionner une catégorie</h4>
          </div>
          <div class="accordeon__icon">
              <i class="fas fa-angle-down collapsible__icon"></i>
          </div>
      </div>
      <div class="accordeon__body">
          <div class="accordeon__content">
              <div class="accordeon__info" v-for="post in posts">
                 <nuxt-link class="horaires" :to="post._path+'/'">{{ post.title }}</nuxt-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data() {
      const context = require.context('~/content/categorie/page/', false, /\.json$/);
      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/categories/${key.replace('.json', '').replace('./', '')}`
      }));
      return { posts };
    },
    mounted() {
      document.querySelectorAll('.collapsible').forEach(el => el.addEventListener('click', e => {
        e.currentTarget.classList.toggle('collapsible--open')
      }));
    }
  };
</script>
