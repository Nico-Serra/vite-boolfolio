<script>

import AppBanner from '../components/AppBanner.vue'

export default {
    name: 'AppContacts',
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

        <AppBanner titleBanner="Contacts me" textContent="Show all my Projects" routeName="projects"
            textButton="Show all Projects" />

        <div class="sectionInput">
            <form action="">
                <div class="mb-3">
                    <label for="name" class="">Name</label>
                    <input type="text" class="" name="name" id="name" aria-describedby="helpId"
                        placeholder="Mario Rossi" />
                    <small id="helpId" class="form-text text-muted">Write Here your name</small>
                </div>

                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" name="email" id="email" aria-describedby="helpId"
                        placeholder="MarioRossi@gmail.com" />
                    <small id="helpId" class="form-text text-muted">Write here your email</small>
                </div>

                <div class="mb-3">
                    <label for="message" class="form-label">Write your message</label>
                    <textarea class="form-control" name="message" id="message" rows="5"></textarea>
                </div>


                <button type="submit" class="btn_submit">
                    Submit
                </button>



            </form>
        </div>

    </main>
</template>

<style></style>