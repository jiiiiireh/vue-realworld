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
export default {
    name: "App",
    components: {
        Header,
        Footer
    }
};
</script>
