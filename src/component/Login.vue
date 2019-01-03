<template>
    <div class="auth-page">
        <div class="container page">
            <div class="row">
                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign in</h1>
                    <p class="text-xs-center">
                        <a href>Need an account?</a>
                    </p>
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

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
        };
    },
    methods: {
        login() {
            const { email, password } = this;
            this.$store
                .dispatch(LOGIN, { email, password })
                .then(() => this.$router.push({ name: "home-page" }))
                .catch();
        }
    }
};
</script>