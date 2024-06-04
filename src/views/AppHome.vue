<script>

import axios from 'axios'
import AppBanner from '../components/AppBanner.vue'
import ProjectCard from '../components/ProjectCard.vue'




export default {
    name: 'AppHome',
    data() {
        return {
            projects: [],
            base_api_url: 'http://127.0.0.1:8000',
            loading: true
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
        AppBanner,
        ProjectCard
    },
    mounted() {
        this.callApi('http://127.0.0.1:8000/api/latest')
    }
}

</script>

<template>
    <main>

        <AppBanner titleBanner="Welcome on my Portfolio" textContent="Show all my Projects" routeName="projects"
            textButton="Show all Projects" />

        <div class="container">

            <div class="works">
                <hr>
                <h2>
                    My last work
                </h2>
                <hr>
            </div>

            <template v-if="!loading">
                <div class="row">
                    <ProjectCard :project="project" :base_api_url="base_api_url" v-for="project in projects" />
                </div>


            </template>


            <template v-else>

                <div class="container">
                    <div class="text-center">
                        Loading...
                    </div>
                </div>

            </template>


        </div>


    </main>
</template>

<style>
.works {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    hr {
        flex-grow: 1;
    }

    h2 {
        padding: 0 .5rem;
        text-transform: uppercase;
        color: white;
    }
}
</style>