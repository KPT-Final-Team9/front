export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="min-h-[87px] w-full bg-white">
        <div className="mx-auto flex h-full max-w-[1440px]">hi</div>
      </div>
      <div className="desktopMaxW:p-0 mx-auto min-w-[359px] max-w-[1440px] px-4">{children}</div>
    </div>
  );
}
