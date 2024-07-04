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
            ],
            currentPath: ''
        }
    },
    methods: {
        savePath() {
            this.currentPath = this.$route.path;
            console.log(this.currentPath);
        }
    },
    mounted() {
        console.log(this.currentPath);
    }
}

</script>

<template>


    <header>
        <div class="container">
            <nav>
                <div class="logo">
                    <img src="/logo.png" alt="">
                </div>

                <div class="menu">
                    <router-link :to="{ name: item.routeName }" v-for="item in menu">{{ item.text
                        }}</router-link>
                </div>

                <div class="social">
                    <a href="https://github.com/Nico-Serra?tab=repositories"><i
                            class="fa-brands fa-square-github"></i></a>
                    <a href="https://github.com/Nico-Serra?tab=repositories"><i class="fa-brands fa-linkedin"></i></a>


                </div>
            </nav>
        </div>
    </header>

</template>

<style scoped>
header {

    nav {
        height: 7vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: black;


        .logo {
            max-width: 100%;
            width: 100px;
        }

        .menu {


            a {
                text-decoration: none;
                color: black;
                padding: 1rem;
                height: 10vh;

            }
        }

        .router-link-active {
            height: 100%;
            border-bottom: 2px solid black;
        }

        .social {


            a {
                font-size: 2rem;
                text-decoration: none;
                color: black;
                padding: 0 0.5rem;
            }
        }
    }


}
</style>