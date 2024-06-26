import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LocalIcon } from '@icon/index';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { LoadingSpinner } from '@/asset/Icons/index';

interface AlertDialog {
  openTrigger?: React.ReactNode;
  isCloseButton?: boolean;
  imgSrc?: StaticImageData;
  isOpen?: boolean | undefined;
  header?: React.ReactNode;
  acceptText?: string | undefined;
  cancelText?: string | undefined;
  setClose?: (val: boolean) => void;
  isLoading?: boolean;
  onAcceptClick?: () => void;
  onCancleClick?: () => void;
}

// openTrigger 단독으로 사용가능.
// header에 content 주입
export default function UserSurveyModal({
  openTrigger,
  isCloseButton = true,
  header,
  acceptText,
  cancelText,
  imgSrc,
  isOpen,
  setClose,
  onAcceptClick,
  onCancleClick,
  isLoading,
}: AlertDialog) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogTrigger className="active:scale-90">{openTrigger}</AlertDialogTrigger>
      <AlertDialogContent className="w-[337px] gap-10 rounded-container sm:rounded-container">
        <AlertDialogHeader className="flex w-full flex-col items-center justify-center gap-2">
          {isCloseButton && (
            // FIXME: 모달이 바로 뜰 때 AlertDialogCancel 사용시 버튼에 pointer-events로 검은 테두리가 계속 포커싱되어 Action으로 처리함
            <AlertDialogAction
              disabled={isLoading}
              onClick={() => {
                if (setClose) {
                  setClose(false);
                }
              }}
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'default' }),
                'w-fit self-end border-0 bg-transparent p-0 hover:bg-transparent',
              )}>
              <LocalIcon
                strokeWidth={0.2}
                className="h-6 w-6"
                name="CgClose"
              />
            </AlertDialogAction>
          )}
          {imgSrc && (
            <AlertDialogDescription className="flex h-16 w-16 items-center justify-center self-center rounded-full bg-blue-100">
              <Image
                src={imgSrc}
                alt="BoxImportant"
                width={32}
                height={32}
              />
            </AlertDialogDescription>
          )}
          {header}
        </AlertDialogHeader>
        <AlertDialogFooter className="flex w-full flex-col items-center sm:flex-col sm:justify-normal sm:space-x-0">
          {acceptText && (
            <AlertDialogAction
              disabled={isLoading}
              onClick={onAcceptClick}
              className={cn('w-full rounded-btn', buttonVariants({ variant: 'default', size: 'default' }))}>
              {acceptText}
            </AlertDialogAction>
          )}
          {cancelText && (
            // FIXME: 모달이 바로 뜰 때 AlertDialogCancel 사용시 버튼에 pointer-events로 검은 테두리가 계속 포커싱되어 Action으로 처리함
            <AlertDialogAction
              disabled={isLoading}
              className={cn(
                'w-full rounded-btn border-0 bg-transparent font-medium text-text-secondary hover:bg-transparent',
                buttonVariants({ variant: 'none', size: 'default' }),
              )}
              onClick={onCancleClick}>
              {isLoading ? <LoadingSpinner /> : cancelText}
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
