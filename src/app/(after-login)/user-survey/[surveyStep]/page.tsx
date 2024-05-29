export default function Page({ params }: { params: { surveyStep: string } }) {
  return (
    <>
      <div className="px-4">{params.surveyStep}</div>
    </>
  );
}
