import { FilterChartData } from '@/types/chart';
import dayjs from 'dayjs';
import { DateRange } from 'react-day-picker';
import { endOfMonth, getDate, getYear, getMonth } from 'date-fns';

export const filterChartData: FilterChartData = ({ chartData, dataKey }) => {
  if (chartData.length === 0) return [];
  return Object.keys(chartData[0]).filter(key => key !== dataKey);
};

// 경과된 진행율 계산 함수
export const calculateDateProgress = (start: Date, end: Date, current: Date | undefined): number => {
  if (!current) current = new Date();

  // 1. 기간 계산 (밀리초 단위로 계산)
  const totalTime = end.getTime() - start.getTime(); // 전체 기간
  const elapsed = current.getTime() - start.getTime(); // 현재까지의 경과 기간

  // 2. 진행률 계산
  const progress = (elapsed / totalTime) * 100; // 진행률 계산 (백분율로 표현)

  // 3. 정수로 return
  return Math.round(progress); // 정수로 반올림
};

export const formatDateToYYYY_MM_DD = (date: Date | undefined): string => {
  if (!date) return '----.--.--';
  return dayjs(date).format('YYYY.MM.DD');
};

export const formatDateToMM_DD = (date: Date | undefined): string => {
  if (!date) return '----.--.--';
  return dayjs(date).format('MM.DD');
};

export const formatDateToYYYYMMDD = (date: Date | undefined): string => {
  if (!date) return '----/--/--';
  return dayjs(date).format('YYYY/MM/DD');
};

export const isSameDateRange = (dateRangeA: DateRange | undefined, dateRangeB: DateRange | undefined) => {
  if (dateRangeA === undefined || dateRangeB === undefined) return undefined; // 한 쪽이 undefined인 경우라면 true, false가 아닌 undefined를 반환.
  const result =
    formatDateToYYYY_MM_DD(dateRangeA.from) === formatDateToYYYY_MM_DD(dateRangeB.from) &&
    formatDateToYYYY_MM_DD(dateRangeA.to) === formatDateToYYYY_MM_DD(dateRangeB.to);
  return result;
};

// 이번달 현재 일과 중간일, 말일이 똑같은지 반환해주는 함수
export const scheduleRegularAlarms = () => {
  const now = new Date();
  const date = getDate(now);

  const lastDay = getDate(endOfMonth(new Date()));
  const middleDay = Math.ceil(lastDay / 2);

  const middleDate = middleDay === date;
  const lastDate = lastDay === date;

  const middleDayTest = 10 === date; // TODO: 기능 작업 이후 지우기

  return { middleDate, lastDate, middleDayTest };
};

export const formatDateRangeToYYYY_MM_DD = (fromDate?: Date, toDate?: Date) => {
  return formatDateToYYYY_MM_DD(fromDate) + ' ~ ' + formatDateToYYYY_MM_DD(toDate);
};
