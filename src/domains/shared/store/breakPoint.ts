import create from 'zustand';

export type BreakPoint = 'mobile' | 'tablet' | 'desktop';

export const BREAK_WIDTH_MAP: Record<BreakPoint, number> = {
  mobile: 599,
  tablet: 1199,
  desktop: 1200,
};

type BreakPointStore = {
  breakPoint: BreakPoint;
  setBreakPoint: (type: BreakPoint) => void;
};

export const useBreakPointStore = create<BreakPointStore>((set) => ({
  breakPoint: 'desktop',
  setBreakPoint: (type) => set((state) => ({ ...state, breakPoint: type })),
}));
