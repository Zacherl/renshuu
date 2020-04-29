import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Topic from "@/views/Exercise.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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

export default router;
