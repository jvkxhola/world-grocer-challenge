import { KeyPerformanceIndicators } from "../types/key_performance_indicators";

export const getKeyPerformanceIndicators = async () => {
  // Simulate a delay in the fetch request
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay for 1 second (1000ms)

  try {
    // Read the contents of the file stored in the ../data folder
    const response = await fetch("./data/serverWidgetsData.json");
    const data: KeyPerformanceIndicators = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
