<template>
  <div class="sidebar">
      <div class="accordeon">
          <div class="accordeon__head">
              <div class="accordeon__titre">
                  <h4>CATÉGORIES {{categorie.title}}</h4>
              </div>
              <div class="accordeon__icon">
                  <i class="fas fa-angle-down collapsible__icon"></i>
              </div>
          </div>
          <div class="accordeon__body">
              <div class="accordeon__content">
                  <div class="accordeon__info" >
                      <div class="horaires" v-for="c in categorie">{{ c.cattt.texte }}</div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
import categorie from '~/content/categorie/page/2019.json'
export default {
  asyncData ({ params }) {
    return { categorie }
  }
}
</script>
