<script setup lang="ts">
import { useAggregatedData } from "../../../hooks/useAggregatedData/useAggregatedData";
import Chart from "../../../components/Chart";
import { computed } from "vue";
import MetricCard from "../../../components/MetricCard";
import DatePicker from "../../../components/DatePicker";

const { chartData, isLoading, dateRange, dateRangeLimits, onUpdateDates } =
  useAggregatedData();

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

const handleUpdateDates = (dates: Array<Date>) => {
  const [start, end] = dates;
  onUpdateDates(start, end);
};
</script>

<template>
  <div class="flex flex-col h-full w-full gap-4 items-center">
    <p class="text-center text-lg font-bold">Daily Trending</p>
    <DatePicker
      :dates="[dateRange.start!, dateRange.end!]"
      :minDate="dateRangeLimits.min!"
      :maxDate="dateRangeLimits.max!"
      @update-model-value="handleUpdateDates"
    />

    <div
      class="flex flex-1 flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 justify-evenly items-center w-full"
    >
      <Chart
        :labels="chartData.labels"
        :datasets="datasets"
        :classNames="'h-full flex-1'"
      />
      <div
        class="h-full flex flex-col sm:flex-row lg:flex-col gap-4 justify-around items-center mx-4"
      >
        <MetricCard
          title="Control Group CLV"
          :current-value="chartData.ctrlSums[chartData.ctrlSums.length - 1]"
          :previous-value="chartData.ctrlSums[0]"
          metric-type="cash"
          :is-loading="isLoading"
        />
        <MetricCard
          title="Experimental Group CLV"
          :current-value="chartData.expSums[chartData.expSums.length - 1]"
          :previous-value="chartData.expSums[0]"
          metric-type="cash"
          :is-loading="isLoading"
        />
      </div>
    </div>
  </div>
</template>
