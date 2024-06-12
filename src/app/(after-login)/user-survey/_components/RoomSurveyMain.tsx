'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import clsx from 'clsx';
import { cn } from '@/lib/utils';
import { LocalIcon } from '@icon/index';
import RoomSurveyMidModal from '@/app/(after-login)/user-survey/_components/RoomSurveyMidModal';
import RoomSurveyLastModal from '@/app/(after-login)/user-survey/_components/RoomSurveyLastModal';
import { Button, buttonVariants } from '@/components/ui/button';
import UserSurveyToast from '@Atoms/toast/UserSurveyToast';

interface surveyButtonProps {
  id: number;
  imgName: 'SurveyBtnIcon1' | 'SurveyBtnIcon2' | 'SurveyBtnIcon3';
  btnTitle: string;
  btnDescription: string;
  path: string;
  scoreId: number;
  isComplated: boolean;
  ratingType: string;
}

// TODO: 평가 완료 후 홈으로 왔을 때 평가여부 확인해서 버튼 비활성화 처리 추가해야함
export default function RoomSurvey({ data }: { data: surveyButtonProps[] }) {
  const router = useRouter();
  const surveyButton = clsx(
    'mb-6 flex h-[136px] w-full cursor-pointer items-center justify-center gap-3 rounded-base border border-stroke bg-white text-left text-text-primary hover:border-2 hover:border-primary hover:bg-white active:scale-100',
  );

  const [toast, setToast] = useState(false);
  const [disabledTitle, setDisabledTitle] = useState('');

  const handleDisabledClick = (surveyState: boolean, title: string) => {
    if (surveyState) {
      setDisabledTitle(title);
      setToast(true);
      return;
    }
  };

  return (
    <div className="h-[762px] bg-background">
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
          {data.map(item => (
            <div
              key={item.id}
              onClick={() => handleDisabledClick(item.isComplated, item.btnTitle)}>
              <Button
                disabled={item.isComplated}
                key={item.id}
                className={cn(buttonVariants({ variant: 'default' }), 'select-none', surveyButton)}
                onClick={() => {
                  router.push(`${item.path}&num=${item.scoreId}`);
                }}>
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
              </Button>
            </div>
          ))}
        </div>
      </div>
      <RoomSurveyMidModal />
      <RoomSurveyLastModal />
      {toast && (
        <UserSurveyToast
          firstMessage={`이미 ${disabledTitle}가 완료되었습니다`}
          setToast={setToast}
        />
      )}
    </div>
  );
}
