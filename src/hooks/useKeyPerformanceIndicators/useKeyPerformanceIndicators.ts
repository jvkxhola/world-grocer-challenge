import { reactive, ref, onMounted } from "vue";
import { KeyPerformanceIndicators } from "../../types/key_performance_indicators";
import { getKeyPerformanceIndicators } from "../../services/keyPerformanceIndicators";

export const useKeyPerformanceIndicators = () => {
  const kpis = reactive<KeyPerformanceIndicators>({
    totalOffers: 0,
    totalRepeatersExp: 0,
    totalRepeatersCtrl: 0,
    totalCLVExp: 0,
    totalCLVCtrl: 0,
  });
  const isLoading = ref(true);

  onMounted(async () => {
    try {
      const data = await getKeyPerformanceIndicators();
      Object.assign(kpis, data);
    } finally {
      isLoading.value = false;
    }
  });

  return { kpis, isLoading };
};
