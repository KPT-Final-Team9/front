import SurveyHeader from '@/app/(after-login)/user-survey/_components/SurveyHeader';

export default function Page({ params }: { params: { surveyStep: string } }) {
  return (
    <>
      <SurveyHeader />
      <div className="px-4">{params.surveyStep}</div>
    </>
  );
}
