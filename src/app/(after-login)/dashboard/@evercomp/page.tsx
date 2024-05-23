'use client';
import CircleProgressRating from '@Monocles/progress-bar/CircleProgressRating';
import SelectComp from '@/app/(after-login)/dashboard/@evercomp/_components/SelectComp';
import CommonChartLabel from '@Monocles/chart-label/CommonChartLabel';
import HalfCircleProgress from '@/app/(after-login)/dashboard/@evercomp/_components/HalfCircleProgress';
import BarChart from '@/app/(after-login)/dashboard/@evercomp/_components/BarChart';

export default function Page() {
  // NOTE: 리엑트 쿼리로 기본 데이터 패칭, selectBox에서 바뀔때마다 쿼리로 패칭
  return (
    <section className="box-border flex w-[343px] flex-row flex-wrap justify-center rounded-container border-2 border-black bg-white px-[24px] py-[32px] desktop:w-[920px] desktop:gap-0 desktop:px-[40px]">
      {/* 서클 프로그래스 */}
      <div className="mb-[47px] w-[320px] items-center justify-center text-nowrap">
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
      <div className="w-full desktop:w-[504px]">
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
        <div className="relative right-10 mb-[40px] h-[174px] w-[350px] desktop:right-0 desktop:h-[255px] desktop:w-[504px]">
          <BarChart />
        </div>
      </div>
      {/* 반원 진행바 */}
      <div>
        <HalfCircleProgress />
      </div>
    </section>
  );
}
