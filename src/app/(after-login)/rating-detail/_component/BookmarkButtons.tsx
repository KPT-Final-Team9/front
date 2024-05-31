'use client';
import SwitchButton from '@Atoms/buttons/SwitchButton';
import { LocalIcon } from '@icon/index';
import React from 'react';
import { ViewState, useRatingDetailStore } from '@/app/(after-login)/rating-detail/_store';

export default function BookmarkButtons() {
  const viewState = useRatingDetailStore(state => state.viewState);
  const onTotalClick = useRatingDetailStore(state => state.setTotalView);
  const onBookmarkClick = useRatingDetailStore(state => state.setBookmarkView);

  return (
    <div className="flex gap-2 desktop:gap-4">
      <SwitchButton
        isActive={viewState === ViewState.TOTAL}
        icon={
          <LocalIcon
            width={20}
            height={20}
            name="TotalIcon"
          />
        }
        label="전체보기"
        onClick={onTotalClick}
      />
      <SwitchButton
        isActive={viewState === ViewState.BOOKMARK}
        icon={
          <LocalIcon
            name="BookmarkIcon"
            width={20}
            height={20}
            fill="text-text-primary"
          />
        }
        label="북마크 모아보기"
        onClick={onBookmarkClick}
      />
    </div>
  );
}
