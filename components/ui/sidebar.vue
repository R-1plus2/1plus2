<template>
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
                  <div class="accordeon__info">
                     <div class="horaires" v-for="post in posts">{{ post.title }}</div>
                  </div>
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
        _path: `/categorie/${key.replace('.json', '').replace('./', '')}`
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
