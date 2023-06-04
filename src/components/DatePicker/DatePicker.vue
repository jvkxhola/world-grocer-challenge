<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

defineProps({
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

const emit = defineEmits<{
  (e: "update-model-value", dates: Array<Date>): void;
}>();
</script>

<template>
  <div class="w-fit">
    <VueDatePicker
      :model-value="dates"
      @update:model-value="(dates) => emit('update-model-value', dates)"
      :min-date="minDate"
      :max-date="maxDate"
      :enable-time-picker="false"
      range
    ></VueDatePicker>
  </div>
</template>
