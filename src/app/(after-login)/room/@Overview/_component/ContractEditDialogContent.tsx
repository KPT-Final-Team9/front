'use client';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import DateInputAtom from '@Monocles/date-input/DateInputAtom';
import React, { useState } from 'react';

export enum ContractEditState {
  VACANT = 'vacanct',
  CONTRACT_INFO = 'contract info',
  CONTRACT_EDIT = 'contract edit',
  CONTRACT_RENEWAK = 'contract renewal',
}

export default function ContractEditDialogContent({ closeDialog }: { closeDialog: () => void }) {
  const [contractDialogState, setContractDialogState] = useState<ContractEditState>(ContractEditState.CONTRACT_INFO);
  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();
  const [deposit, setDeposit] = useState<string>('');
  const [rent, setRent] = useState<string>('');

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
    closeDialog();
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
            <Button
              onClick={handleSumbitRenewalClick}
              variant="secondary"
              className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
              재계약하기
            </Button>
          </>
        );
    }
  };

  return (
    <>
      <div className="flex flex-col gap-6 bg-gray-50 px-6 py-8 desktop:px-10">
        <h4 className="text-h4 text-primary">미왕빌딩 A동 201호</h4>
        <div className="flex flex-col gap-3">
          <Label className="text-body2">계약 기간</Label>
          <div className="flex items-center gap-1 desktop:gap-5">
            <DateInputAtom
              mode="single"
              selected={fromDate}
              onSelect={setFromDate}
            />
            ~
            <DateInputAtom
              mode="single"
              selected={toDate}
              onSelect={setToDate}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-body2">보증금 / 임대료</Label>
          <div className="flex items-center gap-3">
            <Input
              value={deposit}
              onChange={e => setDeposit(e.target.value)}
              className="w-[80px] desktop:w-[100px]"
            />
            /
            <Input
              value={rent}
              onChange={e => setRent(e.target.value)}
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
