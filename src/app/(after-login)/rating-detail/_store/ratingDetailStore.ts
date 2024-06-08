import { addMonths } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { create } from 'zustand';

export enum ViewState {
  TOTAL = 'total',
  BOOKMARK = 'bookmark',
}

export const enum CategorySelectId {
  ALL = 0,
  FACILITY = 1,
  MANAGEMENT = 2,
  COMPLAINT = 3,
}

export const DEFAULT_ROOM_ID = 0; // room 기본 값은 가나다 오름차순 첫 번째
export const DEFAULT_CATEGORY_ID = 0; // category 기본 값은 가나다 오름차순 첫 번째

const currentDate = new Date();
export const DEFAULT_DATE_RANGE = {
  from: addMonths(currentDate, -1),
  to: currentDate,
};

interface RatingDetailStore {
  viewState: ViewState;
  setTotalView: () => void;
  setBookmarkView: () => void;
  searchValue: string;
  setSearchValue: (newValue: string) => void;
  dateRange: DateRange | undefined;
  setDateRange: (newDateRange: DateRange | undefined) => void;
  roomId: number;
  setRoomId: (newRoomId: number) => void;
  categoryId: number;
  setCategoryId: (newCategoryId: number) => void;
}

export const useRatingDetailStore = create<RatingDetailStore>(set => ({
  viewState: ViewState.TOTAL,
  setTotalView: () => set({ viewState: ViewState.TOTAL }),
  setBookmarkView: () => set({ viewState: ViewState.BOOKMARK }),
  searchValue: '',
  setSearchValue: (newValue: string) => set({ searchValue: newValue }),
  dateRange: DEFAULT_DATE_RANGE,
  setDateRange: (newDateRange: DateRange | undefined) => set({ dateRange: newDateRange }),
  roomId: DEFAULT_ROOM_ID,
  setRoomId: (newRoomId: number) => set({ roomId: newRoomId }),
  categoryId: DEFAULT_CATEGORY_ID,
  setCategoryId: (newCategoryId: number) => set({ categoryId: newCategoryId }),
}));
