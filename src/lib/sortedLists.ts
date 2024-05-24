import { DummyDataProps } from '@/types/common/selectbox';

/**
 * 받아온 배열 리스트에서 원하는 key값에 대한 value를 오름차순으로 정렬하여 반환함
 *
 * @param {lists} props response 배열객체 데이터
 * @param {name} props 비교할 key값 지정(원하는 key값을 문자열로 입력)
 * @return {sortedLists} 오름차순으로 정렬된 value 반환
 */

// FIXME: '23년 1분기', '22년 3분기', '24년 3분기', 24년 1분기'와 같은 연도-분기 데이터는 현재 적용이 되지 않음.
// 백엔드 API 나오면 해당 형식에 따라 변경 예정
export default function sortedLists(lists: DummyDataProps[], name: string) {
  if (!lists) return [];

  const sortedLists = [...lists].sort((a, b) => {
    // 숫자일 경우 Number.isNaN()로 비교
    if (!isNaN(parseInt(a[name])) && !isNaN(parseInt(b[name]))) {
      return parseInt(a[name]) - parseInt(b[name]);
    } else {
      return a[name] < b[name] ? -1 : 0;
    }
  });

  return sortedLists;
}
