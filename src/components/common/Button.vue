<template>
    <button :class="[
        'py-2 px-4 font-semibold rounded-lg shadow-md',
        variantClasses,
        sizeClasses,
        className
    ]" :type="type" :disabled="disabled">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            default: 'button'
        },
        variant: {
            type: String,
            default: 'primary' // puedes cambiar 'primary' por 'secondary', 'danger', etc.
        },
        size: {
            type: String,
            default: 'medium' // puedes cambiar 'medium' por 'small', 'large', etc.
        },
        disabled: {
            type: Boolean,
            default: false
        },
        className: {
            type: String,
            default: ''
        }
    },
    computed: {
        variantClasses() {
            switch (this.variant) {
                case 'primary':
                    return 'bg-blue-500 text-white hover:bg-blue-700';
                case 'secondary':
                    return 'bg-gray-500 text-white hover:bg-gray-700';
                case 'danger':
                    return 'bg-red-500 text-white hover:bg-red-700';
                default:
                    return '';
            }
        },
        sizeClasses() {
            switch (this.size) {
                case 'small':
                    return 'text-sm';
                case 'large':
                    return 'text-lg';
                default:
                    return 'text-base';
            }
        }
    }
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si es necesario */
</style>