'use client';
import CircleProgressRating from '@Monocles/progress-bar/CircleProgressRating';
import CommonChartLabel from '@Monocles/chart-label/CommonChartLabel';
import SelectComp from '@/app/(after-login)/dashboard/@Overview/_components/SelectComp';
import BarChart from '@/app/(after-login)/dashboard/@Overview/_components/BarChart';
import HalfCircleProgress from '@/app/(after-login)/dashboard/@Overview/_components/HalfCircleProgress';

export default function Page() {
  // NOTE: 리엑트 쿼리로 기본 데이터 패칭, selectBox에서 바뀔때마다 쿼리로 패칭
  return (
    <section className="flex w-full flex-row  flex-wrap justify-center rounded-container  bg-white px-[24px] py-[32px] desktop:gap-0 desktop:px-[40px]">
      {/* 서클 프로그래스 */}
      <div className="flex w-full flex-row flex-wrap justify-center desktop:flex-nowrap ">
        <div className="mb-[47px] w-full items-center justify-center text-nowrap desktop:w-[320px]">
          <p className="text-body2 text-text-secondary ">이번 분기에 진행된 미왕빌딩</p>
          <h4 className="mb-[32px] text-h4 text-text-primary">내 소유 호실들의 평균 호실 점수는</h4>
          <div className=" mb-5 desktop:hidden">
            <SelectComp />
          </div>
          <div className=" flex justify-center">
            <CircleProgressRating
              percent={79}
              color="#1D4ED8"
            />
          </div>
        </div>
        {/* 바 차트 */}
        <div className="w-full">
          <div className="mb-1 flex flex-row items-center justify-end gap-3">
            <CommonChartLabel
              text="지난 분기"
              boxColor="lightBlue"
              size="md"
              textType="gray"
            />
            <CommonChartLabel
              text="이번 분기"
              boxColor="primary"
              size="md"
              textType="gray"
            />
            <div className="mb-[16px] hidden  desktop:mb-0  desktop:block">
              <SelectComp />
            </div>
          </div>
          <div className="relative right-10 mb-[40px] h-[174px]  desktop:right-0 desktop:h-[255px] ">
            <BarChart />
          </div>
        </div>
      </div>
      {/* 반원 진행바 */}
      <HalfCircleProgress />
    </section>
  );
}
