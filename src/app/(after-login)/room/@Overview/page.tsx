import ContractInfoServerComp from '@/app/(after-login)/room/@Overview/_component/ContractInfoServerComp';
import MyRoomScoreServerComp from '@/app/(after-login)/room/@Overview/_component/MyRoomScoreServerComp';
import RatingCompareComp from '@/app/(after-login)/room/@Overview/_component/RatingCompareComp';

export default function Page() {
  return (
    <>
      호실별 페이지 개요
      <section className="flex flex-col rounded-container bg-white desktop:flex-row">
        <div className="flex flex-col gap-2 rounded-container bg-white">
          <ContractInfoServerComp />
          <MyRoomScoreServerComp />
        </div>
        <div className="w-full rounded-container">
          <RatingCompareComp />
        </div>
      </section>
    </>
  );
}
