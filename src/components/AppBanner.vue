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

<style>
.banner {
    color: whitesmoke;
    padding: 2rem 0;

    h1 {
        font-size: 50px;
    }

    .banner_flex {
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            text-decoration: none;
            color: white;
            background-color: transparent;
            border-radius: 0.25rem;
            padding: 0.75rem;

            &:hover {
                cursor: pointer;
                background-color: black;
            }
        }
    }
}
</style>