import axios from "axios";
import { REGISTER, LOGIN } from "../action-types";
const actions = {
    [REGISTER]({ __dispatch }, payload) {
        return axios.post("users", { user: payload });
    },
    [LOGIN]({ __dispatch }, payload) {
        return axios.post("users/login", { user: payload });
    }
};

export default {
    actions
};
