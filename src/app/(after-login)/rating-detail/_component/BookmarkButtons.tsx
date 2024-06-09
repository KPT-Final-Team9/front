'use client';
import SwitchButton from '@Atoms/buttons/SwitchButton';
import { LocalIcon } from '@icon/index';
import React from 'react';
import { ViewState, useRatingDetailStore } from '@/app/(after-login)/rating-detail/_store';

export default function BookmarkButtons() {
  const viewState = useRatingDetailStore(state => state.viewState);
  const onTotalClick = useRatingDetailStore(state => state.setTotalView);
  const onBookmarkClick = useRatingDetailStore(state => state.setBookmarkView);

  const toggleBoookmark = () => {
    switch (viewState) {
      case ViewState.BOOKMARK:
        onTotalClick();
        break;
      case ViewState.TOTAL:
        onBookmarkClick();
        break;
    }
  };

  return (
    <div className="flex gap-2 desktop:gap-4">
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
        onClick={toggleBoookmark}
      />
    </div>
  );
}
