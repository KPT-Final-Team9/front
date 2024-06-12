'use client';
import { useEffect, useState } from 'react';

import SurveyHeader from '@/app/(after-login)/user-survey/_components/SurveyHeader';
import RoomSurveyMain from '@/app/(after-login)/user-survey/_components/RoomSurveyMain';
import RoomSurveyDetail from '@/app/(after-login)/user-survey/_components/RoomSurveyDetail';
import RoomSurveyFinish from '@/app/(after-login)/user-survey/_components/RoomSurveyFinish';
import { baseApis } from '@/services/api';

export default function Page({ searchParams }: { searchParams: { id: string } }) {
  /**
   * 라우팅 주소
   * /user-survey/scores (내 호실 평가 화면)
   * /user-survey/scores?id=manage&num={scoreId} (각 호실 평가 입력 화면)
   * /user-survey/scores?id=done (평가 완료 안내 화면)
   */

  interface surveyButtonDataType {
    id: number;
    imgName: 'SurveyBtnIcon1' | 'SurveyBtnIcon2' | 'SurveyBtnIcon3';
    btnTitle: string;
    btnDescription: string;
    path: string;
    scoreId: number;
    isComplated: boolean;
    ratingType: string;
  }

  const scoreId = searchParams.id;
  const [complateState, setComplateState] = useState<surveyButtonDataType[]>([
    {
      id: 1,
      imgName: 'SurveyBtnIcon1',
      btnTitle: '관리 평가',
      btnDescription: '호실 관리에 대한 나의 평가를 등록해 주세요',
      path: '/user-survey/scores?id=manage',
      scoreId: 1,
      isComplated: true,
      ratingType: 'MANAGEMENT',
    },
    {
      id: 2,
      imgName: 'SurveyBtnIcon2',
      btnTitle: '시설 평가',
      btnDescription: '우리 시설에 대한 나의 점수를 등록해 주세요',
      path: '/user-survey/scores?id=facility',
      scoreId: 1,
      isComplated: true,
      ratingType: 'FACILITY',
    },
    {
      id: 3,
      imgName: 'SurveyBtnIcon3',
      btnTitle: '민원 평가',
      btnDescription: '민원 처리에 대한 나의 만족도를 알려주세요',
      path: '/user-survey/scores?id=complaint',
      scoreId: 0,
      isComplated: true,
      ratingType: 'COMPLAINT',
    },
  ]);

  useEffect(() => {
    async function fetchData() {
      try {
        let ignore = false;
        const fetchInstance = await baseApis();
        const response = await fetchInstance('/scores/in-progress', {
          cache: 'no-store',
          method: 'GET',
        }).then(res => res.json());

        // 각 항목별 id값 전달을 위해 평가여부 및 score id 데이터 업데이트
        const fetchScoreData = complateState.map(data => {
          const matchingType = response?.find(
            (fetchData: { rating_type: string }) => fetchData.rating_type === data.ratingType,
          );
          return matchingType
            ? { ...data, isComplated: matchingType.completed, scoreId: matchingType.id }
            : { ...data, isComplated: true };
        });

        if (!ignore) {
          setComplateState(fetchScoreData);
        }

        // useEffect componentDidUpdate clean-up 함수
        return () => {
          ignore = true;
        };
      } catch (error) {
        console.error('Error fetching Unsplash data:', error);
      }
    }

    fetchData();
  }, [scoreId]);

  const renderPage = () => {
    switch (scoreId) {
      case 'manage':
        return (
          <RoomSurveyDetail
            surveyType={'manage'}
            sliderColor={'manage'}
            surveyImage={'SurveyManage'}
          />
        );
      case 'facility':
        return (
          <RoomSurveyDetail
            surveyType={'facility'}
            sliderColor={'facility'}
            surveyImage={'SurveyFacility'}
          />
        );
      case 'complaint':
        return (
          <RoomSurveyDetail
            surveyType={'complaint'}
            sliderColor={'complaint'}
            surveyImage={'SurveyComplaint'}
          />
        );
      case 'done':
        return <RoomSurveyFinish />;
      default:
        return <RoomSurveyMain data={complateState} />;
    }
  };

  return (
    <div className="flex w-full flex-col justify-center">
      <SurveyHeader />
      <section className="relative">{renderPage()}</section>
    </div>
  );
}
