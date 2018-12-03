import axios from "axios";
import { REGISTER } from "../action-types";
const actions = {
    [REGISTER]({ __dispatch }, payload) {
        return axios.post("users", { user: payload });
    }
};

export default {
    actions
};
