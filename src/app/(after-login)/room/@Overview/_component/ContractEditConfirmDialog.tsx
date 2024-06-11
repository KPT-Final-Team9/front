import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import yellowCheckMark from '@/asset/images/yellow-check-mark.png';
import { Button } from '@/components/ui/button';
import { DialogProps } from '@radix-ui/react-dialog';

export default function ContractEditConfirmDialog({
  dialogProps,
  triggerButton,
  title,
  roomName,
  contractPeriod,
  rent,
  onSubmitClick,
  onCancelClick,
}: {
  dialogProps?: DialogProps;
  triggerButton: React.ReactNode;
  title: string;
  roomName: string;
  contractPeriod: string;
  rent: string;
  onSubmitClick?: (e: React.MouseEvent) => void;
  onCancelClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <Dialog {...dialogProps}>
      <DialogTrigger>{triggerButton}</DialogTrigger>
      <DialogContent className="h-[444px] w-[343px] bg-white p-6">
        <div className="flex flex-col gap-12">
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Image
                src={yellowCheckMark}
                width={40}
                height={40}
                alt="yellow check mark"
              />
            </div>
            <h4 className="text-h4">{title}</h4>
          </div>
          <div className="flex flex-col gap-2.5 rounded-desktop-stroke bg-gray-50 p-2">
            <div className="text-body1">{roomName}</div>
            <div className="flex gap-3">
              <div>계약기간</div>
              <div>{contractPeriod}</div>
            </div>
            <div className="flex gap-3">
              <div>보증금 / 임대료</div>
              <div>{rent}</div>
            </div>
          </div>
        </div>
        <DialogFooter className="flex items-center justify-between">
          <Button
            className="w-[136px]"
            onClick={onCancelClick}
            variant="outline">
            아니요
          </Button>
          <Button
            className="w-[136px]"
            onClick={onSubmitClick}>
            예
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
