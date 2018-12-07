import Vue from "vue";
import Router from "vue-router";
import Home from "../component/Home";
import Register from "../component/Register";
import Login from "../component/Login";

Vue.use(Router);

export default new Router({
    routes: [
        {
            name: "home-page",
            path: "/",
            component: Home
        },
        {
            name: "register",
            path: "/register",
            component: Register
        },
        {
            name: "login",
            path: "/login",
            component: Login
        }
    ]
});
