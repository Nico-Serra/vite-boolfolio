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

                        <div class="date" v-if="project.project_date">
                            <strong>Date:</strong>

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

<style>
img {
    max-width: 100%;
}

.badges {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-top: 1rem;

    >span {
        background-color: gray;
        padding: .0.4rem;
        border-radius: 0.25rem;
    }
}

.projectInfo {
    display: flex;
    align-items: center;

    .img_project {
        width: 50%;
    }

    .meta_date {
        width: 50%;
    }
}
</style>