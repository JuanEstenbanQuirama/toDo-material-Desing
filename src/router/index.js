import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
// import NewToDoView from "../views/NewToDoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/new",
      name: "new",
      component: () => import('../views/NewToDoView.vue')
    },
  ],
});

export default router;
