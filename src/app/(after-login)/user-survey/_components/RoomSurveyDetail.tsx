'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import SliderWithTooltip from '@Atoms/score-slider/SliderWithTooltip';
import OpinionTextField from '@Monocles/text-fields/SurveyTextField';
import { LocalIcon } from '@icon/index';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/asset/Icons/index';
import { SURVEY_QUESTION } from '@/constants';
import UserSurveyToast from '@Atoms/toast/UserSurveyToast';

interface FormInput {
  score: number[];
  opinion: string;
}

interface RoomSurveyDetailProps {
  surveyType: 'manage' | 'facility' | 'complaint';
  sliderColor: 'manage' | 'facility' | 'complaint';
  surveyImage: 'SurveyManage' | 'SurveyFacility' | 'SurveyComplaint';
}

const Survey = z.object({
  score: z.number().min(0, { message: '점수는 양수만 가능합니다.' }),
  opinion: z.string(),
});

export default function RoomSurveyDetail({ surveyType, sliderColor, surveyImage }: RoomSurveyDetailProps) {
  const router = useRouter(); // TODO: 폼 전송 후 router
  const [score, setScore] = useState([50]);
  const [toast, setToast] = useState(false);
  const {
    register,
    resetField,
    handleSubmit,
    setFocus,
    watch,
    setValue,
    formState: { isSubmitting, errors, dirtyFields },
  } = useForm<FormInput>({
    criteriaMode: 'all',
    resolver: zodResolver(Survey),
    mode: 'onBlur',
    defaultValues: {
      score: score,
      opinion: '',
    },
  });

  // TODO: API 연동시 수정해야 함
  // 서버 전송 값 형태: { score: [scoreValue], opinion: "opinionValue" }
  const onSubmit = async (data: any) => {
    // 슬라이더 이동이 없다면 제출하지 못하도록 처리
    if (!dirtyFields.score) {
      setToast(true);
      return;
    }

    await new Promise(r => setTimeout(r, 1000));
    router.replace(`/user-survey/scores?id=done`); // TODO: 평가 완료 페이지 연결하기
    console.log(data); // TODO: 전송되는 데이터 확인용 log(나중에 지우기)
  };

  const handleGetScore = (score: number[]) => {
    setScore(score);
    setValue('score', score, { shouldDirty: true }); // 동적으로 slider값 업데이트
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="relative">
      <div className="h-[762px] overflow-y-auto bg-white px-4">
        <div className="flex flex-col items-center bg-white px-4 pb-[34px] pt-5">
          <LocalIcon
            name={surveyImage}
            width={124}
            height={124}
          />
        </div>
        <div>
          <div className="flex gap-0.5 text-h4">
            <span className="leading-8">1. </span>
            <p className="leading-8">
              이번 달 <span className="text-primary">미왕빌딩</span>의 {SURVEY_QUESTION[surveyType]}에 대한 나의 점수는
              몇점인가요?
            </p>
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
        {/* 점수 슬라이더 */}
        <div className="mb-9 mt-[68px]">
          <SliderWithTooltip
            color={sliderColor}
            handleGetScore={handleGetScore}
            score={score}
          />
          {/* value값이 number라는 것을 명시해줘야 함 */}
          <input
            value={score[0]}
            type="number"
            readOnly
            className="hidden"
            {...register('score', {
              valueAsNumber: true,
            })}
          />
        </div>
        <div className="mb-[69px] flex flex-col gap-0.5">
          <p className="mb-6 text-h4 ">2. 더 자세한 이야기를 들려주세요</p>
          <OpinionTextField
            errorMessage={errors}
            IsError={Object.keys(errors).length !== 0}
            register={register}
            id={'opinion'}
            watch={watch}
            resetField={resetField}
            setFocus={setFocus}
          />
          <span className="mt-2 text-overline text-text-disabled">
            전달주신 의견은 익명으로 반영되며 오피스 관리에 큰 도움이 돼요 (선택)
          </span>
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="mb-8 h-[72px] w-full text-h4">
          {isSubmitting ? <LoadingSpinner className="mr-2" /> : '평가 완료하기'}
        </Button>
      </div>
      {toast && (
        <UserSurveyToast
          firstMessage={'점수 입력이 필요합니다.'}
          secondMessage={'슬라이더를 조절해주세요!'}
          setToast={setToast}
        />
      )}
    </form>
  );
}
