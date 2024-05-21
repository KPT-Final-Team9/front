import { dummyDataProps } from '@/types/common/selectbox';

export default function sortedLists(lists: dummyDataProps[], name: string) {
  if (!lists) return [];

  const sortedLists = [...lists].sort((a, b) => (a[name as keyof typeof a] < b[name as keyof typeof b] ? -1 : 0));
  return sortedLists;
}
