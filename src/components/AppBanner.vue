<script>

export default {
    name: 'AppBanner',
    data() {
        return {

        }
    },
    props: {
        titleBanner: String,
        textContent: String,
        routeName: String,
        textButton: String

    },
    mounted() {

    }
}

</script>

<template>
    <div class="banner">
        <div class="container">
            <h1>{{ titleBanner }}</h1>

            <div class="banner_flex">
                <h3>{{ textContent }}</h3>

                <router-link :to="{ name: routeName }">{{ textButton }}</router-link>
            </div>
        </div>
    </div>

</template>

<style></style>