<script setup lang="ts">
import DailyTrending from "./components/DailyTrending.vue";
import KeyPerformanceIndicators from "./components/KeyPerformanceIndicators.vue";
</script>

<template>
  <div class="h-full flex flex-col sm:gap-4 md:gap-6 lg:gap-8 p-2">
    <KeyPerformanceIndicators /><DailyTrending />
  </div>
</template>
