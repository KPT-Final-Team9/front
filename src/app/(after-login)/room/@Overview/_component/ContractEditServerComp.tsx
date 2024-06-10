import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { LocalIcon } from '@icon/index';
import React from 'react';
import ContractEditClientComp from './ContractEditClientComp';

export default function ContractEditServerComp() {
  return (
    <Dialog>
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
        <ContractEditClientComp />
      </DialogContent>
    </Dialog>
  );
}
