<script>

import AppBanner from '../components/AppBanner.vue'

export default {
    name: 'AppHome',
    data() {
        return {

        }
    },
    components: {
        AppBanner
    },
    mounted() {

    }
}

</script>

<template>
    <main>

        <AppBanner titleBanner="Welcome on my Portfolio" textContent="Show all my Projects" routeName="projects"
            textButton="Show all Projects" />


    </main>
</template>

<style></style>