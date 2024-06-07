import { FilterChartData } from '@/types/chart';
import dayjs from 'dayjs';
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

// 이번달 현재 일과 중간일, 말일이 똑같은지 반환해주는 함수
export const scheduleRegularAlarms = () => {
  const now = new Date();
  const year = getYear(now);
  const month = getMonth(now);
  const date = getDate(now);

  const lastDay = getDate(endOfMonth(new Date(year, month, date)));
  const middleDay = Math.ceil(lastDay / 2);

  const middleDate = middleDay === date;
  const lastDate = lastDay === date;

  const middleDayTest = 8 === date;

  return { middleDate, lastDate, middleDayTest };
};
