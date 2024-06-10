'use client';

import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React from 'react';

export default function ContractEditClientComp() {
  return (
    <>
      <div className="flex flex-col gap-6 bg-gray-50 px-10 py-8">
        <h4 className="text-h4 text-primary">미왕빌딩 A동 201호</h4>
        <div className="flex flex-col gap-3">
          <Label className="text-body2">계약 기간</Label>
          <Input />
        </div>
        <div className="flex flex-col gap-3">
          <Label className="text-body2">보증금 / 임대료</Label>
          <div className="flex items-center gap-3">
            <Input className="w-[70px] desktop:w-[100px]" /> /
            <Input className="w-[50px] desktop:w-[65px]" /> 만 원
          </div>
        </div>
      </div>
      <DialogFooter className="border-t px-10 py-4">
        <Button className="w-[144px] desktop:w-[193px]">계약 정보 추가</Button>
      </DialogFooter>
    </>
  );
}
