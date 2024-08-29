<template>
  <div class="hs-dropdown md:[--strategy:fixed] [--adaptive:none]">
    <button id="hs-header-classic-dropdown" type="button"
      class="hs-dropdown-toggle w-full p-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
      aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
      Dropdown
    </button>
    <div
      class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md">
      <div class="py-1 md:px-1 space-y-0.5">
        <a class="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#">
          About
        </a>
        <a class="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
          href="#">
          Contact
        </a>
      </div>
    </div>
  </div>
</template>