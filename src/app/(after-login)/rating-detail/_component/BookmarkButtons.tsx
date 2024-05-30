'use client';
import SwitchButton from '@Atoms/buttons/SwitchButton';
import { LocalIcon } from '@icon/index';
import React from 'react';

export default function BookmarkButtons() {
  return (
    <div className="flex gap-2 desktop:gap-4">
      <SwitchButton
        icon={
          <LocalIcon
            width={20}
            height={20}
            name="TotalIcon"
          />
        }
        label="전체보기"
      />
      <SwitchButton
        icon={
          <LocalIcon
            name="BookmarkIcon"
            width={20}
            height={20}
            fill="text-text-primary"
          />
        }
        label="북마크 모아보기"
      />
    </div>
  );
}
