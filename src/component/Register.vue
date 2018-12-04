<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign up</h1>
                    <p class="text-xs-center">
                        <a href>Have an account?</a>
                    </p>
                    <ul v-show="error" class="error-messages">
                        <li v-for="(value,key) in error" :key="key">{{key}} {{value[0]}}</li>
                    </ul>
                    <form>
                        <fieldset class="form-group">
                            <input
                                v-model="username"
                                class="form-control form-control-lg"
                                type="text"
                                placeholder="Your Name"
                            >
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                v-model="email"
                                class="form-control form-control-lg"
                                type="text"
                                placeholder="Email"
                            >
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                                v-model="password"
                                class="form-control form-control-lg"
                                type="password"
                                placeholder="Password"
                            >
                        </fieldset>
                        <button
                            @click.prevent="register"
                            class="btn btn-lg btn-primary pull-xs-right"
                        >Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { REGISTER } from "../store/action-types";
import { UPDATE_ERROR } from "../store/mutation-types";
import { mapGetters } from "vuex";

export default {
    name: "Register",
    data() {
        return {
            username: "",
            email: "",
            password: ""
        };
    },

    computed: mapGetters(["error"]),

    methods: {
        register() {
            const { username, email, password } = this;
            this.$store
                .dispatch(REGISTER, { username, email, password })
                .then(() => this.$router.push({ name: "home-page" }))
                .catch(errors => {
                    this.$store.commit(
                        UPDATE_ERROR,
                        errors.response.data.errors
                    );
                });
        }
    }
};
</script>
