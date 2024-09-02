<template>
    <div class="flex items-center space-x-2">
      <GlobeAltIcon class="h-6 w-6 text-gray-600" />
      <button @click="changeLanguage('en')" class="text-sm text-blue-500 hover:underline">  {{ $t('ButtonLenguage.English') }}</button>
      <button @click="changeLanguage('es')" class="text-sm text-blue-500 hover:underline">  {{ $t('ButtonLenguage.Spanish') }}</button>
    </div>
</template>
  
  <script>
  import { GlobeAltIcon } from '@heroicons/vue/outline';
  import { useI18n } from 'vue-i18n';
  
  export default {
    name: "SelectLanguage",
    components: {
      GlobeAltIcon,
    },
    setup() {
      const { locale } = useI18n();
  
      const changeLanguage = (language) => {
        locale.value = language;
      };
  
      return { changeLanguage };
    },
  };
  </script>
  
  <style scoped></style>
  