import { AlertDialogDescription, AlertDialogTitle } from '@/components/ui/alert-dialog';
import BoxImportant from '@img/box_important.png';
import StarImg from '@img/Star.png';
import BaseModal from '@/components/modals/BaseModal';
import { useMainModalStore, useCompleteModalStore } from '@/app/(after-login)/dashboard/@RatingTrends/_store';
import { useState } from 'react';

// 대표호실 설정 모달.
export function MainRoomSetting() {
  // api연동후 roomId 바인딩.
  const { ModalState, setModal, roomId } = useMainModalStore();
  const { setModal: setCompleteModal } = useCompleteModalStore();

  const [isLoading, setIsLoading] = useState(false);

  const fetchMainRoom = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setModal(false);
      // 완료모달 출력
      setCompleteModal(true);
    }, 2000);
  };
  const header = (
    <div className="flex flex-col gap-4">
      <div>
        <AlertDialogDescription className="text-h4 text-text-primary">미왕빌딩 A동 201호를</AlertDialogDescription>
        <AlertDialogDescription className="mb-3 text-h4 text-text-primary">
          대표호실로 등록하시겠습니까?
        </AlertDialogDescription>
      </div>
    </div>
  );

  return (
    <BaseModal
      isOpen={ModalState}
      header={header}
      imgSrc={BoxImportant}
      acceptText={'네, 등록하겠습니다'}
      cancelText={'아니요, 취소하겠습니다'}
      setClose={setModal}
      onAcceptClick={fetchMainRoom}
      isLoading={isLoading}
    />
  );
}

// 완료시 출력되는 모달
export function MainRoomSettingComplete() {
  const { modalState, setModal } = useCompleteModalStore();
  const header = (
    <div className="flex flex-col gap-4">
      <AlertDialogTitle className="text-h4 text-text-primary">대표호실 등록 완료</AlertDialogTitle>
    </div>
  );
  return (
    <BaseModal
      isOpen={modalState}
      header={header}
      isCloseButton={false}
      imgSrc={StarImg}
      acceptText={'넹'}
      onAcceptClick={() => {
        setModal(false);
      }}
    />
  );
}
