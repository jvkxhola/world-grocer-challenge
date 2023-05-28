<script setup lang="ts">
import Header from "./components/Header";
</script>

<template>
  <div class="w-full h-screen">
    <Header />
    <div class="h-[calc(100%_-_3.5rem)]"><router-view /></div>
  </div>
</template>
