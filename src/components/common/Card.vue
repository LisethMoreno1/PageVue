<template>
    <div class="bg-white shadow-lg rounded-lg p-6">
        <img v-if="image" :src="image" alt="Card image" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="mt-4">
            <h2 class="text-xl font-semibold">{{ title }}</h2>
            <p class="mt-2 text-gray-600">{{ content }}</p>
            <slot></slot> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        title: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>