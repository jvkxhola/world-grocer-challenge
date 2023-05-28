<script setup lang="ts">
import { ref } from "vue";

const isMenuOpen = ref(false);

const handleToggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-white">
    <div class="mx-auto px-2 sm:px-4 lg:px-6">
      <div class="relative flex h-14 items-center">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="handleToggleMenu"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              :class="`${isMenuOpen ? 'hidden' : 'block'}`"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <svg
              class="h-6 w-6"
              :class="`${isMenuOpen ? 'block' : 'hidden'}`"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="hidden sm:block">
            <div class="flex space-x-4">
              <a
                href="#"
                class="bg-[#450e72] text-white rounded-md px-3 py-2 text-sm font-medium"
                aria-current="page"
                >Dashboard</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div
      class="sm:hidden"
      :class="`${isMenuOpen ? 'block' : 'hidden'}`"
      id="mobile-menu"
    >
      <div class="space-y-1 px-2 pb-3 pt-2">
        <a
          href="#"
          class="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
          aria-current="page"
          >Dashboard</a
        >
      </div>
    </div>
  </nav>
</template>
