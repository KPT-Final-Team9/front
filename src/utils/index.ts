import { FilterChartData } from '@/types/chart';

export const filterChartData: FilterChartData = ({ chartData, dataKey }) => {
  if (chartData.length === 0) return [];
  return Object.keys(chartData[0]).filter(key => key !== dataKey);
};
