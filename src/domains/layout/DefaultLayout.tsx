import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { Footer, Header } from '../shared/components';
import TabMenu from '../shared/components/TabMenu/TabMenu';
import { useIsShown } from '../shared/hooks/useIsShown';
import { BreakPoint } from '../shared/hooks/useMediaQuery';

import useUser from '../shared/hooks/useUser';

const DefaultLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [isTabMenuShown, openTabMenu, closeTabMenu] = useIsShown();
  const user = useUser();

  return (
    <>
      <Header openTabMenu={openTabMenu} />
      {isTabMenuShown && <TabMenu closeTabMenu={closeTabMenu} />}
      <LayoutMain>{children}</LayoutMain>
      <Footer />
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
