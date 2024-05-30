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
    },
    backPage(url) {
      this.callApi(url);
    },
    nextPage(url) {
      this.callApi(url);
    },
    goTo(page) {
      let url = this.url + '?page=' + page

      this.callApi(url)
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

        <div class="paginations">
          <button @click="backPage(projects.prev_page_url)" v-show="projects.prev_page_url != null"><i
              class="fa fa-arrow-left" aria-hidden="true"></i></button>

          <button v-for="page in projects.last_page" @click="goTo(page)">
            {{ page }}
          </button>

          <button @click="nextPage(projects.next_page_url)" v-show="projects.next_page_url != null"><i
              class="fa fa-arrow-right" aria-hidden="true"></i></button>
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
    <div class="container">
      <div class="row">
        <div class="col">
          <h4>About</h4>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Eaque, obcaecati.</li>
            <li>Sunt, rerum!</li>
            <li>Harum, magni?</li>
          </ul>
        </div>
        <div class="col">
          <h4>About</h4>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Dignissimos, magni.</li>
            <li>Ad, cumque.</li>
            <li>Iste, voluptatum?</li>
          </ul>
        </div>
        <div class="col">
          <h4>About</h4>
          <ul>
            <li>Lorem, ipsum.</li>
            <li>Fugit, hic?</li>
            <li>Error, est.</li>
            <li>Sapiente, quam?</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

</template>
