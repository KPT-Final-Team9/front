import { cn } from '@/lib/utils';

export default function MobileGNB() {
  return (
    <nav
      className={cn(
        'h-gnb fixed bottom-0 left-0 right-0 z-40 flex w-full border-t border-stroke bg-white desktop:hidden',
      )}>
      네비
    </nav>
  );
}
