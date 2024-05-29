import RatingDetailDataTable from './_component/RatingDetailDataTable';

export default function Page() {
  return (
    <section className="w-full">
      <div className="flex flex-grow flex-col-reverse justify-between desktop:flex-row">
        <div className="mb-8 flex w-full justify-between">
          <div className="flex gap-2 desktop:gap-4">
            <div>전체보기</div>
            <div>북마크 모아보기</div>
          </div>
          <div className="desktop:display-block display-hidden">옵션 선택</div>
        </div>
        <div className="flex-shrink-0 desktop:ml-12">검색어 입력</div>
      </div>
      <div className="mb-10">
        <RatingDetailDataTable />
      </div>
    </section>
  );
}
