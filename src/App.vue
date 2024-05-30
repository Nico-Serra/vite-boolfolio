<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      'projects': [],
      'url': 'http://127.0.0.1:8000/api/projects',
    }
  },
  methods: {
    callApi(url) {
      axios.get(url).then(response => {
        console.log(response.data.projects);
        this.projects = response.data.projects
      })
    }
  },
  mounted() {
    this.callApi(this.url);
  }
}
</script>

<template>

  <header>
    header
  </header>

  <main>
    <div class="container">
      <div class="row">
        <div class="col" v-for="project in projects.data">
          <h1>{{ project.name }}</h1>
        </div>
      </div>
    </div>
  </main>

  <footer>
    footer
  </footer>

</template>

<style></style>
