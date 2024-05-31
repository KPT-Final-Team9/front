import { Button } from '@/components/ui/button';
import { Calendar, CalendarProps } from '@/components/ui/calendar';
import { PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { PopoverClose, PopoverContentProps } from '@radix-ui/react-popover';
import React from 'react';
import { ko } from 'date-fns/locale';

export default function DatePicker({
  popoverContentProps,
  mode = 'range',
  className,
  ...props
}: CalendarProps & { popoverContentProps?: PopoverContentProps }) {
  return (
    <PopoverContent
      className="flex w-[455px] px-0 py-0"
      align="start"
      {...popoverContentProps}>
      <aside className="w-[133px] border-r border-stroke py-3">
        <ul>
          <li className="cursor-pointer px-4 py-3 transition hover:bg-icon-bg active:bg-primary active:text-white">
            1개월
          </li>
          <li className="cursor-pointer px-4 py-3 transition hover:bg-icon-bg active:bg-primary active:text-white">
            3개월
          </li>
          <li className="cursor-pointer px-4 py-3 transition hover:bg-icon-bg active:bg-primary active:text-white">
            6개월
          </li>
          <li className="cursor-pointer px-4 py-3 transition hover:bg-icon-bg active:bg-primary active:text-white">
            12개월
          </li>
          <li className="cursor-pointer px-4 py-3 transition hover:bg-icon-bg active:bg-primary active:text-white">
            24개월
          </li>
        </ul>
      </aside>
      <div className="w-[322px]">
        <Calendar
          locale={ko}
          className={cn('border-b border-stroke', className)}
          {...props}
        />
        <footer className="flex h-[71px] justify-end gap-8 px-4 py-4">
          <PopoverClose>
            <Button
              className="w-[128px]"
              size="sm"
              variant="primary">
              설정 완료
            </Button>
          </PopoverClose>
        </footer>
      </div>
    </PopoverContent>
  );
}
