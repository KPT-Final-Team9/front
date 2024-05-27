import LineChartComp from '@/app/(after-login)/dashboard/@RightSection/_components/LineChartComp';

export default async function Page() {
  return (
    <div className="flex flex-row gap-6 desktop:flex-col">
      <LineChartComp mainRoom={true}></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <LineChartComp></LineChartComp>
      <div className="h-4"></div>
    </div>
  );
}
