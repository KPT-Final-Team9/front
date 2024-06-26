import { cn } from '@/lib/utils';
import React from 'react';
import ErrorMessage from '@Atoms/text/ErrorMessage';
import { FieldErrors, UseFormRegister, UseFormResetField, UseFormSetFocus, UseFormWatch } from 'react-hook-form';

interface CommonTextField extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: FieldErrors<any>;
  placeholder: string;
  register: UseFormRegister<any>;
  id: string;
  watch?: UseFormWatch<any>;
  resetField?: UseFormResetField<any>;
  setFocus?: UseFormSetFocus<any>;
  className?: string;
  [key: string]: any;
}

export default function AuthInput({ className, placeholder, errorMessage, id, register, ...props }: CommonTextField) {
  const defaultInputClass =
    'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-sm border-stroke bg-white py-2 pl-4 pr-10 text-overline text-text-primary placeholder:text-overline placeholder:text-text-disabled desktop:pr-11 desktop:text-body4 desktop:placeholder:text-body4';

  const errorClass = errorMessage && errorMessage[id] ? 'border-red-500' : '';
  return (
    <>
      <input
        className={cn(defaultInputClass, errorClass, className)}
        placeholder={placeholder}
        {...register(id)}
        {...props}
      />
      {errorMessage && (
        <ErrorMessage className="ml-1 min-h-[40px] pt-1">{errorMessage[id]?.message as string}</ErrorMessage>
      )}
    </>
  );
}
