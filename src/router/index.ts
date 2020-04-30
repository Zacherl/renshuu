import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Topic from "@/views/Exercise.vue";
import Login from "@/components/Login.vue";
import Overview from "@/views/Overview.vue";
import { store } from "@/store";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Overview
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/topic/:topic/:exercise",
    component: Topic
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== "/login" && !store.state.student) {
    next("/login");
    return;
  }
  next();
});

export default router;
