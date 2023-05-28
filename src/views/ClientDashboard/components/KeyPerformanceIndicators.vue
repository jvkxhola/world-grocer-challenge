<script setup lang="ts">
import MetricCard from "../../../components/MetricCard";
import useKeyPerformanceIndicators from "../../../hooks/useKeyPerformanceIndicators";

const { kpis, isLoading } = useKeyPerformanceIndicators();
</script>

<template>
  <p class="text-center text-lg font-bold">KPIs</p>
  <div class="flex justify-center gap-4 md:gap-6 lg:gap-8 flex-wrap">
    <MetricCard
      title="Total Offers"
      :current-value="kpis.totalOffers"
      metric-type="general"
      :is-loading="isLoading"
    />
    <MetricCard
      title="Total Repeaters"
      subtitle="Experimental Group"
      :current-value="kpis.totalRepeatersExp"
      metric-type="general"
      :is-loading="isLoading"
    />
    <MetricCard
      title="Total Repeaters"
      subtitle="Control Group"
      :current-value="kpis.totalRepeatersCtrl"
      metric-type="general"
      :is-loading="isLoading"
    />
    <MetricCard
      title="Total CLV"
      subtitle="Experimental Group"
      :current-value="kpis.totalCLVExp"
      metric-type="cash"
      :is-loading="isLoading"
    />
    <MetricCard
      title="Total CLV"
      subtitle="Control Group"
      :current-value="kpis.totalCLVCtrl"
      metric-type="cash"
      :is-loading="isLoading"
    />
  </div>
</template>
