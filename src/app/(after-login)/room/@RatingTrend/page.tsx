import ScoreTrendChart from '@chart/line-chart/ScoreTrendChart';

const chartData = [
  { name: '2023 1월', uv: 100 },
  { name: '2월', uv: 82 },
  { name: '3월', uv: 52 },
  { name: '4월', uv: 12 },
  { name: '5월', uv: 62 },
  { name: '6월', uv: 32 },
  { name: '7월', uv: 82 },
  { name: '8월', uv: 52 },
  { name: '9월', uv: 92 },
  { name: '10월', uv: 22 },
  { name: '11월', uv: 82 },
  { name: '12월', uv: 72 },
];
export default async function Page() {
  // 데이터 패칭
  await setTimeout(() => {}, 2000);
  return (
    <>
      <div className="flex min-h-[234px] w-full flex-col gap-2 rounded-container bg-white pl-2 pt-3 desktop:pb-2 desktop:pl-8 desktop:pt-8">
        <div className="flex flex-col gap-2 px-4">
          <h4 className="text-h4">내호실 점수변화 한눈에 보기</h4>
          <p className="pb-4">지난 1년 동안 매월 기록된 내호실 점수 변화를 보여드려요</p>
        </div>
        <ScoreTrendChart
          chartData={chartData}
          dateKey="name"
        />
      </div>
    </>
  );
}
