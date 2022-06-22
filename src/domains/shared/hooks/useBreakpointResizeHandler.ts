import { throttle } from 'lodash-es';
import { useEffect } from 'react';
import { BreakPoint, BREAK_WIDTH_MAP, useBreakPointStore } from '../store/breakPoint';

const getDeviceConfig = (width: number): BreakPoint => {
  if (width <= BREAK_WIDTH_MAP.mobile) {
    return 'mobile' as const;
  }

  if (width <= BREAK_WIDTH_MAP.tablet) {
    return 'tablet' as const;
  }

  return 'desktop' as const;
};

const useBreakpointResizeHandler = () => {
  const { setBreakPoint } = useBreakPointStore();

  useEffect(() => {
    const calculateInnerWidth = throttle(() => {
      setBreakPoint(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calculateInnerWidth);

    return () => window.removeEventListener('resize', calculateInnerWidth);
  }, []);
};

export default useBreakpointResizeHandler;
