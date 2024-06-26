'use client';
import { Progress } from '@/components/ui/progress';
import { DashLineIcon } from '@/asset/Icons/index';
import { z } from 'zod';
import { VariantProps, cva } from 'class-variance-authority';
import clsx from 'clsx';
import { CONTRACT_STATUSES } from '@/constants';

// NOTE: api완성전이라 텍스트 고정으로, 추후 기간 계산로직 추가

const valueSchema = z.number().min(0).max(100);

const progressPercentageFont = cva('relative -right-4 leading-[0px]', {
  variants: {
    percentageFont: {
      overline: 'text-overline',
      body1: 'text-body1',
    },
  },
});

export interface ContractProgressProps extends VariantProps<typeof progressPercentageFont> {
  value?: number;
  percentageFontClassName?: string;
  periodFontClassName?: string;
  contractDate?: {
    start: string;
    end: string;
    current: string;
  };
  indicatorColor?: 'bg-blue-500' | 'evaluation-gradient';
}

export function ContractProgress({
  value,
  percentageFont,
  percentageFontClassName,
  periodFontClassName,
  contractDate,
  indicatorColor = 'bg-blue-500', // default bg-blue-500
}: ContractProgressProps) {
  // 계약기간 값검증
  const parsedValue = valueSchema.safeParse(value);
  const validValue = parsedValue.success ? parsedValue.data : 0;
  const displayValue = isNaN(validValue) ? '-' : `${validValue}%`;
  // console.log(contractDate?.status, 'contractDate');
  const progressPeriodFont = clsx('text-overline', periodFontClassName);
  return (
    <div className="mb-[30px] mr-5 flex flex-col gap-1">
      <div className="mr-5 flex flex-row justify-between">
        <p className={progressPeriodFont}>{contractDate?.start}</p>
        <p className={progressPeriodFont}>{contractDate?.end}</p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="relative w-full">
          <Progress
            className="h-[13px]"
            indicatorColor={indicatorColor}
            value={validValue}
          />
          <div
            className="absolute"
            style={{ left: `calc(${validValue}% )`, top: '10px' }}>
            <div className="flex w-[32px] -translate-y-[10px] justify-start">
              <DashLineIcon className="h-5" />
            </div>
            <p className={clsx('-translate-x-1/2 -translate-y-2 whitespace-nowrap', progressPeriodFont)}>
              {contractDate?.current}
            </p>
          </div>
        </div>
        <div className={clsx(progressPercentageFont({ percentageFont }), percentageFontClassName)}>
          <p>{displayValue}</p>
        </div>
      </div>
    </div>
  );
}
