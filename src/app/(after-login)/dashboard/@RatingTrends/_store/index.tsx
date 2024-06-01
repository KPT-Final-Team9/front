import { create } from 'zustand';

type MainModalStore = {
  roomId: number | undefined;
  setRoomId: (id: number | undefined) => void;
  ModalState: boolean;
  setModal: (val: boolean) => void;
};

const useMainModalStore = create<MainModalStore>()(set => ({
  roomId: undefined,
  ModalState: false,
  setRoomId: (id: number | undefined) => {
    set(() => ({ roomId: id }));
  },
  setModal: val => {
    set({ ModalState: val });
  },
}));

type CompleteModalStore = {
  modalState: boolean;
  setModal: (val: boolean) => void;
};

const useCompleteModalStore = create<CompleteModalStore>(set => ({
  modalState: false,
  setModal: val => {
    set(state => {
      if (state.modalState !== val) {
        return { modalState: val };
      }
      return state;
    });
  },
}));
export { useMainModalStore, useCompleteModalStore };
