const ID_TOKEN_KEY = "id_token";

export default {
    saveToken(token) {
        window.localStorage.setItem(ID_TOKEN_KEY, token);
    }
};
