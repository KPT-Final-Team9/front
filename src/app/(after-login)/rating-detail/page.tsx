import RatingDetailDataTable from '@/app/(after-login)/rating-detail/_component/RatingDetailDataTable';
import BookmarkButtons from '@/app/(after-login)/rating-detail/_component/BookmarkButtons';
import RatingDeatilSearchInput from '@/app/(after-login)/rating-detail//_component/RatingDeatilSearchInput';
import RatingDetailFilter from './_component/RatingDetailFilter';

export default function Page() {
  return (
    <section className="w-full">
      <div className="flex flex-grow flex-col-reverse justify-between gap-4 desktop:flex-row">
        <div className="mb-8 flex w-full justify-between">
          <BookmarkButtons />
          <div className="desktop:display-block display-hidden">
            <RatingDetailFilter />
          </div>
        </div>
        <div className="flex-shrink-0">
          <RatingDeatilSearchInput />
        </div>
      </div>
      <div className="mb-10">
        <RatingDetailDataTable />
      </div>
    </section>
  );
}
