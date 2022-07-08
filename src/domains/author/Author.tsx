import { css } from '@emotion/react';
import React, { useState } from 'react';
import { ProfileImage, Tabs, Text, Spacing, Button } from 'src/domains/shared/components';
import { EmptyContent } from '../shared/components/EmptyContent';
import { useGetFriendsListQuery } from '../shared/queries/friends';
import { CrewItem } from './components/CrewItem';

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
  {
    label: '태그',
    value: 'tag',
  },
];

const friendsList = [
  {
    id: 2,
    profileImg: '',
    blogName: 'Test',
    blogDescription: 'test desc',
  },
  {
    id: 3,
    profileImg: '',
    blogName: 'Test',
    blogDescription: 'test desc',
  },
  {
    id: 4,
    profileImg: '',
    blogName: 'Test',
    blogDescription: 'test desc',
  },
  {
    id: 5,
    profileImg: '',
    blogName: 'Test',
    blogDescription: 'test desc',
  },
  {
    id: 6,
    profileImg: '',
    blogName: 'Test',
    blogDescription: 'test desc',
  },
  {
    id: 7,
    profileImg: '',
    blogName: 'Test',
    blogDescription: 'test desc',
  },
];

const Author = () => {
  const [selectedTab, setSelectedTab] = useState('author');
  const getFriendsListQuery = useGetFriendsListQuery(1);

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <section css={authorContainerStyle}>
      <div css={authorTopStyle}>
        <div css={authorBaseInfoWrapperStyle}>
          <ProfileImage src={undefined} updatable={false} />
          <div css={authorBaseInfoStyle}>
            <Text type="title24" color="White100">
              김이름의 블로그
            </Text>
            <Spacing col={10} />
            <Text type="tag12" color="White100">
              ansejrrhkd@naver.com
            </Text>
          </div>
        </div>

        <Button type="button" color="Primary100" size="medium">
          <Text type="body14" color="White100">
            크루 추가하기
          </Text>
        </Button>
      </div>

      <Spacing col={62} />
      <Tabs tabList={tabList} onTabChange={handleTabChange} />

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

      {selectedTab === 'text' && (
        <div>
          <EmptyContent
            icon="Exclamation"
            iconColor="Primary100"
            description={'아직 블로그에 글을 작성하지 않으셨어요.\n 오늘 설레는 첫 글을 작성해볼까요?'}
            additionalComponent={
              <Button color="Primary100" type="button" size="medium">
                <Text color="White100" type="body14">
                  글 작성하러 가기
                </Text>
              </Button>
            }
          />
        </div>
      )}
      {selectedTab === 'crew' && (
        <div>
          {(friendsList?.length || 0) > 0 ? (
            <ul css={crewGridStyle}>
              {/* {getFriendsListQuery.data?.map((friend) => (
                <CrewItem
                  id={friend.accountIdx}
                  profileImg={friend.profileImg}
                  blogName={friend.email}
                  blogDescription={friend.name}
                />
              ))} */}
              {friendsList.map((friend) => (
                <CrewItem
                  id={friend.id}
                  profileImg={friend.profileImg}
                  blogName={friend.blogName}
                  blogDescription={friend.blogDescription}
                />
              ))}
            </ul>
          ) : (
            <EmptyContent icon="Exclamation" iconColor="Primary100" description="추가된 크루가 없습니다." />
          )}
        </div>
      )}
    </section>
  );
};

export default Author;

const authorContainerStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 942px;
  margin: 56px auto 0;
`;

const authorTopStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const authorBaseInfoWrapperStyle = css`
  display: flex;
  align-items: center;
`;

const authorBaseInfoStyle = css`
  margin-left: 21px;
`;

const crewGridStyle = css`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 296px);
  gap: 21px;
`;
