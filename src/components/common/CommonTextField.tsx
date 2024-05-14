import React, { useState } from 'react';
import IconButton from './IconButton';
import { XIcon } from '../icon/Icons';
import ErrorMessage from './ErrorMessage';
import { cn } from '@/lib/utils';
import { FieldErrors, UseFormRegister, UseFormResetField, UseFormSetFocus, UseFormWatch } from 'react-hook-form';

interface CommonTextField {
  errorMessage: FieldErrors<any>;
  placeholder: string;
  IsError: boolean;
  register: UseFormRegister<any>;
  id: string;
  watch: UseFormWatch<any>;
  resetField: UseFormResetField<any>;
  setFocus: UseFormSetFocus<any>;
}

export default function CommonTextField({
  errorMessage,
  placeholder,
  IsError,
  id,
  register,
  watch,
  resetField,
  setFocus,
}: CommonTextField) {
  const inputValue = watch(id);
  const [isFocused, setIsFocused] = useState(false);

  // 아이콘 클릭시 값삭제후 focus
  const onIconClick = () => {
    resetField(id);
    setFocus(id);
  };
  const borderColor = isFocused ? 'border-emerald-400' : !inputValue ? 'border-gray-200' : 'border-black';
  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn('flex flex-row justify-between border-b border-primary text-primary', borderColor)}>
        <input
          className="grow outline-none"
          type="text"
          placeholder={placeholder}
          {...register(id)}
        />

        {inputValue && (
          <IconButton onClick={onIconClick}>
            <XIcon />
          </IconButton>
        )}
      </div>
      <ErrorMessage className="min-h-[40px]">{errorMessage[id]?.message as string}</ErrorMessage>
    </div>
  );
}
