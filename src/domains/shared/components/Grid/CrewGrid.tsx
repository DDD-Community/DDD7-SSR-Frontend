import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { BreakPoint } from '../../hooks/useMediaQuery';
import { CrewCard, CrewCardProps } from '../CrewCard';
import { GridProps } from './GridType';

export interface CrewGridProps {
  contents: CrewCardProps[];
  loadMore: () => void;
}

export const CrewGrid = ({ contents, loadMore }: CrewGridProps) => {
  const { containerRef } = useInfiniteScroll({ dataLength: contents?.length, loadMore });

  return (
    <GridWrapperStyle ref={containerRef} isFullWidth={contents.length > 2}>
      {contents.map((crew) => (
        <CrewCard key={crew.accountIdx} {...crew} />
      ))}
    </GridWrapperStyle>
  );
};

const GridWrapperStyle = styled.div(
  ({ isFullWidth }: GridProps) => css`
    display: grid;
    justify-content: ${isFullWidth ? 'center' : 'flex-start'};
    grid-template-columns: repeat(auto-fit, 296px);
    gap: 21px;
    max-width: 1256px;
    width: 100%;

    ${BreakPoint.Mobile()} {
      justify-content: center;
    }
  `,
);
