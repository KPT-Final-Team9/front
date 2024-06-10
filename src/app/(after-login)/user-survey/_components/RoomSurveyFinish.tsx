import Link from 'next/link';
import Image from 'next/image';

import { LocalIcon } from '@icon/index';
import star1 from '@/asset/images/star1.png';
import star2 from '@/asset/images/star2.png';

export default function RoomSurveyFinish() {
  return (
    <div className="h-[762px] overflow-y-auto bg-white px-4">
      <Image
        src={star1}
        alt="survey view bg"
        width={32}
        height={32}
        className="ml-[100px] mt-[120px] animate-flash-three"
        priority
      />
      <div className="flex w-full items-center justify-center bg-white pb-[32px] pt-[13px]">
        <Image
          src={star1}
          alt="survey view bg"
          width={32}
          height={32}
          className="mb-8 mr-6 animate-flash-two"
          priority
        />
        <LocalIcon
          name={'SurveyFinish'}
          width={124}
          height={124}
        />
        <Image
          src={star2}
          alt="survey view bg"
          width={32}
          height={32}
          className="mt-7 animate-flash-first justify-center"
          priority
        />
      </div>

      <div className="mb-[265px] flex flex-col items-center justify-center gap-y-[10px]">
        <p className="text-h3">평가가 완료되었어요!</p>
        <p className="text-body1 text-text-secondary">소중한 의견을 제공해 주셔서 감사합니다</p>
      </div>

      <Link
        href="/user-survey/scores"
        className="mb-8 inline-flex h-[72px] w-full items-center justify-center whitespace-nowrap rounded-mobile-stroke bg-primary px-4 py-4 text-h4 text-white ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[.98] disabled:pointer-events-none disabled:opacity-50 desktop:rounded-desktop-stroke">
        홈으로 돌아가기
      </Link>
    </div>
  );
}
