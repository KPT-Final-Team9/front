import { dummyDataProps } from '@/types/common/selectbox';

export default function sortedLists(lists: dummyDataProps[]) {
  if (!lists) return [];

  const sortedLists = [...lists].sort((a, b) => (a.buildingName < b.buildingName ? -1 : 0));
  return sortedLists;
}
