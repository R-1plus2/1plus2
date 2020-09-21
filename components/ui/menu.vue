<template>
  <div class="menu">
      <div class="black-line"><div class="close">FERMER</div></div>
      <nav>
          <ul class="nav">
            <li><nuxt-link to="/actualites/" class="menu-link">ACTUALITÉS</nuxt-link></li>
            <li><nuxt-link to="/residences/" class="color-red menu-link">RÉSIDENCES</nuxt-link></li>
            <li><nuxt-link to="/factory/" class="color-blue menu-link">FACTORY</nuxt-link></li>
            <li><nuxt-link to="/hors-les-murs/" class="color-yellow menu-link">HORS LES MURS</nuxt-link></li>
            <li><nuxt-link to="/photographes/" class="menu-link">PHOTOGRAPHES</nuxt-link></li>
            <li><nuxt-link to="/expositions/" class="menu-link">EXPOSITIONS</nuxt-link></li>
            <li><nuxt-link to="/editions/" class="color-red menu-link">ÉDITIONS</nuxt-link></li>
            <li><nuxt-link to="/films/" class="color-red menu-link">FILMS</nuxt-link></li>
            <li><nuxt-link to="/colloques/" class="color-red menu-link">COLLOQUES</nuxt-link></li>  
            <li><nuxt-link to="/studies/" class="menu-link">STUDIES</nuxt-link></li>
            <li><nuxt-link to="/partenaires/" class="menu-link">PARTENAIRES</nuxt-link></li>
            <li><nuxt-link to="/infos/" class="menu-link">À PROPOS</nuxt-link></li>
            <li><nuxt-link to="/contacts/" class="menu-link">CONTACTS</nuxt-link></li>
          </ul>
      </nav>
  </div>
</template>
<script>
  import $ from 'jquery'
  import uiLogo from '~/components/ui/logo.vue'
  export default {
    components: {
      uiLogo
    },
    mounted: () => {

      $( ".menu-select" ).click(function() {
        $( "header" ).addClass( "open" );
      });
      $( ".close, .menu-link, .logo-link" ).click(function() {
        $( "header" ).removeClass( "open" );
      });

    } // Mounted end
  } // Export end
</script>
