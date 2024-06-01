import { Button } from '@/components/ui/button';
import { CalendarProps } from '@/components/ui/calendar';
import { PopoverContent } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { PopoverClose, PopoverContentProps } from '@radix-ui/react-popover';
import React, { useState } from 'react';
import { formatDateToMM_DD, formatDateToYYYYMMDD } from '@/utils';
import { addMonths, isValid, parse } from 'date-fns';
import { ActiveModifiers } from 'react-day-picker';

enum ActivePreset {
  NONE = 'none',
  ONE_MONTH = 'one month',
  THREE_MONTH = 'three month',
  SIX_MONTH = 'six month',
  TWELVE_MONTH = 'twelve month',
  TWENTY_FOUR_MONTH = 'twenty four month',
}

enum DateRangeInput {
  FROM = 'from',
  TO = 'to',
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
  const [fromInputValue, setFromInputValue] = useState<string>(
    props.mode === 'range' && props.selected ? formatDateToYYYYMMDD(props.selected?.from) : '',
  );
  const [toInputValue, setToInputValue] = useState<string>(
    props.mode === 'range' && props.selected ? formatDateToYYYYMMDD(props.selected?.to) : '',
  );
  const [activePreset, setActivePreset] = useState<ActivePreset>(ActivePreset.ONE_MONTH);

  const handleClickPreset = (type: ActivePreset) => {
    if (!(props.mode === 'range' && props.onSelect)) return;

    const newDate = new Date();
    let newSelected;
    switch (type) {
      case ActivePreset.ONE_MONTH:
        newSelected = {
          from: addMonths(newDate, -1),
          to: newDate,
        };
        setActivePreset(ActivePreset.ONE_MONTH);
        break;
      case ActivePreset.THREE_MONTH:
        newSelected = {
          from: addMonths(newDate, -3),
          to: newDate,
        };
        setActivePreset(ActivePreset.THREE_MONTH);
        break;
      case ActivePreset.SIX_MONTH:
        newSelected = {
          from: addMonths(newDate, -6),
          to: newDate,
        };
        setActivePreset(ActivePreset.SIX_MONTH);
        break;
      case ActivePreset.TWELVE_MONTH:
        newSelected = {
          from: addMonths(newDate, -12),
          to: newDate,
        };
        setActivePreset(ActivePreset.TWELVE_MONTH);
        break;
      case ActivePreset.TWENTY_FOUR_MONTH:
        newSelected = {
          from: addMonths(newDate, -24),
          to: newDate,
        };
        setActivePreset(ActivePreset.TWENTY_FOUR_MONTH);
        break;
      default:
        newSelected = undefined;
    }

    props.onSelect(
      newSelected,
      newDate,
      // 아래의 두 인자는 react-day-picker 내부에서 동작할 때 필요한 값, 해당 로직에서는 사용될 일이 없어서 타입 예외 처리해주었음.
      undefined as unknown as ActiveModifiers,
      undefined as unknown as React.MouseEvent,
    );
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: DateRangeInput) => {
    if (!(props.mode === 'range' && props.onSelect)) return;
    if (e.target.value.length > 10) return; // yyyy/MM/dd 이상은 작성할 수 없음.
    let newValue = e.target.value;

    if (e.target.value.length === 4 || e.target.value.length === 7) {
      newValue += '/';
    }

    let newSelected;
    const parsedDate = parse(newValue, 'yyyy/MM/dd', new Date());

    switch (type) {
      case DateRangeInput.FROM:
        newSelected = {
          from: parsedDate,
          to: props.selected?.to,
        };
        setFromInputValue(newValue);
        break;
      case DateRangeInput.TO:
        newSelected = {
          from: props.selected?.from,
          to: parsedDate,
        };
        setToInputValue(newValue);
        break;
    }

    if (!isValid(parsedDate)) newSelected = undefined;

    props.onSelect(
      newSelected,
      // 아래의 세 인자는 react-day-picker 내부에서 동작할 때 필요한 값, 해당 로직에서는 사용될 일이 없어서 타입 예외 처리해주었음.
      undefined as unknown as Date,
      undefined as unknown as ActiveModifiers,
      undefined as unknown as React.MouseEvent,
    );
  };

  return (
    <PopoverContent
      className="flex w-fit flex-col px-2 py-2"
      align="start"
      {...popoverContentProps}>
      {!hiddenPreset && (
        <div className="border-b border-stroke">
          <ul className="menu px-0 py-0 text-body1">
            <li
              onClick={() => handleClickPreset(ActivePreset.ONE_MONTH)}
              className={cn({ 'bg-accent': activePreset === ActivePreset.ONE_MONTH })}>
              <a>1개월</a>
            </li>
            <li
              onClick={() => handleClickPreset(ActivePreset.THREE_MONTH)}
              className={cn({ 'bg-accent': activePreset === ActivePreset.THREE_MONTH })}>
              <a>3개월</a>
            </li>
            <li
              onClick={() => handleClickPreset(ActivePreset.SIX_MONTH)}
              className={cn({ 'bg-accent': activePreset === ActivePreset.SIX_MONTH })}>
              <a>6개월</a>
            </li>
            <li
              onClick={() => handleClickPreset(ActivePreset.TWELVE_MONTH)}
              className={cn({ 'bg-accent': activePreset === ActivePreset.TWELVE_MONTH })}>
              <a>12개월</a>
            </li>
            <li
              onClick={() => handleClickPreset(ActivePreset.TWENTY_FOUR_MONTH)}
              className={cn({ 'bg-accent': activePreset === ActivePreset.TWENTY_FOUR_MONTH })}>
              <a>24개월</a>
            </li>
          </ul>
        </div>
      )}
      <div className="w-fit">
        <div className="px-3 py-3 text-body1">직접 설정</div>
        <div className="flex w-fit items-center justify-center rounded-mobile-stroke border px-2 py-2 text-body4 placeholder:text-body4">
          <div className="flex w-[90px] items-center justify-center">
            <input
              className="w-[80px] focus:outline-none focus-visible:outline"
              value={fromInputValue}
              onChange={e => handleDateInputChange(e, DateRangeInput.FROM)}
              placeholder="YYYY/MM/DD"
            />
          </div>
          ~
          <div className="flex w-[90px] items-center justify-center">
            <input
              className="w-[80px] focus:outline-none focus-visible:outline"
              value={toInputValue}
              onChange={e => handleDateInputChange(e, DateRangeInput.TO)}
              placeholder="YYYY/MM/DD"
            />
          </div>
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
