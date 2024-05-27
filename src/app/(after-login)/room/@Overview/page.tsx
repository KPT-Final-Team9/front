import ContractInfoServerComp from '@/app/(after-login)/room/@Overview/_component/ContractInfoServerComp';
import MyRoomScoreServerComp from '@/app/(after-login)/room/@Overview/_component/MyRoomScoreServerComp';

export default function Page() {
  return (
    <>
      호실별 페이지 개요
      <MyRoomScoreServerComp />
      <ContractInfoServerComp />
    </>
  );
}
