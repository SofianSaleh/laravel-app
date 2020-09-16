import VueRouter from "vue-router";
import Vue from "vue";

import Home from "./views/Home.vue";
import Error from "./views/Error.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            component: Home,
        },
        {
            path: "*",
            component: Error,
        },
    ],
});

export default router;
