import { Progress } from '@/components/ui/progress';
import { DashLineIcon } from '@/asset/Icons/index';
import { z } from 'zod';

// NOTE: api완성전이라 텍스트 고정으로, 추후 기간 계산로직 추가

const valueSchema = z.number().min(0).max(100);

export function ContractProgress({ value }: { value?: number }) {
  const parsedValue = valueSchema.safeParse(value);
  const validValue = parsedValue.success ? parsedValue.data : 0;
  return (
    <div className="relative h-[45px]">
      <Progress
        className="h-[13px]"
        indicatorColor="bg-blue-500"
        value={validValue}></Progress>
      <div
        className="absolute"
        style={{ left: `calc(${validValue}% )`, top: '10px' }}>
        <div className="flex w-[32px] -translate-y-[10px] justify-start">
          <DashLineIcon className="h-5"></DashLineIcon>
        </div>
        <p className="font-body4 -translate-x-1/2 -translate-y-2 whitespace-nowrap text-[14px] text-gray-400">
          계약만료 3개월 전
        </p>
      </div>
    </div>
  );
}
