import React, { useState } from 'react';
import { ProfileImage, Tabs, Text, Spacing } from 'src/domains/shared/components';

const tabList = [
  {
    label: '작가소개',
    value: 'author',
  },
  {
    label: '글',
    value: 'text',
  },
  {
    label: '크루',
    value: 'crew',
  },
];

const Author = () => {
  const [selectedTab, setSelectedTab] = useState('');

  const handleChangeTab = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <section>
      <div>
        <ProfileImage src={undefined} />
        <Text type="title24" color="White100">
          김이름의 블로그
        </Text>
        <Text type="tag12" color="White100">
          ansejrrhkd@naver.com
        </Text>
      </div>

      <Spacing col={62} />
      <Tabs tabList={tabList} onTabChange={handleChangeTab} />

      {selectedTab === 'author' && (
        <div>
          <div>
            <Text type="body16" color="White100">
              소개
            </Text>
            <Spacing col={24} />
            <Text type="tag12" color="White100">
              비트겐슈타인을 동경하며 철학과 컴퓨터 공학을 복수 전공한, 한때는 철학자를 꿈꿨던 개발자. 지금은 라인에서
              메신저/비지인 중심 커뮤니케이션 서비스 서버 개발을 하고 있다. 깨질수록 강해진다는 믿음으로 이리저리
              부딪쳐보고 있는 1년 차 초보 개발자.
            </Text>
          </div>
          <Spacing col={42} />
          <div>
            <Text type="body16" color="White100">
              업적
            </Text>
          </div>
        </div>
      )}
    </section>
  );
};

export default Author;
