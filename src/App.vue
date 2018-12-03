<template>
  <div id="app">
  <app-header></app-header>
  <router-view/>
  <app-nav></app-nav>
  </div>
</template>

<script>
import AppHeader from "./components/common/AppHeader"
import AppNav from "./components/common/AppNav.vue"
export default {
  name: 'App',
  components:{
    AppHeader,
    AppNav
  }
}
</script>

<style>

</style>
