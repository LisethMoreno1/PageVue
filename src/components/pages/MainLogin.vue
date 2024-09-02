<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <AppSessionLogin />
        </header>
        <main class="flex-1">
            <!-- <AppHeader />  -->
        </main>

    </div>
</template>

<script>

import AppSessionLogin from '../Login/AppSessionLogin.vue';





export default {
    components: {
        AppSessionLogin
    },
};
</script>