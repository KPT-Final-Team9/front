export type ChartDataItem = { [key: string]: any };

export type FilterChartData = (params: { chartData: ChartDataItem[]; dataKey: string }) => string[];
