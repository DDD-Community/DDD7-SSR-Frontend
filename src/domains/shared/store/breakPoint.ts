import create from 'zustand';

export type BreakPointType = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

type BreakPointStore = {
  setBreakPoint: ({ isMobile, isTablet, isDesktop }: BreakPointType) => void;
} & BreakPointType;

export const useBreakPointStore = create<BreakPointStore>((set) => ({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  setBreakPoint: (breakPoint) => set((state) => ({ ...state, ...breakPoint })),
}));
