import ScoreTrendChart from '@chart/bar-chart/ScoreTrendChart';
import ScorePieChart from '@chart/pie-chart/ScorePieChart';
import { LocalIcon } from '@icon/index';
import RoomTooltip from '../_component/RoomTooltip';
const data = [
  { name: '2021 Q1', uv: 100, pv: 20 },
  { name: '2021 Q2', uv: 30, pv: 20 },
  { name: '2021 Q3', uv: 30, pv: 20 },
  { name: '2021 Q4', uv: 10, pv: 20 },
  { name: '2021 Q1', uv: 10, pv: 20 },
  { name: '2021 Q2', uv: 10, pv: 20 },
  { name: '2021 Q3', uv: 40, pv: 20 },
  { name: '2021 Q4', uv: 10, pv: 20 },
  { name: '2021 Q1', uv: 20, pv: 20 },
  { name: '2021 Q2', uv: 10, pv: 20 },
  { name: '2021 Q3', uv: 10, pv: 20 },
  { name: '2021 Q4', uv: 10, pv: 20 },
];
const dummyData = [
  { name: '시설 점수', value: 45 },
  { name: '관리 점수', value: 80 },
  { name: '민원 점수', value: 30 },
];
export default function Page() {
  const rentDataArray = {
    facility: { title: '시설', color: '#2563eb' },
    management: { title: '관리', color: '#77d276' },
    complaints: { title: '민원', color: '#ffb775' },
  };
  return (
    <>
      <div className="flex w-full flex-col gap-10 rounded-container bg-white p-6 desktopMaxW:flex-row desktopMaxW:divide-x-2">
        <div className="flex w-full flex-col items-center justify-center gap-5 desktop:pl-5 desktopMaxW:w-[328px]">
          <div className="flex items-center self-start">
            <h4 className="mr-2 text-h4 text-text-primary">평가 항목별 점수</h4>
            <RoomTooltip content="기간 설정에 따른 항목별 평가 점수를 확인할 수 있어요" />
          </div>
          <div className="flex h-[196px] w-[320px] items-center justify-center">
            <ScorePieChart scoreData={dummyData} />
          </div>
        </div>

        <div className="flex h-full w-full flex-col justify-between gap-7 self-end desktop:pl-5">
          <div className="flex items-center">
            <LocalIcon
              name="BusinessChart"
              className="h-[24px] w-[24px]"
            />
            <p className="text-overline text-text-secondary">항목별 연간 데이터를 보여드려요</p>
          </div>
          <div className="flex h-[130px] w-full gap-2 divide-x-2 self-end desktopMaxW:h-3/5">
            {Object.values(rentDataArray).map((val, index) => {
              return (
                <>
                  <div className="flex h-full w-full flex-col items-center justify-center pl-2 desktopMaxW:px-8">
                    <ScoreTrendChart
                      chartData={data}
                      categoryKey="name"
                      myRoomKey="uv"
                      otherRoomKey="pv"
                      accentColor={val.color}
                    />
                    <p>{val.title}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
