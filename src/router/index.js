import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },];


const router = new VueRouter({
    scrollBehavior() {
        return {x: 0, y: 0};
    },
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;