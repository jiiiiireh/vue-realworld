import { UPDATE_ERROR } from "../mutation-types";

const state = {
    error: null
};

const getters = {
    error: state => state.error
};

const mutations = {
    [UPDATE_ERROR](state, error) {
        state.error = error;
    }
};

export default {
    state,
    getters,
    mutations
};
