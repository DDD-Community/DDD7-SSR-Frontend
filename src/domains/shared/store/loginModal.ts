import create from 'zustand';

type ModalStore = {
  showModal: boolean;
  showOnModal: () => void;
  showOffModal: () => void;
};

export const useLoginModalStore = create<ModalStore>((set) => ({
  showModal: false,
  showOnModal: () => set((state) => ({ ...state, showModal: true })),
  showOffModal: () => set((state) => ({ ...state, showModal: false })),
}));
