import React from 'react';
import bg from '@img/documentStorageBoxImg.png';
import { NextIconButton } from '@Atoms/buttons/NextIconButton';

export default function DocumentStorageBox() {
  return (
    <div className="h-full rounded-container  bg-white py-[37px] pl-[24px] pr-[40px] desktop:min-w-[336px]">
      <h4 className="mb-1 text-h4 text-text-primary">문서보관함</h4>
      <p className="text-body2 text-gray-500">다양한 내 문서를</p>
      <p className="text-body2 text-gray-500">손쉽게 관리해 보세요</p>
      <div className="flex w-full flex-row justify-between">
        <NextIconButton
          shape={'circle'}
          btnSize={'32'}
        />
        <div className="flex h-full flex-grow items-center justify-center">
          <div
            style={{
              backgroundImage: `url(${bg.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
