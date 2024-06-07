<script>

import axios from 'axios'
import AppBanner from '../components/AppBanner.vue'

export default {
    name: 'AppContacts',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            base_api_url: 'http://127.0.0.1:8000',
        }
    },
    methods: {
        sendMessage() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message,
            }

            let url = `${this.base_api_url}/api/contacts`

            axios.post(url, data).then(response => {
                console.log(response);
            }).catch(err => { console.error(err); })


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

        <AppBanner titleBanner="Contacts me" textContent="Show all my Projects" routeName="projects"
            textButton="Show all Projects" />

        <div class="sectionInput">
            <form @submit.prevent="sendMessage()">
                <div class="mb-3">
                    <label for="name" class="">Name</label>
                    <input type="text" class="" name="name" id="name" aria-describedby="helpId"
                        placeholder="Mario Rossi" v-model="name" />
                    <small id="helpId" class="form-text text-muted">Write Here your name</small>
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId"
                        placeholder="MarioRossi@gmail.com" v-model="email" />
                    <small id="helpId" class="form-text text-muted">Write here your email</small>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Write your message</label>
                    <textarea class="form-control" name="message" id="message" rows="5" v-model="message"></textarea>
                </div>


                <button type="submit" class="btn_submit">
                    Submit
                </button>



            </form>
        </div>

    </main>
</template>

<style>
.sectionInput {
    width: 60%;
    max-width: 900px;
    margin: auto;
    color: whitesmoke;
    margin-bottom: 2rem;

    label {
        display: block;
        text-align: center;
        font-size: small;
    }

    input {
        width: 100%;
        padding: 0.5rem;
        border: 0.5px solid whitesmoke;
        border-radius: .25rem;
        text-align: center;
        font-family: "Orbitron", sans-serif;
        outline: none;
        margin-top: 0.5rem;

    }

    textarea {
        width: 100%;
        margin-top: 0.5rem;
    }

    .btn_submit {
        margin: 1rem 0;
        width: 100%;
        background-color: whitesmoke;
        padding: 0.5rem;
        border-radius: 0.25rem;
        border: 0.5px solid whitesmoke;
        font-family: "Orbitron", sans-serif;
    }
}
</style>