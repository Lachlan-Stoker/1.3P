import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/concepts',
      name: 'concepts',
      component: () => import('../views/ConceptsView.vue'),
      children: [
        {
          path: "shoppinglist",
          component: () => import("../views/ShopListView.vue"),
        },
        {
          path: "crud",
          component: () => import("../views/CRUDView.vue"),
        },
      ],
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactMe.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import("../components/NotFound.vue")
    },
  ]
})

export default router
