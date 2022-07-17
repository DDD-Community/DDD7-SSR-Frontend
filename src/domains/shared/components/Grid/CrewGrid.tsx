import styled from '@emotion/styled';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { CrewCard, CrewCardProps } from '../CrewCard';

export interface CrewGridProps {
  contents: CrewCardProps[];
  loadMore: () => void;
}

export const CrewGrid = ({ contents, loadMore }: CrewGridProps) => {
  const { containerRef } = useInfiniteScroll({ dataLength: contents?.length, loadMore });

  return (
    <GridWrapperStyle ref={containerRef}>
      {contents.map((crew) => (
        <CrewCard key={crew.accountIdx} {...crew} />
      ))}
    </GridWrapperStyle>
  );
};

const GridWrapperStyle = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 296px);
  gap: 21px;
  max-width: 1256px;
  width: 100%;
`;
