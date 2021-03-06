import Vue from "vue";
import VueRouter from "vue-router";
import SmartMeter from "../views/SmartMeter.vue";
import PerHour from "../views/PerHour.vue";
import PerDay from "../views/PerDay.vue";
import PerMonth from "../views/PerMonth.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "smart-meter",
    component: SmartMeter
    // component: () =>
    //   import(/* webpackChunkName: "smart-meter" */ "../views/SmartMeter.vue")
  },
  {
    path: "/per-hour",
    name: "per-hour",
    component: PerHour
  },
  {
    path: "/per-day",
    name: "per-day",
    component: PerDay
  },
  {
    path: "/per-month",
    name: "per-month",
    component: PerMonth
  },
  {
    path: "/settings",
    name: ""settings",
    component: Settings
  }
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
});

export default router;
