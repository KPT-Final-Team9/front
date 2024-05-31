import { Input, InputProps } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { LocalIcon } from '@icon/index';
import React from 'react';

const DEFAULT_PLACEHOLDER = '검색어를 입력해주세요';

export default function SearchInput({ className, placeholder = DEFAULT_PLACEHOLDER, ...props }: InputProps) {
  return (
    <div className="relative">
      <Input
        className={cn(
          'rounded-full border-stroke bg-white py-2 pl-4 pr-10 text-overline text-text-primary placeholder:text-overline placeholder:text-text-disabled desktop:pr-11 desktop:text-body4 desktop:placeholder:text-body4',
          className,
        )}
        placeholder={placeholder}
        {...props}
      />
      <span className="absolute right-4 top-1/2 -translate-y-1/2 transform">
        <LocalIcon
          name="SearchIcon"
          className="h-4 w-4 desktop:h-5 desktop:w-5"
        />
      </span>
    </div>
  );
}
