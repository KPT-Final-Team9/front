import SurveyHeader from '@/app/(after-login)/user-survey/_components/SurveyHeader';
import RoomSurveyMain from '@/app/(after-login)/user-survey/_components/RoomSurveyMain';
import RoomSurveyDetail from '@/app/(after-login)/user-survey/_components/RoomSurveyDetail';
import RoomSurveyFinish from '@/app/(after-login)/user-survey/_components/RoomSurveyFinish';

export default function Page({ searchParams }: { searchParams: { id: string } }) {
  /**
   * 라우팅 주소
   * /user-servey/steps
   * /user-survey/scores?id=manage ...
   */

  const scoreId = searchParams.id;

  // TODO: 쿼리별 페이지는 평가 페이지 컴포넌트 구현 후 작업하기
  const renderPage = () => {
    switch (scoreId) {
      case 'manage':
        return (
          <RoomSurveyDetail
            surveyType={'manage'}
            sliderColor={'manage'}
            surveyImage={'SurveyManage'}
          />
        );
      case 'facility':
        return (
          <RoomSurveyDetail
            surveyType={'facility'}
            sliderColor={'facility'}
            surveyImage={'SurveyFacility'}
          />
        );
      case 'complaint':
        return (
          <RoomSurveyDetail
            surveyType={'complaint'}
            sliderColor={'complaint'}
            surveyImage={'SurveyComplaint'}
          />
        );
      case 'done':
        return <RoomSurveyFinish />;
      default:
        return <RoomSurveyMain />;
    }
  };

  return (
    <div className="flex w-full flex-col justify-center">
      <SurveyHeader />
      <section>{renderPage()}</section>
    </div>
  );
}
