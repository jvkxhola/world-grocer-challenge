<script setup lang="ts">
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
  classNames: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="flex justify-center items-center p-6 rounded-md shadow-lg bg-white"
    :class="`${isLoading && 'bg-gray-200 animate-pulse'} ${classNames}`"
  >
    <slot v-if="!isLoading"></slot>
  </div>
</template>
