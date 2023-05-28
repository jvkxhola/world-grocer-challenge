<script setup lang="ts">
import { useAggregatedData } from "../../../hooks/useAggregatedData/useAggregatedData";
import Chart from "../../../components/Chart";
import { computed } from "vue";

const { chartData } = useAggregatedData();

const datasets = computed(() => {
  return [
    {
      label: "Control",
      backgroundColor: "#60cc94",
      data: chartData.value.ctrlSums,
    },
    {
      label: "Experimental",
      backgroundColor: "#f86434",
      data: chartData.value.expSums,
    },
  ];
});
</script>

<template>
  <Chart
    :labels="chartData.labels"
    :datasets="datasets"
    :classNames="'max-h-full flex-1 w-full'"
  />
</template>
