import axios from "axios";

const Api = {
    init() {
        axios.defaults.baseURL = "https://conduit.productionready.io/api";
    }
};

export default Api;
