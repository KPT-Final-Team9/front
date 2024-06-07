import { create } from 'zustand';

type SurveyReminderModalStore = {
  ModalState: boolean;
  setModal: (val: boolean) => void;
};

const useSurveyReminderModalStore = create<SurveyReminderModalStore>()(set => ({
  ModalState: false,
  setModal: val => {
    set({ ModalState: val });
  },
}));

export { useSurveyReminderModalStore };
