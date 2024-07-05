<script>

import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'




export default {
    name: 'AppHome',
    data() {
        return {
            projects: [],
            base_api_url: 'http://127.0.0.1:8000',
            loading: true,

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
        ProjectCard
    },
    mounted() {
        // this.callApi('http://127.0.0.1:8000/api/latest')
    }
}

</script>

<template>
    <main>

        <div class="container">
            <div class="home">
                <img src="/logoPortfolio.png" alt="">

                <div class="actions">
                    <router-link :to="{ name: 'projects' }">Projects</router-link>
                    <router-link :to="{ name: 'about' }">About</router-link>
                    <router-link :to="{ name: 'contacts' }">Contacts</router-link>
                </div>
            </div>
            <!-- <div class="works">
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

            </template> -->



        </div>


    </main>
</template>

<style scoped>
.works {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;

    hr {
        flex-grow: 1;
    }

}

.container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        max-width: 100%;
    }

    .actions {
        display: flex;
        justify-content: space-between;

        a {
            
            background-color: var(--portfolio-secondary);
                color: var(--portfolio-primary);
            width: 100px;
            aspect-ratio: 1;
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            
            text-decoration: none;
            text-transform: uppercase;
            font-weight: 700;


            &:hover {
                transform: scale(1.25);
                transition: 300ms ease-in-out;
                background-color: var(--portfolio-primary);
                color: var(--portfolio-secondary);
            }
        }
    }
}
</style>