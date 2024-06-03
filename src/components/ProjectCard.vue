<script>
export default {
    name: 'ProjectCard',
    data() {
        return {

        }
    },
    props: {
        project: Object,
        base_api_url: String,
    },
    methods: {
    },
    mounted() {

    }
}
</script>

<template>

    <div class="col">
        <router-link :to="{ name: 'singleProject', params: { slug: project.slug } }">
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
        </router-link>
    </div>
</template>