'use client';
import { AlertDialogDescription, AlertDialogTitle } from '@/components/ui/alert-dialog';
import BoxImportant from '@img/box_important.png';
import StarImg from '@img/Star.png';
import BaseModal from '@/components/modals/BaseModal';
import { useMainModalStore, useCompleteModalStore } from '@/app/(after-login)/dashboard/@RatingTrends/_store';
import { useState } from 'react';
import { fetchJsonData } from '@/services/api';
import { QueryOptions } from '@/constants/index';
import { useRouter, useSearchParams } from 'next/navigation';
import { useFailedModalStore, useRepresentRoomStore } from '@/app/(after-login)/dashboard/@RatingTrends/_store/index';
// 대표호실 설정 모달.
export function MainRoomSetting() {
  // api연동후 roomId 바인딩.
  const { ModalState, setModal, roomId, roomName } = useMainModalStore();
  const { setModal: setCompleteModal } = useCompleteModalStore();
  const { setModal: setFailedModal } = useFailedModalStore();
  const { representRoomId, setRepresentRoom } = useRepresentRoomStore();
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const buildingId = searchParams.get(QueryOptions.Id);
  const buildingName = searchParams.get(QueryOptions.BuildingName);

  const fetchQuarterlyScore = async ({
    buildingId,
    roomId,
  }: {
    buildingId: string | null;
    roomId: number | string | null;
  }) => {
    return fetchJsonData(
      // TODO: pageable 객체 풀어달라하기
      `/buildings/${buildingId}/rooms/${roomId}/setting-represent?page=0&size=1&sort=`,
      { cache: 'no-store', method: 'PATCH' },
    );
  };

  const fetchMainRoom = async () => {
    setIsLoading(true);
    // /buildings/1/rooms/3/setting-represent?page=0&size=1&sort=
    try {
      if (buildingId && roomId) {
        console.log(buildingId, roomId);
        await fetchQuarterlyScore({ buildingId: buildingId, roomId: roomId });
        setIsLoading(false);
        setModal(false);
        setRepresentRoom(roomId);
        setCompleteModal(true);
      } else {
        throw new Error('not found roomName or buildingName');
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setModal(false);
      // 실패모달 출력
      setFailedModal(true);
    }
  };
  const header = (
    <div className="flex flex-col gap-4">
      <div>
        <div className="flex">
          <AlertDialogDescription className="text-h4 text-blue-700">
            {`${buildingName}
             ${roomName}`}
          </AlertDialogDescription>
          <AlertDialogDescription className="text-h4 text-text-primary">를</AlertDialogDescription>
        </div>
        <AlertDialogDescription className="mb-3 text-h4 text-text-primary">
          대표 호실로 등록하시겠습니까?
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
  const router = useRouter();
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
      acceptText={'대시보드로 돌아가기'}
      onAcceptClick={() => {
        setModal(false);
        router.refresh();
      }}
    />
  );
}

// 실패시 출력되는 모달
export function MainRoomSettingFailed() {
  const { modalState, setModal } = useFailedModalStore();
  const header = (
    <div className="flex flex-col gap-4">
      <AlertDialogTitle className="text-h4 text-text-primary">대표호실 등록 실패</AlertDialogTitle>
    </div>
  );
  return (
    <BaseModal
      isOpen={modalState}
      header={header}
      isCloseButton={false}
      imgSrc={BoxImportant}
      acceptText={'대시보드로 돌아가기'}
      onAcceptClick={() => {
        setModal(false);
      }}
    />
  );
}
