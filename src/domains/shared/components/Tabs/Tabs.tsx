import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState, useCallback, useRef } from 'react';
import { Color } from '../../constants';
import { Text } from '../Text';
import { TabsProps } from './TabsType';

function Tabs({ tabList, onTabChange, useUpperLine = true, tabGap, useInlineTab }: TabsProps) {
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
    <TabsList ref={ref} useUpperLine={useUpperLine} useInlineTab={useInlineTab}>
      {tabList.map((tab) => (
        <Tab
          className={tabView === tab.value ? 'active' : ''}
          useUpperLine={useUpperLine}
          key={tab.value}
          onClick={onClickTab(tab.value)}
          tabGap={tabGap}
        >
          {tab.label}
        </Tab>
      ))}
    </TabsList>
  );
}

const TabsList = styled.nav(
  ({ useUpperLine, useInlineTab }: Pick<TabsProps, 'useUpperLine' | 'useInlineTab'>) => css`
    position: relative;
    min-width: 300px;
    height: 35px;
    ${!useInlineTab &&
    css`
      display: flex;
      justify-content: space-around;
    `}
    ${useUpperLine &&
    css`
      border-top: 1px solid ${Color.Gray700};
    `}
  `,
);

const Tab = styled.div(
  ({ useUpperLine, tabGap }: Pick<TabsProps, 'useUpperLine' | 'tabGap'>) => css`
    display: inline-flex;
    flex: 1;
    justify-content: center;
    position: relative;
    cursor: pointer;
    padding-top: 16px;

    ${tabGap &&
    css`
      &:not(:last-of-type) {
        margin-right: ${tabGap}px;
      }
    `}

    ${useUpperLine &&
    css`
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
    `}
  `,
);

export default Tabs;
