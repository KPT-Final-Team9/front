import { create } from 'zustand';

type MainModalStore = {
  roomId: number | undefined;
  roomName: string | undefined;
  setRoomId: (id: number | undefined) => void;
  setRoomName: (id: string | undefined) => void;
  ModalState: boolean;
  setModal: (val: boolean) => void;
};

const useMainModalStore = create<MainModalStore>()(set => ({
  roomId: undefined,
  roomName: undefined,
  ModalState: false,
  setRoomId: (id: number | undefined) => {
    set(() => ({ roomId: id }));
  },
  setRoomName: (name: string | undefined) => {
    set(() => ({ roomName: name }));
  },
  setModal: val => {
    set({ ModalState: val });
  },
}));

type StateModalStore = {
  modalState: boolean;
  setModal: (val: boolean) => void;
};

const useCompleteModalStore = create<StateModalStore>(set => ({
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

const useFailedModalStore = create<StateModalStore>(set => ({
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

type RepresentRoomStore = {
  representRoomId: number | undefined;
  setRepresentRoom: (val: number | undefined) => void;
};

const useRepresentRoomStore = create<RepresentRoomStore>(set => ({
  representRoomId: undefined,
  setRepresentRoom: val => {
    set(state => ({
      representRoomId: val,
    }));
  },
}));

export { useMainModalStore, useCompleteModalStore, useFailedModalStore, useRepresentRoomStore };
