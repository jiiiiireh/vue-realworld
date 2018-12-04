import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Api from "./service/api";

Vue.config.productionTip = false;
Api.init();

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>"
});
