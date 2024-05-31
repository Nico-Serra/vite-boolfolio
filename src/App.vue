<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProjectCard from './components/ProjectCard.vue'
import AppHeader from './components/AppHeader.vue'
import axios from 'axios'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {

  },
  components: {
    ProjectCard,
    AppHeader,
    AppFooter,
  },
  mounted() {

  }
}
</script>

<template>

  <AppHeader />

 

  <router-view />

  <AppFooter />

</template>
