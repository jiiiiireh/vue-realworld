<template>
    <nav class="navbar navbar-light">
        <div class="container">
            <a class="navbar-brand" href="index.html">conduit</a>
            <ul class="nav navbar-nav pull-xs-right">
                <li class="nav-item">
                    <a class="nav-link active" href>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href>
                        <i class="ion-compose"></i>&nbsp;Sign in
                    </a>
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
export default {
    name: "Header"
};
</script>
