<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="Vue logo" src="./assets/logo.png" id="logo">
      What do you Meme
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 50px;}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
<<<<<<< HEAD
import '@/services/facebook'
=======
import '@/services/facebook';
>>>>>>> 4f727c37e4eea66f924e1fd2d530e4c7b5f8b455

export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>
