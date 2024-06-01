import SurveyHeader from '@/app/(after-login)/user-survey/_components/SurveyHeader';
import RoomSurveyMain from '../_components/RoomSurveyMain';

export default function Page({ params }: { params: { surveyStep: string } }) {
  const { surveyStep } = params;

  const surveyStepValue = surveyStep.includes('step-2') ? surveyStep[1] : surveyStep.toString();

  // FIXME: 라우팅 방식 변경해야 함
  const renderPage = () => {
    switch (surveyStepValue) {
      case 'step-1':
        return <RoomSurveyMain />;
      case '1':
        return '평가1';
      case '2':
        return '평가2';
      case '3':
        return '평가3';
      case 'step-3':
        return '완료';
    }
  };

  return (
    <div className="flex w-full flex-col justify-center">
      <SurveyHeader />
      <section>{renderPage()}</section>
    </div>
  );
}
