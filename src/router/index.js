import Vue from "vue";
import Router from "vue-router";
import Home from "../component/Home";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "home-page",
            path: "/",
            component: Home
        }
    ]
});
