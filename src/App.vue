<!-- /src/App.vue -->
<template>
  <div class="flex flex-col min-h-screen">
  <!--   <AppSidebar /> -->
    <div class="flex-1">
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
/* import AppSidebar from '@/components/Layout/AppSidebar.vue';
 */
export default {
  name: 'App',
  components: {
 /*    AppSidebar, */
  },
};
</script>

<style>
/* Estilos globales */
</style>

