import Link from 'next/link';
import Image from 'next/image';
import surveyView from '@/asset/images/surveyView.png';
import surveyGnb from '@/asset/images/surveyGnb.png';
import { LocalIcon } from '@icon/index';

export default function Page() {
  return (
    <section className="bg-[#F4F4F5]">
      <div className="flex flex-col justify-between">
        <div className="relative">
          <Image
            src={surveyView}
            alt="survey view bg"
            width={374}
            height={813}
          />

          {/* 평가 알람 뱃지 */}
          <div className="absolute left-[75px] top-[490px] z-50 h-[6px] w-[6px] rounded-full bg-primary-badge-new"></div>
          <Link href="">
            <LocalIcon
              name={'SurveyIcon'}
              width={32}
              height={58}
              className="absolute left-[49px] top-[495px] transition-transform duration-500 ease-in-out hover:scale-105"
            />
          </Link>
        </div>

        {/* mobile view GNB */}
        <Image
          src={surveyGnb}
          alt=""
          width={375}
          height={180}
        />
      </div>
    </section>
  );
}
