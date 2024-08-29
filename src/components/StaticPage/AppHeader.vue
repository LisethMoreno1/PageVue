<template>
  <header
    class="sticky top-4 inset-x-0 before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 before:lg:mx-auto before:rounded-[26px] before:border before:border-gray-200 dark:border-neutral-700 after:absolute after:inset-0 after:-z-[1] after:max-w-[66rem] after:mx-2 after:lg:mx-auto after:rounded-[26px] after:bg-white dark:bg-neutral-900 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
    <nav
      class="relative max-w-[66rem] w-full md:flex md:items-center md:justify-between md:gap-3 ps-5 pe-2 mx-2 lg:mx-auto py-2">
      <LogoButton />
      <NavigationLinks />
    </nav>
  </header>

</template>

<script>
import LogoButton from '@/components/StaticPage/AppLogoButton.vue';
import NavigationLinks from '@/components/StaticPage/AppNavigationLinks.vue';

export default {
  components: {
    /*   name: 'AppHeader', */
    LogoButton,
    NavigationLinks,

  },
};
</script>