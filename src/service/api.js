import axios from "axios";
import jwt from "./jwt";

const Api = {
    init() {
        axios.defaults.baseURL = "https://conduit.productionready.io/api";
    },
    setHeader() {
        axios.defaults.headers.common.Authorization = `Token ${jwt.getToken()}`;
    }
};

export default Api;
