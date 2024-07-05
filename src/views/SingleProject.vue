<script>
import axios from 'axios'
import AppBanner from '../components/AppBanner.vue'

export default {
    name: 'SingleProject',
    data() {
        return {
            project: '',
            url: 'http://127.0.0.1:8000/api/projects/' + this.$route.params.slug,
            base_api_url: 'http://127.0.0.1:8000',
            loading: true
        }
    },
    components: {
        AppBanner
    },
    mounted() {
        axios.get(this.url).then(response => {
            console.log(response);
            if (response.data.success) {
                this.project = response.data.response
            } else {
                this.$router.push({ name: 'notFound' })
            }
        })

        //console.log(this.route.params);
    },
}

</script>

<template>
    <main>

        <template v-if="project">
            <div class="container text-center">
                <h1 class="py_3">{{ project.name }}</h1>

                <div class="projectInfo">
                    <div class="img_project">
                        <template v-if="project.cover_image.startsWith('uploads')">
                            <img :src="base_api_url + '/storage/' + project.cover_image" alt="">
                        </template>
                        <template v-else>
                            <img :src="project.cover_image" alt="">
                        </template>
                        <router-link :to="{ name: 'projects' }">
                            <i class="fa-solid fa-circle-arrow-left"></i>
                        </router-link>
                    </div>


                    <div class="meta_date">
                        <div class="badges" v-if="project.technologies">
                            <strong>Technologies:</strong>
                            <span v-for="tech in project.technologies" class="text-center">{{ tech.name }}</span>
                        </div>

                        <div class="badges" v-if="project.type_id">
                            <strong>Type:</strong>
                            <span>{{ project.type.name }}</span>
                        </div>

                        <div class="date py_3" v-if="project.project_date">
                            <strong>Date: </strong>

                            <span> {{ project.project_date }}</span>
                        </div>
                    </div>
                </div>


            </div>

        </template>


        <div class="container" v-else>
            <h4 class="text-center">Loading ...</h4>
        </div>







    </main>
</template>

<style scoped>
img {
    max-width: 100%;
    border-radius: 20px;
}

h1 {
    color: var(--portfolio-secondary);
}

a {
    position: absolute;
    color: var(--portfolio-secondary);
    text-decoration: none;
    left: -25px;
    top: 100px;
    background-color: var(--portfolio-primary);
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;

    &:hover {
        background-color: var(--portfolio-secondary);
        color: var(--portfolio-primary);
        transition: 300ms ease-in-out;
    }
}

.badges {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 1rem;

    >span {
        background-color: var(--portfolio-primary);
        padding: .0.4rem;
        border-radius: 0.25rem;
        color: var(--portfolio-secondary);
    }
}

.projectInfo {
    width: 80%;
    margin: auto;

    .img_project {
        max-width: 100%;
        position: relative;

    }

    .meta_date {
        color: white;
    }
}
</style>