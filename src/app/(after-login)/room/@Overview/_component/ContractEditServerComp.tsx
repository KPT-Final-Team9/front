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
        className="w-[337px] desktop:w-[493px]">
        <DialogHeader>
          <DialogTitle>계약 정보</DialogTitle>
        </DialogHeader>
        <ContractEditClientComp />
      </DialogContent>
    </Dialog>
  );
}
