import clsx from 'clsx';
import Link from 'next/link';
import { LocalIcon } from '@icon/index';
import { SURVEY_BUTTON_DATA } from '@/constants';

export default function RoomSurvey() {
  const surveyButton = clsx(
    'block mb-6 h-[136px] w-full flex items-center justify-center gap-3 rounded-base bg-white border-stroke border cursor-pointer hover:border-2 hover:border-primary',
  );

  return (
    <div className="bg-background">
      <div className="flex flex-col items-center bg-white px-4 pb-[34px] pt-5">
        <LocalIcon
          name={'SurveyRoom'}
          width={124}
          height={124}
        />
        <span className="text-h4">오피스에서 머무는 시간을</span>
        <span className="text-h4 text-primary">더 즐겁고, 더 편안하게</span>
      </div>
      <div className="bg-background py-[26px] pt-[22px]">
        <div className="px-4">
          {SURVEY_BUTTON_DATA.map(item => (
            <Link
              href={item.path}
              key={item.id}
              className={surveyButton}>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 ">
                <LocalIcon
                  name={item.imgName}
                  width={30}
                  height={30}
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-h4">{item.btnTitle}</span>
                <span className="text-body4 text-text-secondary">{item.btnDescription}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
