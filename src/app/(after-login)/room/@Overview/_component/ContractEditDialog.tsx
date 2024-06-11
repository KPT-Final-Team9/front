'use client';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { LocalIcon } from '@icon/index';
import React, { useEffect, useState } from 'react';
import ContractEditDialogContent from './ContractEditDialogContent';

const DUMMY_VACANT = false;
const DUMMY_FROM = new Date('2022-07-30');
const DUMMY_TO = new Date('2024-07-30');
const DUMMY_DEPOSIT = '1000';
const DUMMY_RENT = '65';
const DUMMY_ROOM_NAME = '미왕빌딩 A동 201호';

export default function ContractEditDialog() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={setIsDialogOpen}>
      <DialogTrigger>
        <Button
          asChild
          variant="icon"
          className="p-0">
          <LocalIcon
            name="EditIcon"
            width={24}
            height={24}
          />
        </Button>
      </DialogTrigger>
      <DialogContent
        closeProps={{ className: 'top-4 desktop:top-4 desktop:right-6 right-4' }}
        className="w-[337px] bg-white p-0 desktop:w-[493px]">
        <DialogHeader className="border-b px-10 py-5">
          <DialogTitle>계약 정보</DialogTitle>
        </DialogHeader>
        <ContractEditDialogContent
          closeDialog={closeDialog}
          isVacant={DUMMY_VACANT}
          roomName={DUMMY_ROOM_NAME}
          deposit={DUMMY_DEPOSIT}
          rent={DUMMY_RENT}
          fromDate={DUMMY_FROM}
          toDate={DUMMY_TO}
        />
      </DialogContent>
    </Dialog>
  );
}
