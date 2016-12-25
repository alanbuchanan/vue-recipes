<template>
  <div id="app">
    <project-heading>Vue Recipes App!</project-heading>
    <router-view></router-view>
  </div>
</template>

<script>
import ProjectHeading from './components/ProjectHeading.vue'

export default {
  name: 'app',
  components: {
    ProjectHeading,
  }
}
</script>

<style>
div {
  font-size: 24px;
  max-width: 460px;
}
</style>
