<template>
    <div class="flex flex-col min-h-screen">
        <header>
            <AppSidebar />
        </header>
        <main class="flex-1">
            <AppHeader /> 
        </main>

    </div>
</template>

<script>
import AppHeader from '../Layout/AppHeader.vue';
import AppSidebar from '../Layout/AppSidebar.vue';





export default {
    components: {
        AppHeader,
        AppSidebar
    },
};
</script>