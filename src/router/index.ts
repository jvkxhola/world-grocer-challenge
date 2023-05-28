import { createRouter, createWebHistory } from "vue-router";
import ClientDashboard from "../views/ClientDashboard/ClientDashboard.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: ClientDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
