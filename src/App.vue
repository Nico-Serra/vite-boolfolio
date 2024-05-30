<script>
// import HelloWorld from './components/HelloWorld.vue'
import ProjectCard from './components/ProjectCard.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      'projects': [],
      'base_api_url': 'http://127.0.0.1:8000',
      'url': 'http://127.0.0.1:8000/api/projects',
      'loading': true
    }
  },
  methods: {
    callApi(url) {
      axios.get(url).then(response => {
        console.log(response.data.projects);
        this.projects = response.data.projects
        this.loading = false
      })
    }
  },
  components: {
    ProjectCard,
  },
  mounted() {
    this.callApi(this.url);

    console.log(this.projects);
  }
}
</script>

<template>

  <header>
    <div class="container">
      <nav>
        <div class="logo">
          <h1>Portfolio</h1>
        </div>

        <div class="right_menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Info</a>
        </div>
      </nav>
    </div>
  </header>

  <main>
    <template v-if="!loading">

      <div class="container">
        <div class="row">
        
          <ProjectCard :project="project" :base_api_url="base_api_url" v-for="project in projects.data" />

        </div>
      </div>

    </template>

    <template v-else>

      <div class="container">
        <div class="row">
          <div class="col">
            Loading...
          </div>
        </div>
      </div>

    </template>
  </main>

  <footer>
    footer
  </footer>

</template>
