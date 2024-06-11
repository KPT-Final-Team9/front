'use client';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { formatDateToYYYY_MM_DD } from '@/utils';
import DateInputAtom from '@Monocles/date-input/DateInputAtom';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import ContractEditConfirmDialog from './ContractEditConfirmDialog';

export enum ContractEditState {
  VACANT = 'vacanct',
  CONTRACT_INFO = 'contract info',
  CONTRACT_EDIT = 'contract edit',
  CONTRACT_RENEWAK = 'contract renewal',
}

export default function ContractEditDialogContent({
  closeDialog,
  fromDate,
  toDate,
  deposit = '',
  rent = '',
}: {
  closeDialog: () => void;
  fromDate?: Date;
  toDate?: Date;
  deposit?: string;
  rent?: string;
}) {
  const [contractDialogState, setContractDialogState] = useState<ContractEditState>(ContractEditState.CONTRACT_INFO);
  const [editedFromDate, setEditedFromDate] = useState<Date | undefined>(fromDate);
  const [editedToDate, setEditedToDate] = useState<Date | undefined>(toDate);
  const [editedDeposit, setEditedDeposit] = useState<string>(deposit);
  const [editedRent, setEditedRent] = useState<string>(rent);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsConfirmOpen(true);
    }, 100);
  }, []);

  const checkIsDiff = (newFrom: Date | undefined, newTo: Date | undefined, newDeposit: string, newRent: string) => {
    return !(
      formatDateToYYYY_MM_DD(fromDate) === formatDateToYYYY_MM_DD(newFrom) &&
      formatDateToYYYY_MM_DD(toDate) === formatDateToYYYY_MM_DD(newTo) &&
      deposit === newDeposit &&
      rent === newRent
    );
  };

  const handleAddContractClick = () => {
    window && window.alert('수정사항 저장됨');
    closeDialog();
  };

  const handleVacantClick = () => {
    window && window.alert('공실로 설정됨');
    closeDialog();
  };

  const handleSubmitEditClick = () => {
    window && window.alert('수정사항 저장됨');
    setContractDialogState(ContractEditState.CONTRACT_INFO);
  };

  const handleCancelRenewalEditClick = () => {
    setContractDialogState(ContractEditState.CONTRACT_INFO);
  };

  const handleRenewalClick = () => {
    setContractDialogState(ContractEditState.CONTRACT_RENEWAK);
  };

  const handleSumbitRenewalClick = () => {
    window && window.alert('재계약 저장됨');
    setIsConfirmOpen(false);
    closeDialog();
  };

  const handleFromChange = (newDate: Date | undefined) => {
    if (!newDate) return;
    setEditedFromDate(newDate);

    if (checkIsDiff(newDate, editedToDate, editedDeposit, editedRent)) {
      setContractDialogState(ContractEditState.CONTRACT_EDIT);
    } else {
      setContractDialogState(ContractEditState.CONTRACT_INFO);
    }
  };
  const handleToChange = (newDate: Date | undefined) => {
    if (!newDate) return;
    setEditedToDate(newDate);

    if (checkIsDiff(editedFromDate, newDate, editedDeposit, editedRent)) {
      setContractDialogState(ContractEditState.CONTRACT_EDIT);
    } else {
      setContractDialogState(ContractEditState.CONTRACT_INFO);
    }
  };
  const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedDeposit(e.target.value);

    if (checkIsDiff(editedFromDate, editedToDate, e.target.value, editedRent)) {
      setContractDialogState(ContractEditState.CONTRACT_EDIT);
    } else {
      setContractDialogState(ContractEditState.CONTRACT_INFO);
    }
  };
  const handleRentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedRent(e.target.value);

    if (checkIsDiff(editedFromDate, editedToDate, editedDeposit, e.target.value)) {
      setContractDialogState(ContractEditState.CONTRACT_EDIT);
    } else {
      setContractDialogState(ContractEditState.CONTRACT_INFO);
    }
  };

  const ButtonGroupByState = (state: ContractEditState): React.ReactNode => {
    switch (state) {
      case ContractEditState.VACANT:
        return (
          <Button
            onClick={handleAddContractClick}
            className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
            계약 정보 추가
          </Button>
        );
      case ContractEditState.CONTRACT_INFO:
        return (
          <>
            <Button
              onClick={handleVacantClick}
              className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1"
              variant="orange">
              공실로 설정하기
            </Button>
            <Button
              className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1"
              onClick={handleRenewalClick}>
              재계약하기
            </Button>
          </>
        );
      case ContractEditState.CONTRACT_EDIT:
        return (
          <>
            <Button
              onClick={handleCancelRenewalEditClick}
              variant="outline"
              className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
              취소하기
            </Button>
            <Button
              onClick={handleSubmitEditClick}
              variant="secondary"
              className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
              저장하기
            </Button>
          </>
        );
      case ContractEditState.CONTRACT_RENEWAK:
        return (
          <>
            <Button
              onClick={handleCancelRenewalEditClick}
              variant="ghost"
              className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
              취소하기
            </Button>
            <ContractEditConfirmDialog
              dialogProps={{ open: isConfirmOpen, onOpenChange: setIsConfirmOpen }}
              title={'재계약을 진행하시겠습니까?'}
              roomName="미왕빌딩 A동 201호"
              contractPeriod="2022.07.30 ~ 2024.07.30"
              rent="1,000 / 65만 원"
              triggerButton={
                <Button
                  variant="secondary"
                  className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
                  재계약하기
                </Button>
              }
              onSubmitClick={handleSumbitRenewalClick}
              onCancelClick={() => setIsConfirmOpen(false)}
            />
          </>
        );
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 bg-gray-50 px-6 py-8 desktop:px-10">
        <ContractEditConfirmDialog
          dialogProps={{ open: isConfirmOpen, onOpenChange: setIsConfirmOpen }}
          title={'재계약을 진행하시겠습니까?'}
          roomName="미왕빌딩 A동 201호"
          contractPeriod="2022.07.30 ~ 2024.07.30"
          rent="1,000 / 65만 원"
          triggerButton={
            <Button
              variant="secondary"
              className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
              재계약하기
            </Button>
          }
          onSubmitClick={handleSumbitRenewalClick}
          onCancelClick={() => setIsConfirmOpen(false)}
        />
        <h4 className="text-h4 text-primary">미왕빌딩 A동 201호</h4>
        <div className="flex flex-col gap-3">
          <Label className="text-body2">계약 기간</Label>
          <div className="flex items-center gap-1 desktop:gap-5">
            {contractDialogState === ContractEditState.CONTRACT_RENEWAK ? (
              <div>{formatDateToYYYY_MM_DD(editedFromDate)}</div>
            ) : (
              <DateInputAtom
                mode="single"
                selected={contractDialogState === ContractEditState.CONTRACT_EDIT ? editedFromDate : fromDate}
                onSelect={handleFromChange}
              />
            )}
            ~
            <DateInputAtom
              mode="single"
              selected={contractDialogState === ContractEditState.CONTRACT_EDIT ? editedToDate : toDate}
              onSelect={handleToChange}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-body2">보증금 / 임대료</Label>
          <div className="flex items-center gap-3">
            <Input
              value={contractDialogState === ContractEditState.CONTRACT_EDIT ? editedDeposit : deposit}
              onChange={handleDepositChange}
              className="w-[80px] desktop:w-[100px]"
            />
            /
            <Input
              value={contractDialogState === ContractEditState.CONTRACT_EDIT ? editedRent : rent}
              onChange={handleRentChange}
              className="w-[50px] desktop:w-[65px]"
            />
            만 원
          </div>
        </div>
      </div>
      <DialogFooter
        className={cn('flex flex-row flex-wrap items-end justify-between border-t px-8 py-4 desktop:px-10', {
          'justify-end': contractDialogState === ContractEditState.VACANT,
        })}>
        {ButtonGroupByState(contractDialogState)}
      </DialogFooter>
    </>
  );
}
