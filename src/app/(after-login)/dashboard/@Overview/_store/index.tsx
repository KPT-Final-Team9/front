import { create } from 'zustand';

// 선택된 셀렉트박스 정보의 인터페이스 정의
interface SelectedQuarter {
  id: number;
  yearQuarter: string;
  year: number;
  quarter: number;
}

// 전체 정보를 위한 인터페이스 정의
interface QuarterState {
  selectedQuarter: SelectedQuarter | null;
  allQuarters: SelectedQuarter[];
  setSelectedQuarter: (quarter: SelectedQuarter) => void;
  setAllQuarters: (quarters: SelectedQuarter[]) => void;
}

// Zustand 스토어 생성
const useQuarterStore = create<QuarterState>(set => ({
  selectedQuarter: null,
  allQuarters: [{ yearQuarter: '-', id: 1, year: NaN, quarter: NaN }],
  setSelectedQuarter: quarter => set({ selectedQuarter: quarter }),
  setAllQuarters: quarters => set({ allQuarters: quarters }),
}));

export default useQuarterStore;
