import Vue from "vue";
import Router from "vue-router";

import BlueCircle from "../components/BlueCircle.vue";
import RedRectagle from "../components/RedRectagle.vue";
import GreenTriangle from "../components/GreenTriangle.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/circle", component: BlueCircle },
    { path: "/rect", component: RedRectagle },
    { path: "/triangle", component: GreenTriangle }
  ]
});
