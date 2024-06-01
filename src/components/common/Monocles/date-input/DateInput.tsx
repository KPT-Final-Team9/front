import { Button } from '@/components/ui/button';
import { CalendarProps } from '@/components/ui/calendar';
import { PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { PopoverClose, PopoverContentProps } from '@radix-ui/react-popover';
import React, { useState } from 'react';
import { formatDateToMM_DD, formatDateToYYYYMMDD } from '@/utils';
import { addMonths } from 'date-fns';
import { ActiveModifiers } from 'react-day-picker';

enum ActivePreset {
  NONE = 'none',
  ONE_MONTH = 'one month',
  THREE_MONTH = 'three month',
  SIX_MONTH = 'six month',
  TWELVE_MONTH = 'twelve month',
  TWENTY_FOUR_MONTH = 'twenty four month',
}

export default function DateInput({
  popoverContentProps,
  className,
  hiddenPreset,
  ...props
}: CalendarProps & {
  popoverContentProps?: PopoverContentProps;
  hiddenPreset?: boolean;
}) {
  const [activePreset, setActivePreset] = useState<ActivePreset>(ActivePreset.ONE_MONTH);
  const onClick1Month = () => {
    if (props.mode === 'range' && props.onSelect) {
      const newDate = new Date();
      props.onSelect(
        {
          from: addMonths(newDate, -1),
          to: newDate,
        },
        newDate,
        // 아래의 두 인자는 react-day-picker 내부에서 동작할 때 필요한 값, 해당 로직에서는 사용될 일이 없어서 타입 예외 처리해주었음.
        undefined as unknown as ActiveModifiers,
        undefined as unknown as React.MouseEvent,
      );
      setActivePreset(ActivePreset.ONE_MONTH);
    }
  };
  const onClick3Month = () => {
    if (props.mode === 'range' && props.onSelect) {
      const newDate = new Date();
      props.onSelect(
        {
          from: addMonths(newDate, -3),
          to: newDate,
        },
        newDate,
        // 아래의 두 인자는 react-day-picker 내부에서 동작할 때 필요한 값, 해당 로직에서는 사용될 일이 없어서 타입 예외 처리해주었음.
        undefined as unknown as ActiveModifiers,
        undefined as unknown as React.MouseEvent,
      );
      setActivePreset(ActivePreset.THREE_MONTH);
    }
  };
  const onClick6Month = () => {
    if (props.mode === 'range' && props.onSelect) {
      const newDate = new Date();
      props.onSelect(
        {
          from: addMonths(newDate, -6),
          to: newDate,
        },
        newDate,
        // 아래의 두 인자는 react-day-picker 내부에서 동작할 때 필요한 값, 해당 로직에서는 사용될 일이 없어서 타입 예외 처리해주었음.
        undefined as unknown as ActiveModifiers,
        undefined as unknown as React.MouseEvent,
      );
      setActivePreset(ActivePreset.SIX_MONTH);
    }
  };
  const onClick12Month = () => {
    if (props.mode === 'range' && props.onSelect) {
      const newDate = new Date();
      props.onSelect(
        {
          from: addMonths(newDate, -12),
          to: newDate,
        },
        newDate,
        // 아래의 두 인자는 react-day-picker 내부에서 동작할 때 필요한 값, 해당 로직에서는 사용될 일이 없어서 타입 예외 처리해주었음.
        undefined as unknown as ActiveModifiers,
        undefined as unknown as React.MouseEvent,
      );
      setActivePreset(ActivePreset.TWELVE_MONTH);
    }
  };
  const onClick24Month = () => {
    if (props.mode === 'range' && props.onSelect) {
      const newDate = new Date();
      props.onSelect(
        {
          from: addMonths(newDate, -24),
          to: newDate,
        },
        newDate,
        // 아래의 두 인자는 react-day-picker 내부에서 동작할 때 필요한 값, 해당 로직에서는 사용될 일이 없어서 타입 예외 처리해주었음.
        undefined as unknown as ActiveModifiers,
        undefined as unknown as React.MouseEvent,
      );
      setActivePreset(ActivePreset.TWENTY_FOUR_MONTH);
    }
  };

  return (
    <PopoverContent
      className="flex w-min flex-col px-2 py-2"
      align="start"
      {...popoverContentProps}>
      {!hiddenPreset && (
        <div className="w-[192px] border-b border-stroke">
          <ul className="menu px-0 py-0 text-body1">
            <li
              onClick={onClick1Month}
              className={cn({ 'bg-accent': activePreset === ActivePreset.ONE_MONTH })}>
              <a>1개월</a>
            </li>
            <li
              onClick={onClick3Month}
              className={cn({ 'bg-accent': activePreset === ActivePreset.THREE_MONTH })}>
              <a>3개월</a>
            </li>
            <li
              onClick={onClick6Month}
              className={cn({ 'bg-accent': activePreset === ActivePreset.SIX_MONTH })}>
              <a>6개월</a>
            </li>
            <li
              onClick={onClick12Month}
              className={cn({ 'bg-accent': activePreset === ActivePreset.TWELVE_MONTH })}>
              <a>12개월</a>
            </li>
            <li
              onClick={onClick24Month}
              className={cn({ 'bg-accent': activePreset === ActivePreset.TWENTY_FOUR_MONTH })}>
              <a>24개월</a>
            </li>
          </ul>
        </div>
      )}
      <div>
        <div className="px-3 py-3 text-body1">직접 설정</div>
        <div className="flex flex-nowrap items-center justify-center rounded-mobile-stroke border px-2 py-2 text-body4">
          <span>{props.mode === 'range' && props.selected && formatDateToYYYYMMDD(props.selected.from)}</span> ~
          <span>{props.mode === 'range' && props.selected && formatDateToYYYYMMDD(props.selected.to)}</span>
        </div>
        <footer className="mt-4 flex justify-end gap-8">
          <PopoverClose>
            <Button
              className="w-[90px] rounded-[6px]"
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
