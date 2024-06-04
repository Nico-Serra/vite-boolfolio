<script>

export default {
    name: 'AppHeader',
    data() {
        return {
            menu: [
                {
                    text: 'Home',
                    routeName: 'home'
                },
                {
                    text: 'Projects',
                    routeName: 'projects'
                },
                {
                    text: 'About',
                    routeName: 'about'
                },
                {
                    text: 'Contacts',
                    routeName: 'contacts'
                },
            ]
        }
    },
    mounted() {

    }
}

</script>

<template>


    <header>
        <div class="container">
            <nav>
                <div class="logo">
                    <h1>Portfolio</h1>
                </div>

                <div class="right_menu">
                    <router-link :to="{ name: item.routeName }" v-for="item in menu">{{ item.text }}</router-link>
                </div>
            </nav>
        </div>
    </header>

</template>

<style>
header {

    nav {
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            font-size: large;
        }

        .right_menu {


            a {
                text-decoration: none;
                color: black;
                padding: 0 1rem;
            }
        }
    }
}
</style>