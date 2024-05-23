export default function Layout({ evercomp, barservice }: { evercomp: React.ReactNode; barservice: React.ReactNode }) {
  return (
    <div className="flex bg-background">
      <section className="mx-auto flex max-w-[1440px] flex-col items-start justify-center">
        <div className="flex flex-row desktop:gap-14">
          <div className="mx-auto mb-[30px] flex">{evercomp}</div>
          <div className="relative hidden w-[336px] desktop:block">
            <div className="absolute h-[700px] w-[inherit] bg-white">
              <div>123123</div>
            </div>
          </div>
        </div>
        <div className="mb-4 block h-[281px] w-full bg-white desktop:hidden"></div>
        <div className="w-full">{barservice}</div>
      </section>
    </div>
  );
}
