import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { Header } from '../shared/components';
import { BreakPoint } from '../shared/hooks/useMediaQuery';

const DefaultLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutMain>{children}</LayoutMain>
      {/* <Footer /> */}
    </>
  );
};

export default DefaultLayout;

const LayoutMain = styled.main`
  min-height: calc(100% - 64px);
  padding: 0 92px;

  ${BreakPoint.Mobile()} {
    padding: 0 32px 0px 28px;
  }
`;
