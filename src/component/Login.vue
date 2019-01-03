<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign in</h1>
                    <p class="text-xs-center">
                        <a href>Need an account?</a>
                    </p>
                    <ul v-show="error" class="error-messages">
                        <li v-for="(value,key) in error" :key="key">{{key}} {{value[0]}}</li>
                    </ul>
                    <form>
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
                            @click.prevent="login"
                            class="btn btn-lg btn-primary pull-xs-right"
                        >Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { LOGIN } from "../store/action-types";
import { UPDATE_ERROR } from "../store/mutation-types";
import { mapGetters } from "vuex";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        };
    },

    computed: mapGetters(["error"]),

    methods: {
        login() {
            const { email, password } = this;
            this.$store
                .dispatch(LOGIN, { email, password })
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