import { dummyDataProps } from '@/types/common/selectbox';

/**
 * 받아온 배열 리스트에서 원하는 key값에 대한 value를 오름차순으로 정렬하여 반환함
 *
 * @param {lists} props response 배열객체 데이터
 * @param {name} props 비교할 key값 지정(원하는 key값을 문자열로 입력)
 * @return {sortedLists} 오름차순으로 정렬된 value 반환
 */

export default function sortedLists(lists: dummyDataProps[], name: string) {
  if (!lists) return [];

  const sortedLists = [...lists].sort((a, b) => (a[name as keyof typeof a] < b[name as keyof typeof b] ? -1 : 0));
  return sortedLists;
}
