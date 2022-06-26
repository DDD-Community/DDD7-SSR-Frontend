import { useEffect, useState } from 'react';
import { Screen } from '../constants';
import { useBreakPointStore } from '../store/breakPoint';

export const BreakPoint = {
  Mobile: (onlyWidth?: boolean) => {
    if (onlyWidth) {
      return `(max-width: ${Screen.mobile}px)`;
    }

    return `@media only screen and (max-width: ${Screen.mobile})`;
  },
  Tablet(onlyWidth?: boolean) {
    if (onlyWidth) {
      return `(max-width: ${Screen.tablet}px)`;
    }

    return `@media only screen and (max-width: ${Screen.tablet})`;
  },
  Desktop(onlyWidth?: boolean) {
    if (onlyWidth) {
      return `(min-width: ${Screen.desktop}px)`;
    }

    return `@media only screen and (min-width: ${Screen.desktop})`;
  },
};

function useMediaQueryObserver(query: string): boolean {
  const getMatches = (mediaQuery: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(mediaQuery).matches;
    }

    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = () => {
    setMatches(getMatches(query));
  };

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    handleChange();
    matchMedia.addEventListener('change', handleChange);

    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return matches;
}

function useMediaQuery() {
  const isDesktop = useMediaQueryObserver(BreakPoint.Desktop(true));
  const isTablet = useMediaQueryObserver(BreakPoint.Tablet(true));
  const isMobile = useMediaQueryObserver(BreakPoint.Mobile(true));

  const { setBreakPoint } = useBreakPointStore();

  useEffect(() => {
    setBreakPoint({ isTablet, isDesktop, isMobile });
  }, [isDesktop, isTablet, isMobile]);

  return { isDesktop, isTablet, isMobile };
}

export default useMediaQuery;
