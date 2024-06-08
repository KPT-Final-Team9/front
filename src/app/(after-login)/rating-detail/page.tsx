import RatingDetailDataTable from '@/app/(after-login)/rating-detail/_component/RatingDetailDataTable';
import BookmarkButtons from '@/app/(after-login)/rating-detail/_component/BookmarkButtons';
import RatingDeatilSearchInput from '@/app/(after-login)/rating-detail//_component/RatingDeatilSearchInput';
import RatingDetailFilter from './_component/RatingDetailFilter';

export default function Page() {
  return (
    <section className="mb-20 w-full desktop:mb-0">
      <div className="relative mb-4 flex flex-grow flex-col-reverse justify-between gap-4 desktop:mb-8 desktop:flex-row">
        {/* <div className="mb-8 flex w-full justify-between">
          <BookmarkButtons />
          <div className="desktop:display-block display-hidden">
            <RatingDetailFilter />
          </div>
        </div>
        <div className="flex-shrink-0">
          <RatingDeatilSearchInput />
        </div> */}
        <div className="absolute flex-shrink-0 desktop:static">
          <RatingDetailFilter />
        </div>
        <div className="flex w-full flex-col justify-between gap-5 desktop:flex-row">
          <RatingDeatilSearchInput />
          <div className="self-end">
            <BookmarkButtons />
          </div>
        </div>
      </div>
      <div className="mb-10">
        <RatingDetailDataTable />
      </div>
    </section>
  );
}
