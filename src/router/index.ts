import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:locale(en|fr)?',
            children: [
                {
                    path: '',
                    name: 'home',
                    component: () => import('../views/HomeView.vue'),
                },
                {
                    path: 'about',
                    name: 'about',
                    // route level code-splitting
                    // this generates a separate chunk (About.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import('../views/AboutView.vue'),
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: () => import('../views/ContactView.vue'),
                },
                {
                    path: 'projects',
                    name: 'projects',
                    component: () => import('../views/ProjectsView.vue'),
                },
                {
                    path: ':pathMatch(.*)*',
                    name: 'notfound',
                    component: () => import('../views/NotFound.vue'), 
                }
            ]
        }
    ],
})

export default router
