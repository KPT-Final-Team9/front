import LineChartComp from '@/app/(after-login)/dashboard/@RatingTrends/_components/LineChartComp';

export default async function Page() {
  return (
    // 리엑트 쿼리 사용해서 컴포넌트 내부에서 mutation후 mainRoom 받아올 수 있게
    <div className="flex flex-row gap-6 after:h-4 after:content-[''] desktop:flex-col">
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
    </div>
  );
}
