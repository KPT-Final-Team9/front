import React from 'react';

export default function ContractRendInfo({
  roomDeposit,
  roomMonthly,
}: {
  roomDeposit: number | undefined;
  roomMonthly: number | undefined;
}) {
  return (
    <div className="mb-6 mt-4 flex h-[62px] w-[212px] items-center justify-center gap-2 rounded-mobile-stroke bg-white desktop:rounded-desktop-stroke">
      <div className="flex flex-col items-center">
        <span className="text-overline text-primary">보증금</span>
        <span className="text-h4">{roomDeposit ? roomDeposit : '-'} / </span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-overline text-primary">임대료</span>
        <span className="text-h4">{roomMonthly ? roomMonthly : '-'} 만 원</span>
      </div>
    </div>
  );
}
