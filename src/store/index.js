import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import common from "./modules/common";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        auth,
        common
    }
});
