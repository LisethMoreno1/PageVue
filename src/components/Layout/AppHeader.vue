<template>
    <div class="min-h-screen flex flex-col">
            <header class="bg-white shadow">
                <div class="mx-60 max-w-10xl px-4 py-5 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
                </div>
            </header>
        <main class="flex-grow">
            <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 h-[60vh]">
                <div class="bg-white shadow h-full flex items-center justify-center">
                    <PageContent />
                </div>
            </div>
        </main>
    </div>
</template>


<script>
import PageContent from '../pages/PageContent.vue';





export default {
    components: {
        PageContent
    },
};
</script>