<script setup lang="ts">
import Card from "../../../components/Card/index.js";
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: "",
  },
  currentValue: {
    type: Number,
    required: true,
  },
  previousValue: {
    type: Number,
    default: null,
  },
  metricType: {
    type: String,
    required: true,
    validator: (value: string) => {
      return ["general", "cash"].includes(value);
    },
  },
  deltaType: {
    type: String,
    default: "total",
    validator: (value: string) => {
      return ["total", "percentage"].includes(value);
    },
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const delta = computed(() => props.currentValue - props.previousValue);

const formatMetric = (value: number) => {
  if (props.metricType === "general") {
    return value.toString();
  }

  return `$${value.toLocaleString("en-US")}`;
};

const deltaLabel = computed(() => {
  if (!props.previousValue) {
    return "";
  }

  if (props.deltaType === "total") {
    return formatMetric(delta.value);
  }

  const percentage = `${((delta.value * 100) / props.previousValue).toFixed(
    2
  )}%`;
  return percentage;
});
</script>

<template>
  <Card :is-loading="isLoading" :classNames="'w-60 h-40'">
    <div
      class="w-full h-full flex flex-col justify-center items-center gap-4 text-center"
    >
      <div class="self-start text-left">
        <p class="text-md">
          {{ title }}
        </p>
        <p class="text-sm text-gray-500">
          {{ subtitle }}
        </p>
      </div>
      <div
        class="flex flex-col h-full w-full flex-1 justify-center items-center gap-3"
      >
        <p class="font-bold text-4xl text-center">
          {{ formatMetric(currentValue) }}
        </p>
        <div v-if="previousValue !== null">
          <div class="flex justify-center items-center">
            <svg
              v-if="delta < 0"
              style="color: #ef4444"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                fill="#ef4444"
              ></path>
            </svg>
            <svg
              v-else
              style="color: #22c55e"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-up"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                fill="#22c55e"
              ></path>
            </svg>
            <p
              class="text-lg"
              :class="`${delta < 0 ? 'text-red-500' : 'text-green-500'}`"
            >
              {{ deltaLabel }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
</template>
