<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
import AppBanner from '../components/AppBanner.vue'

export default {
    name: 'AppProjects',
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
        AppBanner
    },
    mounted() {
        this.callApi(this.url);

        console.log(this.projects);
    }
}
</script>

<template>
    <main>
        <AppBanner titleBanner="This is the section where there are all my projects"
            textContent="If you want to know me click ➡" routeName="about" textButton="About Me" />
        <template v-if="!loading">

            <div class="container">
                <h1 class="text-center">All Projects</h1>
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
                <div class="text-center">
                    Loading...
                </div>
            </div>

        </template>


    </main>
</template>

<style></style>