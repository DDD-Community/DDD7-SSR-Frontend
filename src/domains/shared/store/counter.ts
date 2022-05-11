import create from 'zustand';

type CounterStore = {
  count: number;
  increase: () => void;
  decrease: () => void;
  increaseByValue: (value: number) => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increase: () => set((state) => ({ ...state, count: state.count + 1 })),
  decrease: () => set((state) => ({ ...state, count: state.count - 1 })),
  increaseByValue: (value) => set((state) => ({ ...state, count: state.count + value })),
}));
