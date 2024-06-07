import { create } from 'zustand';

type MidReminderModalStore = {
  MidModalState: boolean;
  setMidModal: (val: boolean) => void;
};

type LastReminderModalStore = {
  LastModalState: boolean;
  setLastModal: (val: boolean) => void;
};

const useMidReminderModalStore = create<MidReminderModalStore>()(set => ({
  MidModalState: false,
  setMidModal: val => {
    set({ MidModalState: val });
  },
}));

const useLastReminderModalStore = create<LastReminderModalStore>()(set => ({
  LastModalState: false,
  setLastModal: val => {
    set({ LastModalState: val });
  },
}));

export { useMidReminderModalStore, useLastReminderModalStore };
