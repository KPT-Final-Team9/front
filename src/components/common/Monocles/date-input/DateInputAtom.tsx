import { CalendarProps } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';
import { formatDateToYYYYMMDD, formatDateToYYYY_MM_DD } from '@/utils';
import { isValid, parse } from 'date-fns';
import { ActiveModifiers } from 'react-day-picker';
import { ClassNameValue } from 'tailwind-merge';

export default function DateInputAtom({
  containerClassName,
  className,
  hiddenPreset,
  ...props
}: CalendarProps & {
  containerClassName?: ClassNameValue;
  hiddenPreset?: boolean;
}) {
  console.log(props.selected);
  const [inputValue, setInputValue] = useState<string>(
    props.mode === 'single' && props.selected ? formatDateToYYYY_MM_DD(props.selected) : '',
  );
  const [isError, setIsError] = useState(false);
  const isBackspacePressed = useRef(false);

  // input의 이벤트는 1. keydown 2. 키 입력으로 change 이벤트 발생 순서로 동작함.
  // 따라서 onKeydown 핸들러를 만들고 ref로 관리해주면, change 이벤트에서 입력된 키가 backspace인지 캐치할 수 있음.
  const handleDateInputKeydown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      isBackspacePressed.current = true;
    } else {
      isBackspacePressed.current = false;
    }
  };

  const handleDateInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!(props.mode === 'single' && props.onSelect)) return;
    if (e.target.value.length > 10) return; // yyyy/MM/dd 이상은 작성할 수 없음.
    let newValue = e.target.value;

    // 입력된 키가 backspace가 아니면서 YYYY 혹은 YYYY/MM일 때 '/'를 자동으로 추가해줌.
    if (!isBackspacePressed.current && (e.target.value.length === 4 || e.target.value.length === 7)) {
      newValue += '.';
    }

    // 직접 사용해보니, 자동으로 '/'가 삭제되니 오타 발생이 오히려 늘었음.
    // 추가는 자동으로 되는게 좋으나, 삭제는 파괴적인 행동이기 때문에 좋지 않은 UX로 판단하여 주석처리함.
    // if (isBackspacePressed.current && (e.target.value.length === 8 || e.target.value.length === 5)) {
    //   const newValueArr = newValue.split('');
    //   newValueArr.pop();
    //   newValue = newValueArr.join('');
    // }

    let newSelected;
    const parsedDate = parse(newValue, 'yyyy.MM.dd', new Date());

    setIsError(false);
    setInputValue(newValue);
    newSelected = parsedDate;

    if (!isValid(parsedDate) || newValue.length !== 10) {
      setIsError(true);

      newSelected = props.selected;
    }

    props.onSelect(
      newSelected,
      // 아래의 세 인자는 react-day-picker 내부에서 동작할 때 필요한 값, 해당 로직에서는 사용될 일이 없어서 타입 예외 처리해주었음.
      undefined as unknown as Date,
      undefined as unknown as ActiveModifiers,
      undefined as unknown as React.MouseEvent,
    );
  };

  useEffect(() => {
    props.mode === 'single' && setInputValue(formatDateToYYYY_MM_DD(props.selected));
  }, [props.selected]);

  return (
    <input
      className={cn(
        'h-10 w-[134px] rounded-sm border p-2 text-body2 placeholder:text-body2 focus:outline-none focus-visible:outline desktop:w-[180px]',
        {
          'text-destructive': isError,
        },
        className,
      )}
      value={inputValue}
      onChange={handleDateInputChange}
      onKeyDown={handleDateInputKeydown}
      placeholder="YYYY.MM.DD"
    />
  );
}
