import ContractInfoServerComp from '@/app/(after-login)/room/@Overview/_component/ContractInfoServerComp';
import MyRoomScoreServerComp from '@/app/(after-login)/room/@Overview/_component/MyRoomScoreServerComp';

export default function Page() {
  return (
    <>
      호실별 페이지 개요
      <section className="flex">
        <div className="flex flex-col gap-2 rounded-bl-container rounded-tl-container bg-white">
          <ContractInfoServerComp />
          <MyRoomScoreServerComp />
        </div>
        <div className="bg-white">{/* 임대 지표 비교 섹션 추가 필요 */}임대 지표 섹션</div>
      </section>
    </>
  );
}
