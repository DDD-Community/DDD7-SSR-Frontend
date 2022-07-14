import styled from '@emotion/styled';
import React, { useState, useCallback, useRef } from 'react';
import { Color } from '../../constants';
import { useBreakPointStore } from '../../store/breakPoint';
import { Text } from '../Text';
import { TabsProps } from './TabsType';

function Tabs({ tabList, onTabChange }: TabsProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [tabView, setTabView] = useState(tabList[0].value);

  const onClickTab = useCallback(
    (value: string) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      if (e.target instanceof HTMLDivElement) {
        setTabView(value);
        onTabChange(value);
      }
    },
    [onTabChange],
  );

  return (
    <TabsList ref={ref}>
      {tabList.map((tab) => (
        <Tab className={tabView === tab.value ? 'active' : ''} key={tab.value} onClick={onClickTab(tab.value)}>
          <Text type="body16" color="White100">
            {tab.label}
          </Text>
        </Tab>
      ))}
    </TabsList>
  );
}

const TabsList = styled.nav`
  display: flex;
  justify-content: space-around;
  position: relative;
  min-width: 300px;
  height: 70px;
  border-top: 1px solid ${Color.Gray700};
`;

const Tab = styled.div`
  display: inline-flex;
  flex: 1;
  justify-content: center;
  position: relative;
  cursor: pointer;
  padding-top: 16px;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    width: 100%;
    border-top: 1px solid transparent;
    transition: all 0.3s linear;
  }

  &.active::before {
    border-top: 1px solid ${Color.Primary100};
  }
`;

export default Tabs;
