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
      <DialogContent>
        <div>
          <div>
            <Image
              src={yellowCheckMark}
              width={40}
              height={40}
              alt="yellow check mark"
            />
          </div>
          <h4>{title}</h4>
          <div>
            <div>{roomName}</div>
            <div>
              <div>계약기간</div>
              <div>{contractPeriod}</div>
            </div>
            <div>
              <div>보증금 / 임대료</div>
              <div>{rent}</div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={onCancelClick}
            variant="ghost">
            아니요
          </Button>
          <Button onClick={onSubmitClick}>예</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
