import SurveyHeaderBackButton from '@/app/(after-login)/user-survey/_components/SurveyHeaderBackButton';

export default function SurveyHeader() {
  return (
    <>
      <header className="relative flex h-[44px] w-full items-center justify-between bg-white">
        <div className="absolute inset-y-0 left-0 flex items-center p-4">
          <SurveyHeaderBackButton />
        </div>

        <div className="flex flex-1 items-center justify-center">
          <span className="inset-y-0 flex shrink-0 items-center text-h4">내 호실 평가하기</span>
        </div>
      </header>
    </>
  );
}
