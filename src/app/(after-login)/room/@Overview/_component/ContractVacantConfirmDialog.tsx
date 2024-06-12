import { Dialog, DialogContent, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import yellowImportantBox from '@/asset/images/yellow-important-box.png';
import { Button } from '@/components/ui/button';
import { DialogProps } from '@radix-ui/react-dialog';

export default function ContractVacantConfirmDialog({
  dialogProps,
  triggerButton,
  onSubmitClick,
  onCancelClick,
}: {
  dialogProps?: DialogProps;
  triggerButton: React.ReactNode;
  onSubmitClick?: (e: React.MouseEvent) => void;
  onCancelClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <Dialog {...dialogProps}>
      <DialogTrigger>{triggerButton}</DialogTrigger>
      <DialogContent className="h-[320px] w-[343px] bg-white p-6">
        <div className="flex flex-col gap-12">
          <div className="mt-10 flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
              <Image
                src={yellowImportantBox}
                width={40}
                height={40}
                alt="yellow check mark"
              />
            </div>
            <h4 className="text-h4">공실로 변경하시겠습니까?</h4>
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
