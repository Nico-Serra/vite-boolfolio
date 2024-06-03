import { createWebHistory, createRouter } from 'vue-router'
import AppProjects from './views/AppProjects.vue';
import AppHome from './views/AppHome.vue';
import AppAbout from './views/AppAbout.vue';
import AppContacts from './views/AppContacts.vue';
import SingleProject from './views/SingleProject.vue';




const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'home',
        component: AppHome,
    },
    {
        path: '/projects',
        name: 'projects',
        component: AppProjects,
    },
    {
        path: '/about',
        name: 'about',
        component: AppAbout,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: AppContacts,
    },
    {
        path: '/projects/:slug',
        name: 'singleProject',
        component: SingleProject
    }
    ]
})

export { router };