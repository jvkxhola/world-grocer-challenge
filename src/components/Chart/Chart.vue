<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";

type DataSet = {
  label: string;
  backgroundColor: string;
  data: Array<number>;
};

defineProps({
  labels: {
    type: Array<String>,
    required: true,
  },
  datasets: {
    type: Array<DataSet>,
    default: [],
  },
  classNames: {
    type: String,
    default: "",
  },
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
</script>

<template>
  <div :class="`${classNames}`">
    <Line
      :data="{ labels, datasets }"
      :options="{
        responsive: true,
        maintainAspectRatio: false,
      }"
    />
  </div>
</template>
