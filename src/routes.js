import { createRouter, createWebHistory } from 'vue-router'

import User from './components/User.vue';
import Counter from './components/Counter.vue';

const routes = [
    {
        path: '/', 
        name: 'Users',
        component: User
    },
    {
        path: '/counter', 
        name: 'Counter',
        component: Counter
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;
