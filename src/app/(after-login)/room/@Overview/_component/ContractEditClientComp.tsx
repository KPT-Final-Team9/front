'use client';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DateInputAtom from '@Monocles/date-input/DateInputAtom';
import React, { useState } from 'react';

export default function ContractEditClientComp() {
  const [fromDate, setFromDate] = useState<Date | undefined>();
  const [toDate, setToDate] = useState<Date | undefined>();
  const [deposit, setDeposit] = useState<string>('');
  const [rent, setRent] = useState<string>('');

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
      <DialogFooter className="flex flex-row flex-wrap items-end justify-between border-t px-8 py-4 desktop:px-10">
        <Button className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
          계약 정보 추가
        </Button>
        <Button className="px-6 py-3 text-body3 desktop:w-[193px] desktop:py-4 desktop:text-body1">
          계약 정보 추가
        </Button>
      </DialogFooter>
    </>
  );
}
