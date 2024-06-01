import { DateRange } from 'react-day-picker';
import { create } from 'zustand';

export enum ViewState {
  TOTAL = 'total',
  BOOKMARK = 'bookmark',
}

interface RatingDetailStore {
  viewState: ViewState;
  setTotalView: () => void;
  setBookmarkView: () => void;
  searchValue: string;
  setSearchValue: (newValue: string) => void;
  dateRange: DateRange | undefined;
  setDateRange: (newDateRange: DateRange | undefined) => void;
}

export const useRatingDetailStore = create<RatingDetailStore>(set => ({
  viewState: ViewState.TOTAL,
  setTotalView: () => set({ viewState: ViewState.TOTAL }),
  setBookmarkView: () => set({ viewState: ViewState.BOOKMARK }),
  searchValue: '',
  setSearchValue: (newValue: string) => set({ searchValue: newValue }),
  dateRange: undefined,
  setDateRange: (newDateRange: DateRange | undefined) => set({ dateRange: newDateRange }),
}));
