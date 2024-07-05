<script>

export default {
    name: 'AppAbout',
    data() {
        return {

        }
    },
    components: {
    },
    mounted() {

    }
}
</script>

<template>
    <main>

        <div class="container_sm">
            <div class="about">
                <h1>About</h1>

                <p>
                    Sono Nicola Serra un full-stack web developer e abito in un paesino in provincia di Taranto, Italia.
                    <br><br>
                    Ho appena concluso un corso intensivo di 700 ore con Boolean ma sono da sempre un appassionato di
                    codice. <br><br>
                    Prima di intramprendere questo percorso ero un operaio metalmeccanico. <br><br>
                    La mia voglia di imparare mi permette di crescere professionalmente in maniera
                    costante. <br><br>
                    Quando non scrivo codice, mi piace molto praticare sport come calcio o padel, amo i film e le serie
                    tv di genere fantasy. <br><br>
                    Sono sempre alla ricerca di nuove sfide e opportunità per imparare e crescere. Se stai cercando un
                    web-developer creativo e appassionato, <router-link
                        :to="{ name: 'contacts' }">Contattatemi</router-link>

                </p>
            </div>
        </div>


    </main>
</template>

<style scoped>
.about {
    margin-top: 3rem;
    background-color: whitesmoke;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    border-radius: 1rem;
    text-align: center;
    padding: 3rem;
    color: var(--portfolio-secondary);

    h1 {
        padding: 1rem 0;
    }

    p {
        font-size: 20px;
    }

    a {
        color: var(--portfolio-secondary);
        text-decoration: none;
        font-weight: bold;

        &:hover {
            background-color: var(--portfolio-secondary);
            color: var(--portfolio-primary);
            transition: 300ms ease-in-out;
            padding: 0.25rem;
        }
    }
}
</style>