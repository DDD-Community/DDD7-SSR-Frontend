import { useEffect } from 'react';
import { MutableRefObject, useRef } from 'react';
import { useEffectIfMounted } from './useEffectIfMounted';

interface UseInfiniteScroll {
  loadMore: () => void;
  dataLength: number;
}

const useInfiniteScroll = ({ loadMore, dataLength }: UseInfiniteScroll) => {
  const containerRef: MutableRefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const observer: MutableRefObject<IntersectionObserver | null> = useRef<IntersectionObserver>(null);

  const nextObserve = () => {
    if (containerRef.current === null || containerRef.current.children.length === 0 || observer.current === null) {
      return;
    }

    observer?.current?.observe(containerRef.current.children[containerRef.current.children.length - 1]);
  };

  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) {
        return;
      }

      console.log('로드 모얼');
      loadMore();
      observer.unobserve(entries[0].target);
    });
  }, []);

  useEffectIfMounted(() => {
    console.log('ㅋㅋ');
    nextObserve();
  }, [dataLength]);

  return {
    containerRef,
  };
};

export default useInfiniteScroll;
