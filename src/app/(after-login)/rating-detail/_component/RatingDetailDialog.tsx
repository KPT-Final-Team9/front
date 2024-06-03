'use client';
import React from 'react';
import { RatingDetail, RatingDetailTableAccessorKey } from './RatingDetailDataTable';
import { Row } from '@tanstack/react-table';
import { formatDateToYYYY_MM_DD } from '@/utils';
import { LocalIcon } from '@icon/index';
import { Button } from '@/components/ui/button';
import { BuildingRoomAvatar } from '@Atoms/avatar/BuildingRoomAvatar';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function RatingDetailDialog({
  selectedRow,
  isDialogOpen,
  onDialogOpen,
}: {
  selectedRow: Row<RatingDetail> | undefined;
  isDialogOpen?: boolean;
  onDialogOpen?: (newOpen: boolean) => void;
}) {
  const handleBookmarkClick = () => {
    window.alert('bookmark 클릭됨.'); // 이후 API 연동하기
  };

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={onDialogOpen}>
      <DialogContent className="p-0">
        <DialogHeader className="h-20 justify-center px-10 py-6">
          <DialogTitle className="text-h4 text-text-primary">평가 내용 상세보기</DialogTitle>
        </DialogHeader>
        <div className="flex gap-3 border-b border-t border-stroke bg-blue-50 px-10 py-6">
          <BuildingRoomAvatar idx={0} />
          <div className="text-h3 text-primary">
            {selectedRow?.getValue(RatingDetailTableAccessorKey.BUILDING)}
            {selectedRow?.getValue(RatingDetailTableAccessorKey.ROOM)}
          </div>
          <Button
            variant="ghost"
            className="p-1"
            onClick={handleBookmarkClick}>
            <LocalIcon
              name="BookmarkIcon"
              width={24}
              height={24}
              fill={selectedRow?.getValue(RatingDetailTableAccessorKey.IS_BOOKMARK) ? 'black' : 'none'}
            />
          </Button>
        </div>
        <div className="px-10 pb-16 pt-6">
          <div className="mb-16 flex w-full flex-col items-center justify-center">
            <div className="mb-2 text-body2 text-text-secondary">평가점수</div>
            <div className="text-h1 text-text-primary">
              {selectedRow?.getValue(RatingDetailTableAccessorKey.SCORE)}점
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex">
              <div className="w-[140px] text-body1 text-text-secondary">유형</div>
              <div className="text-h4 text-text-primary">
                {selectedRow?.getValue(RatingDetailTableAccessorKey.CATEGORY)}
              </div>
            </div>
            <div className="flex">
              <div className="w-[140px] text-body1 text-text-secondary">평가 날짜</div>
              <div className="text-h4 text-text-primary">
                {formatDateToYYYY_MM_DD(selectedRow?.getValue(RatingDetailTableAccessorKey.RATING_DATE))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="w-[140px] text-body1 text-text-secondary">평가 내용</div>
              <div className="text-h4 text-text-primary">
                {selectedRow?.getValue(RatingDetailTableAccessorKey.CONTENT)}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
