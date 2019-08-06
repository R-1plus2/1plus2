<template>
  <div class="sidebar">
      <div class="accordeon">
          <div class="accordeon__head">
              <div class="accordeon__titre">
                  <h4>CATÉGORIES {{cate.title}}</h4>
              </div>
              <div class="accordeon__icon">
                  <i class="fas fa-angle-down collapsible__icon"></i>
              </div>
          </div>
          <div class="accordeon__body">
              <div class="accordeon__content">
                  <div class="accordeon__info" >
                      <div class="horaires" v-for="c in cate.catt">{{ c.texte }}</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    const cate = await import('~/content/categorie/page/2019.json');
    return {
      cate
    };
  },
  mounted: () => { 
  },
  methods: {
  }
}
</script>
