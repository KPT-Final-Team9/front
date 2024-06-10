import React from 'react';
import ContractInfoClientComp from './ContractInfoClientComp';
import ContractEditDialog from './ContractEditDialog';

export default function ContractInfoServerComp() {
  return (
    <div className="flex h-[262px] w-full flex-col gap-1 rounded-container bg-primary px-6 py-4 desktop:h-[262px] desktop:w-[264px]">
      <div className="flex justify-between">
        <h4 className="text-h4 text-white">계약 정보</h4>
        <ContractEditDialog />
      </div>
      <ContractInfoClientComp />
    </div>
  );
}
