<template>
    <div id="app">
        <Header></Header>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Header from "./component/Header";
import Footer from "./component/Footer";
import { CHECK_USER } from "./store/action-types";
export default {
    name: "App",
    components: {
        Header,
        Footer
    },
    created() {
        this.$store.dispatch(CHECK_USER);
    }
};
</script>
