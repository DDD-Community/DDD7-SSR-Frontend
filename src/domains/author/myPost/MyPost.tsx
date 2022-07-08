import { css } from '@emotion/react';
import React, { useState } from 'react';
import { Spacing, Tabs, Text } from 'src/domains/shared/components';
import LabelWithCount from './components/LabelWithCount';

const MyPost = () => {
  const [selectedTab, setSelectedTab] = useState('published');

  const tabList = [
    {
      label: <LabelWithCount label="출간됨" count={11} isSelected={selectedTab === 'published'} />,
      value: 'published',
    },
    {
      label: <LabelWithCount label="임시저장" count={3} isSelected={selectedTab === 'stored'} />,
      value: 'stored',
    },
    {
      label: <LabelWithCount label="비공개" count={0} isSelected={selectedTab === 'private'} />,
      value: 'private',
    },
  ];

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <section css={myPostContainerStyle}>
      <Text type="title24" color="White100">
        내가 쓴 글 보기
      </Text>
      <Spacing col={54} />

      <Tabs tabList={tabList} onTabChange={handleTabChange} />

      <section></section>
    </section>
  );
};

export default MyPost;

const myPostContainerStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 928px;
  margin: 82px auto 0;
`;
