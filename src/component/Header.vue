<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">conduit</a>
            <ul v-if="isAuthenticated" class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <a class="nav-link active" href>Home</a>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'login'}" class="nav-link">
                        <i class="ion-compose"></i>&nbsp;New Article
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'register'}" class="nav-link">
                        <i class="ion-gear-a"></i>&nbsp;Settings
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'register'}" class="nav-link">{{currentUser.username}}</router-link>
                </li>
            </ul>
            <ul v-else class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <a class="nav-link active" href>Home</a>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'login'}" class="nav-link">
                        <i class="ion-compose"></i>&nbsp;Sign in
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name: 'register'}" class="nav-link">
                        <i class="ion-compose"></i>&nbsp;Sign up
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Header",
    computed: mapGetters(["currentUser", "isAuthenticated"])
};
</script>
