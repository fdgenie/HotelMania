import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () =>
      import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
  },
  {
    path: "/statistics",
    name: "StatisticsPage",
    component: () =>
      import(/* webpackChunkName: "statistics" */ "@/views/StatisticsPage.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
