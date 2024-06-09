'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import surveyView from '@/asset/images/surveyView.png';
import surveyGnb from '@/asset/images/surveyGnb.png';
import { useMidReminderModalStore, useLastReminderModalStore } from '@/app/(after-login)/user-survey/_store';
import { LocalIcon } from '@icon/index';
import { scheduleRegularAlarms } from '@/utils';

import { baseApis } from '@/services/api';

export default function Page() {
  const router = useRouter();
  const { setMidModal } = useMidReminderModalStore();
  const { setLastModal } = useLastReminderModalStore();
  const [scoreData, setScoreData] = useState(false);

  const handleSurveyButtonClick = () => {
    router.push('/user-survey/scores'); // 히스토리 저장을 위해 push로 이동
  };

  // TODO: middleDayTest는 모달 확인용으로 추후 삭제하고, middleDate로 바꾸기
  useEffect(() => {
    const { middleDate, lastDate, middleDayTest } = scheduleRegularAlarms();

    if (middleDate) {
      setMidModal(true);
    } else if (lastDate) {
      setLastModal(true);
    } else {
      setMidModal(false);
      setLastModal(false);
    }

    async function fetchData() {
      try {
        const fetchInstance = await baseApis();

        const response = await fetchInstance('/scores/in-progress', {
          cache: 'no-store',
          method: 'get',
        }).then(res => res.json());

        const evaluationStatus = response.map((data: { score: number }) => data.score).includes(-1);
        setScoreData(evaluationStatus);
      } catch (error) {
        console.error('Error fetching Unsplash data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="flex flex-col justify-center bg-background">
      <div className="relative">
        <Image
          src={surveyView}
          alt="survey view bg"
          width={375}
          height={813}
          style={{ width: 375, height: 813 }}
          priority
        />

        {/* 평가 알람 뱃지 */}
        {scoreData ? (
          <div className="absolute left-[75px] top-[490px] z-50 h-[6px] w-[6px] rounded-full bg-primary-badge-new"></div>
        ) : (
          ''
        )}

        <LocalIcon
          name={'SurveyIcon'}
          width={32}
          height={58}
          className="absolute left-[49px] top-[495px] cursor-pointer active:scale-[.98]"
          onClick={handleSurveyButtonClick}
        />

        {/* mobile view GNB */}
        <Image
          src={surveyGnb}
          alt="survey gnb"
          width={375}
          height={180}
          // style={{ width: 375, height: 180 }} // FIXME: 해당 이미지에 적용시 세로 비율이 늘어나서 해결방법 찾아야 함
          priority
          className="z-100 absolute bottom-0"
        />
      </div>
    </section>
  );
}
