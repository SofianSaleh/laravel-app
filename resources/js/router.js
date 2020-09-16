import VueRouter from "vue-router";
import Vue from "vue";

import Home from "./views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/home",
            component: Home,
        },
    ],
});

export default router;
