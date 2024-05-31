import Link from 'next/link';
import Image from 'next/image';
import surveyView from '@/asset/images/surveyView.png';
import surveyGnb from '@/asset/images/surveyGnb.png';
import { LocalIcon } from '@icon/index';

export default function Page() {
  return (
    <section className="flex flex-col justify-center bg-background">
      <div className="relative">
        <Image
          src={surveyView}
          alt="survey view bg"
          width={375}
          height={813}
        />

        {/* 평가 알람 뱃지 */}
        <div className="absolute left-[75px] top-[490px] z-50 h-[6px] w-[6px] rounded-full bg-primary-badge-new"></div>
        <Link href="/user-survey/scores">
          <LocalIcon
            name={'SurveyIcon'}
            width={32}
            height={58}
            className="absolute left-[49px] top-[495px] transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </Link>

        {/* mobile view GNB */}
        <Image
          src={surveyGnb}
          alt="survey gnb"
          width={375}
          height={180}
          className="z-100 absolute bottom-0"
        />
      </div>
    </section>
  );
}
