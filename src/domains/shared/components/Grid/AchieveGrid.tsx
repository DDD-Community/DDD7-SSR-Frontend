import styled from '@emotion/styled';
import React from 'react';
import { BreakPoint } from '../../hooks/useMediaQuery';

export const AchieveGrid = ({ children }: React.PropsWithChildren<{}>) => {
  return <GridWrapperStyle>{children}</GridWrapperStyle>;
};

const GridWrapperStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 50px);
  gap: 12px;
  max-width: 1256px;
  width: 100%;

  ${BreakPoint.Mobile()} {
    justify-content: center;
  }
`;
