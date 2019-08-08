<template>
  <div class="accordeon">
      <div class="accordeon__head">
          <div class="accordeon__titre">
              <h4>ARTICLES RÉCENTS</h4>
          </div>
          <div class="accordeon__icon">
              <i class="fas fa-angle-down collapsible__icon"></i>
          </div>
      </div>
      <div class="accordeon__body">
          <div class="accordeon__content">
              <div class="accordeon__info" v-for="post in posts.slice().reverse().slice(0,3)">
                 <nuxt-link class="information" :to="post._path+'/'">{{ post.title }}</nuxt-link>
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
      const context = require.context('~/content/actualites/page/', false, /\.json$/);
      const posts = context.keys().map(key => ({
        ...context(key),
        _path: `/actualites/${key.replace('.json', '').replace('./', '')}`
      }));
      return { posts };
    },
    mounted() {
      document.querySelectorAll('.collapsible').forEach(el => el.addEventListener('click', e => {
        e.currentTarget.classList.toggle('collapsible--open')
      }));
     $('.date').each( function( ) {
         var modif = $(this).html().substr(0, 4);
         $(this).html(modif);
      });
    }
  };
</script>
