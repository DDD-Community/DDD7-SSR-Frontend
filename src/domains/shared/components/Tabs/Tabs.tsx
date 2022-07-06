import styled from '@emotion/styled';
import React, { useState, useEffect, useCallback } from 'react';
import { Color } from '../../constants';
import { Text } from '../Text';
import { TabsProps } from './TabsType';

function Tabs({ tabList, onTabChange }: TabsProps) {
  const [tabView, setTabView] = useState(tabList[0].value);
  const [tabBarPosition, setTabBarPosition] = useState(0);

  const moveTabBar = useCallback(() => {
    const tabViewIndex = tabList.findIndex((tab) => tab.value === tabView);
    if (tabViewIndex === 0) {
      setTabBarPosition(0);
      return;
    }

    setTabBarPosition(120 * tabViewIndex);
  }, [tabList, tabView]);

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

  useEffect(() => {
    moveTabBar();
  }, [tabView]);

  return (
    <TabsList listCount={tabList.length} tabBarPosition={tabBarPosition}>
      {tabList.map((tab, index) => (
        <Tab key={tab.value} onClick={onClickTab(tab.value)}>
          <Text type="body16" color="White100">
            {tab.label}
          </Text>
        </Tab>
      ))}
    </TabsList>
  );
}

interface PointBarProps {
  tabBarPosition: number;
  listCount: number;
}

const TabsList = styled('nav')<PointBarProps>`
  display: flex;
  position: relative;
  min-width: 360px;
  height: 70px;
  border-top: 1px solid ${Color.Gray700};
  padding-top: 16px;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: 0px;
    transform: translateX(${(props) => props.tabBarPosition}px);
    display: block;
    width: 120px;
    border-top: 1px solid ${Color.Primary100};
    transition: all 0.2s linear;
  }
`;

const Tab = styled('div')`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  width: 120px;
`;

export default Tabs;
