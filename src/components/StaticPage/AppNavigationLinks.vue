<template>
  <div id="hs-header-classic"
    class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
    aria-labelledby="hs-header-classic-collapse">
    <div class="overflow-hidden overflow-y-auto max-h-[75vh]">
      <div class="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
        <a class="p-2 flex items-center text-sm text-blue-600 focus:outline-none focus:text-blue-600 dark:text-blue-500 dark:focus:text-blue-500"
          href="#" aria-current="page">
          {{ $t('AppNavigationLink.landing') }}
        </a>
        <a class="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#">
          {{ $t('AppNavigationLink.account') }}
        </a>
        <a class="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#">
          {{ $t('AppNavigationLink.work') }}
        </a>
        <a class="p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#">
          {{ $t('AppNavigationLink.blog') }}
        </a>
        <DropdownMenu />
        <SelectorLanguage />
      </div>
    </div>
  </div>
</template>

<script>
import DropdownMenu from '@/components/StaticPage/AppDropdownMenu.vue';
import SelectorLanguage from '@/components/locales/SelectorLenguage.vue';
import { useI18n } from 'vue-i18n';

export default {
  components: {
    DropdownMenu,
    SelectorLanguage,
  },
  setup() {
    const { t } = useI18n();
    return { t };
  }
};
</script>

<style scoped></style>
