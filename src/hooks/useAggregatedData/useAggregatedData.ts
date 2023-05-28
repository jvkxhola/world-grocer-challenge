import { computed, onMounted, reactive, ref, watch } from "vue";
import { AggregatedData } from "../../types/aggregated_data";
import { parseISO, format } from "date-fns";
import { getAggregatedData } from "../../services/aggregatedData";

const getLabel = (dateString: string) => {
  const dateObj = parseISO(dateString);
  return format(dateObj, "MMMM dd, yyyy");
};

export const useAggregatedData = () => {
  const aggregatedData = ref<Array<AggregatedData>>([]);

  // We are going to assume that the data comes always sorted by createdBy to simplify
  // We could sort after fetching otherwise
  const dateRangeLimits = reactive<{ min: Date | null; max: Date | null }>({
    min: null,
    max: null,
  });
  const dateRange = reactive<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });

  const isLoading = ref(true);

  onMounted(async () => {
    try {
      const data = await getAggregatedData();
      aggregatedData.value = data;
      dateRangeLimits.min = parseISO(aggregatedData.value[0].label);
      dateRangeLimits.max = parseISO(
        aggregatedData.value[aggregatedData.value.length - 1].label
      );
    } finally {
      isLoading.value = false;
    }
  });

  watch(dateRangeLimits, (dateRangeLimits) => {
    if (
      !dateRange.start ||
      (dateRangeLimits.min && dateRange.start < dateRangeLimits.min)
    ) {
      dateRange.start = dateRangeLimits.min;
    }

    if (
      !dateRange.end ||
      (dateRangeLimits.max && dateRange.end > dateRangeLimits.max)
    ) {
      dateRange.end = dateRangeLimits.max;
    }
  });

  const onUpdateStartDate = (startDate: Date) => (dateRange.start = startDate);

  const onUpdateEndDate = (endDate: Date) => (dateRange.end = endDate);

  const chartData = computed(() => {
    return aggregatedData.value.reduce<{
      labels: Array<string>;
      expSums: Array<number>;
      ctrlSums: Array<number>;
    }>(
      (acc, { label, expSum, ctrlSum }) => {
        if (
          dateRange.start &&
          dateRange.start <= parseISO(label) &&
          dateRange.end &&
          dateRange.end >= parseISO(label)
        ) {
          acc.labels.push(getLabel(label));
          acc.expSums.push(+expSum);
          acc.ctrlSums.push(+ctrlSum);
        }

        return acc;
      },
      { labels: [], expSums: [], ctrlSums: [] }
    );
  });

  return {
    chartData,
    isLoading,
    dateRange,
    dateRangeLimits,
    onUpdateEndDate,
    onUpdateStartDate,
  };
};
