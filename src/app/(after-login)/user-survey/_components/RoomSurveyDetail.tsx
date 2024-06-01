import SliderWithTooltip from '@Atoms/range-slider/SliderWithTooltip';
import { LocalIcon } from '@icon/index';
import { Button } from '@/components/ui/button';

export default function RoomSurveyDetail() {
  return (
    <form action="">
      <div className="h-[762px] overflow-y-hidden bg-white px-4">
        <div className="flex flex-col items-center bg-white px-4 pb-[34px] pt-5">
          <LocalIcon
            name={'SurveyFacility'}
            width={124}
            height={124}
          />
        </div>
        <div>
          <div className="flex flex-col gap-0.5 text-h4">
            <p>
              1. 이번 달 <span className="text-primary">미왕빌딩</span>의 관리에 대한 나의
            </p>
            <p className="pl-5">점수는 몇 점인가요?</p>
          </div>
          <div className="mt-2 flex items-center gap-1">
            <LocalIcon
              name={'ExclamationMark'}
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span className="text-overline text-text-secondary">
              관리 항목에는 보안, 안전, 주차, 재정 관리 등이 포함됩니다.
            </span>
          </div>
          <div className="mt-6 flex h-[48px] w-[315px] items-center justify-center rounded-r-[20px] rounded-tl-[20px] border border-stroke bg-white">
            <span className="text-body4 text-text-secondary">
              만족스러울수록 <span className="text-text-primary">오른쪽</span>으로 밀어 점수를 매겨주세요!
            </span>
          </div>
        </div>
        <div className="mb-8 mt-[68px]">
          <SliderWithTooltip />
        </div>
        <div className="mb-[69px] flex flex-col gap-0.5">
          <p className="mb-12 text-h4 ">2. 더 자세한 이야기를 들려주세요</p>
          <input />
          <span className="text-overline text-text-disabled">
            전달주신 의견은 익명으로 반영되며 오피스 관리에 큰 도움이 돼요 (선택)
          </span>
        </div>
        <Button className="mb-8 h-[72px] w-full" />
      </div>
    </form>
  );
}
