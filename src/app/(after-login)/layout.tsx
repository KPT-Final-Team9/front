import DesktopGNB from '@Organisms/navigation/DesktopGNB';
import MobileGNB from '@Organisms/navigation/MobileGNB';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <DesktopGNB />
      <MobileGNB />
      <div className="mx-auto min-w-[359px] max-w-[1440px] px-4 desktopMaxW:p-0">{children}</div>
    </div>
  );
}
