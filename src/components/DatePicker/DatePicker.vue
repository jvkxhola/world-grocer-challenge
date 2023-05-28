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
  emit("update-model-value", dateRange);
});

watch(
  () => props.dates,
  (dates: Array<Date>) => {
    dateRange.value = dates;
  }
);
</script>

<template>
  <div class="w-fit">
    <VueDatePicker
      v-model="dateRange"
      :min-date="minDate"
      :max-date="maxDate"
      :enable-time-picker="false"
      range
    ></VueDatePicker>
  </div>
</template>
