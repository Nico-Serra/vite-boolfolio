<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      'projects': [],
      'base_api_url': 'http://127.0.0.1:8000/',
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
  mounted() {
    this.callApi(this.url);

    console.log(this.projects);
  }
}
</script>

<template>

  <header>
    header
  </header>

  <main>
    <template v-if="!loading">

      <div class="container">
        <div class="row">
          <div class="col" v-for="project in projects.data">
            <div class="card">
              <template v-if="project.cover_image.startsWith('uploads')">
                <img :src="base_api_url + '/storage/' + project.cover_image" alt="">
              </template>
              <template v-else>
                <img :src="project.cover_image" alt="">
              </template>
              <div class="card_body">
                <h4>{{ project.name }}</h4>
              </div>
            </div>
          </div>
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
