import { useRouter } from 'next/navigation';
import { useState } from 'react';

import WritingHand from '@img/writing_hand.png';
import SurveyReminderModal from '@/components/modals/SurveyReminderModal';
import { AlertDialogDescription } from '@/components/ui/alert-dialog';
import { useMidReminderModalStore } from '@/app/(after-login)/user-survey/_store';

export default function RoomSurveyMidModal() {
  const { MidModalState, setMidModal } = useMidReminderModalStore();
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleNextStepClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMidModal(false);
      router.replace('/user-survey');
    }, 500);
  };

  const header = (
    <div className="flex flex-col gap-4">
      <div>
        <AlertDialogDescription className="text-center text-h4 text-text-primary">
          벌써 평가 날이 다가왔어요
        </AlertDialogDescription>
        <AlertDialogDescription className="mt-4 text-center text-body2 text-text-secondary">
          미왕빌딩 마스터님의 소중한 의견으로 <br /> 오피스를 더욱 즐겁고 편안하게 만들어봐요
        </AlertDialogDescription>
      </div>
    </div>
  );

  return (
    <SurveyReminderModal
      isOpen={MidModalState}
      header={header}
      imgSrc={WritingHand}
      acceptText={'평가하러 가기'}
      cancelText={'다음에 하기'}
      setClose={setMidModal}
      onAcceptClick={() => setMidModal(false)}
      onCancleClick={handleNextStepClick}
      isLoading={isLoading}
    />
  );
}
