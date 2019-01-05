import axios from "axios";
import { REGISTER, LOGIN, SAVE_USER, CHECK_USER } from "../action-types";
import { UPDATE_CURRENT_AUTH } from "../mutation-types";
import jwt from "../../service/jwt";
import api from "../../service/api";
const state = {
    user: {},
    isAuthenticated: false
};
const getters = {
    currentUser: state => state.user,
    isAuthenticated: state => state.isAuthenticated
};
const actions = {
    [REGISTER]({ __dispatch }, payload) {
        return axios.post("users", { user: payload });
    },
    [LOGIN]({ dispatch }, payload) {
        return axios
            .post("users/login", { user: payload })
            .then(({ data }) => dispatch(SAVE_USER, data.user));
    },
    [SAVE_USER]({ commit }, user) {
        jwt.saveToken(user.token);
        commit(UPDATE_CURRENT_AUTH, user);
    },
    [CHECK_USER]({ dispatch }) {
        if (jwt.getToken()) {
            api.setHeader();
            axios
                .get("user")
                .then(({ data }) => dispatch(SAVE_USER, data.user));
        }
    }
};
const mutations = {
    [UPDATE_CURRENT_AUTH](state, user) {
        state.user = user;
        state.isAuthenticated = true;
    }
};
export default {
    state,
    getters,
    actions,
    mutations
};
