'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { FieldErrors, UseFormRegister, UseFormResetField, UseFormSetFocus, UseFormWatch } from 'react-hook-form';
import ErrorMessage from '@Atoms/text/ErrorMessage';
import { LocalIcon } from '@icon/index';

interface OpinionTextField {
  errorMessage: FieldErrors<any>;
  placeholder?: string;
  IsError: boolean;
  register: UseFormRegister<any>;
  id: string;
  watch: UseFormWatch<any>;
  resetField: UseFormResetField<any>;
  setFocus: UseFormSetFocus<any>;
}

// CommonTextField에서 active 컬러 변경(text, border)
export default function OpinionTextField({
  errorMessage,
  placeholder,
  id,
  register,
  watch,
  resetField,
  setFocus,
}: OpinionTextField) {
  const inputValue = watch(id);
  const [isFocused, setIsFocused] = useState(false);

  // 아이콘 클릭시 값삭제후 focus
  const onIconClick = () => {
    resetField(id);
    setFocus(id);
  };
  const borderColor = isFocused ? 'border-primary' : !inputValue ? 'border-gray-200' : 'border-black';
  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn('flex flex-row justify-between border-b border-primary text-text-primary', borderColor)}>
        <input
          className="grow outline-none"
          type="text"
          placeholder={placeholder}
          {...register(id)}
        />

        {inputValue && id !== 'score' && (
          <LocalIcon
            name="XIcon"
            onClick={onIconClick}
            className="cursor-pointer"
          />
        )}
      </div>
      <ErrorMessage className="min-h-[4px]">{errorMessage[id]?.message as string}</ErrorMessage>
    </div>
  );
}
