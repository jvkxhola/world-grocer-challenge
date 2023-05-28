<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { watch, ref } from "vue";

const props = defineProps({
  dates: {
    type: Array<Date>,
    required: true,
  },
  minDate: {
    type: Date,
    default: null,
  },
  maxDate: {
    type: Date,
    default: null,
  },
});

const dateRange = ref<Array<Date>>(props.dates);

const emit = defineEmits<{
  (e: "update-model-value", dates: Array<Date>): void;
}>();

watch(dateRange, (dateRange: Array<Date>) => {
  console.log({ dateRange });
  emit("update-model-value", dateRange);
});

watch(
  () => props.dates,
  (dates: Array<Date>) => {
    console.log({ dates });
    dateRange.value = dates;
  }
);
</script>

<template>
  <div class="w-[22rem]">
    <VueDatePicker
      v-model="dateRange"
      :min-date="minDate"
      :max-date="maxDate"
      range
    ></VueDatePicker>
  </div>
</template>
