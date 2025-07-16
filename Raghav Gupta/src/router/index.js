import Vue from "vue";
import VueRouter from "vue-router";

import Employee from "../components/Employee";
import Manager from "../components/Manager";

Vue.use(VueRouter);

const routes = [
  { path: "/employee", name: "Employee", component: Employee },
  { path: "/", name: "Manager", component: Manager },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
