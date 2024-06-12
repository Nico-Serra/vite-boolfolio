<script>

import axios from 'axios'
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

            <div class="d_flex">
                <div class="text">
                    <h1>Ciao questo è il mio portfolio qui puoi visionare tutti i miei progetti e scoprire chi sono</h1>
                </div>
                <div class="img_bg">
                    <img src="/logoPortfolio.png" alt="">
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
}

.d_flex {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .text {
        width: 50%;
        text-align: center;
        padding: 1rem;

        h1 {
            padding: 0 .5rem;
            text-transform: uppercase;
            color: black
        }
    }


    .img_bg {
        width: 50%;
        opacity: 0.5;
        text-align: center;
        object-fit: cover;
    }

}
</style>