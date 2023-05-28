<script setup lang="ts">
import DailyTrending from "./components/DailyTrending.vue";
import KeyPerformanceIndicators from "./components/KeyPerformanceIndicators.vue";
</script>

<template>
  <div class="h-full flex flex-col gap-4 p-2">
    <KeyPerformanceIndicators /><DailyTrending />
  </div>
</template>
