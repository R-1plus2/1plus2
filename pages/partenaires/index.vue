<template>
  <main class="page-partenaires">
    PARTENAIRES
    <slider/>
  </main>
</template>
<script>
  import $ from 'jquery'
  // Ui
  // Widget
  import slider from '~/components/widget/slider.vue'
  export default {
    layout: 'default',
    transition: { name: 'intro', mode: 'out-in' },
    components: { },
    mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
  },
  components: {
    slider
  },
  destroyed() {
  },
  mounted() {
    $("body").removeClass('red-page yellow-page blue-page');
    this.titre();
  },
  destroyed() {
  },
  methods: {
      titre(){
          var modif = 'ACCUEIL';
          $('.page-title').html( modif );
      }
  }
}
</script>

