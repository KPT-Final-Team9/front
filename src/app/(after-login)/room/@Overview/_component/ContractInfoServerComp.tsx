import React from 'react';
import ContractInfoClientComp from './ContractInfoClientComp';

export default function ContractInfoServerComp() {
  return (
    <div className="flex h-[262px] w-[295px] flex-col gap-1 rounded-container bg-primary px-6 py-4 desktop:h-[262px] desktop:w-[264px]">
      <h4 className="text-h4 text-white">계약 정보</h4>
      <ContractInfoClientComp />
    </div>
  );
}
