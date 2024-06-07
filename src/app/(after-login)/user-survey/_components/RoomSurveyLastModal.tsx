import { useRouter } from 'next/navigation';
import { useState } from 'react';

import PushingHand from '@img/pushing_hand.png';
import SurveyReminderModal from '@/components/modals/SurveyReminderModal';
import { AlertDialogDescription } from '@/components/ui/alert-dialog';
import { useLastReminderModalStore } from '@/app/(after-login)/user-survey/_store';

export default function RoomSurveyModal() {
  const { LastModalState, setLastModal } = useLastReminderModalStore();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleNextStepClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setLastModal(false);
      router.replace('/user-survey');
    }, 500);
  };

  const header = (
    <div className="flex flex-col gap-4">
      <div>
        <AlertDialogDescription className="text-center text-h4 text-text-primary">
          잠깐만요! <br /> 아직 평가 전이예요
        </AlertDialogDescription>
        <AlertDialogDescription className="mt-4 text-body2 text-text-secondary">
          <p className="mb-2">
            다른 호실은 평가 정보로 서비스가 개선되어 <br /> 이용 만족도가 높아졌어요!
          </p>
          <p>
            더욱 만족스러운 오피스 생활을 위해 <br /> 잠깐만 시간을 내볼까요?
          </p>
        </AlertDialogDescription>
      </div>
    </div>
  );

  return (
    <SurveyReminderModal
      isOpen={LastModalState}
      header={header}
      imgSrc={PushingHand}
      acceptText={'지금 바로 평가하기'}
      cancelText={'다음에 하기'}
      setClose={setLastModal}
      onAcceptClick={() => setLastModal(false)}
      onCancleClick={handleNextStepClick}
      isLoading={isLoading}
    />
  );
}
