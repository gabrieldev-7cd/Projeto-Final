import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",

    component: () => import("../views/About.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",

    component: () => import("../components/Dashboard.vue"),
  },
  {
    path: "/form",
    name: "Form",

    component: () => import("../components/Form.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  mode: "history",
  hash: false,
  routes,
});

export default router;
