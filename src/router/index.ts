import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/details/:id",
      name: "details",
      props: true,
      component: () => import("../views/DetailsView.vue"),
    },
    {
      path: "/list/:mode",
      name: "list",
      props: true,
      component: () => import("../views/ListView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("../views/PageNotFound.vue"),
    },
  ],
});

export default router;
