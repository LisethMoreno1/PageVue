<template>
  <div class="flex flex-col min-h-screen">

    <div class="flex-1">
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
};
</script>

<style>
/* Estilos globales */
</style>
