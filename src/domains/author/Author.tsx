import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { ProfileImage, Tabs, Text, Spacing, Button } from 'src/domains/shared/components';
import { TabValues } from './Author.model';
import { AuthorTag } from './components/AuthorTag';
import { AuthorPost } from './components/AuthorPost';
import { AuthorCrew } from './components/AuthorCrew';
import { useDeleteCrewMutation, useRequireCrewMutation } from '../shared/queries/crews';
import useUser from '../shared/hooks/useUser';
import { useQueryClient } from 'react-query';
import { useAccountDetailQuery } from '../shared/queries/account';
import { Confirm } from '../shared/components/Confirm';
import { useIsShown } from '../shared/hooks/useIsShown';
import { toast } from 'react-toastify';

const tabList = [
  {
    label: '작가소개',
    value: 'author',
  },
  {
    label: '글',
    value: 'post',
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

const Author = () => {
  const queryClient = useQueryClient();

  const { query } = useRouter();
  const accountIdx = Number(query.accountIdx);
  const profile = useUser();

  const [selectedTab, setSelectedTab] = useState<TabValues>('author');

  const accountDetailQuery = useAccountDetailQuery(accountIdx);
  const requireCrewMutation = useRequireCrewMutation();
  const deleteCrewMutation = useDeleteCrewMutation();

  const [isShownDeleteCrewConfirm, handleOpenDeleteCrewConfirm, handleCloseDeleteCrewConfirm] = useIsShown(false);

  const handleTabChange = (value: string) => {
    setSelectedTab(value as TabValues);
  };

  const handleRequireCrew = () => {
    if (profile?.accountIdx) {
      requireCrewMutation.mutate(
        { requesterIdx: profile.accountIdx, accepterIdx: accountIdx },
        {
          onSuccess: () => {
            toast.success('크루 요청 되었어요.');
            queryClient.invalidateQueries(['GetAuthorDetail', accountIdx]);
          },
        },
      );
    }
  };

  const handleDeleteCrew = () => {
    if (profile?.accountIdx) {
      deleteCrewMutation.mutate(
        {
          requesterIdx: profile.accountIdx,
          accepterIdx: accountIdx,
        },
        {
          onSuccess: () => {
            toast.success('크루 해제 되었어요.');
            queryClient.invalidateQueries(['GetAuthorDetail', accountIdx]);
            handleCloseDeleteCrewConfirm();
          },
        },
      );
    }
  };

  return (
    <>
      <section css={authorContainerStyle}>
        <div css={authorTopStyle}>
          <div css={authorBaseInfoWrapperStyle}>
            <ProfileImage src={undefined} updatable={false} />
            <div css={authorBaseInfoStyle}>
              <Text type="title24" color="White100">
                {accountDetailQuery.data?.name}
              </Text>
              <Spacing col={10} />
              <Text type="tag12" color="White100">
                {accountDetailQuery.data?.email}
              </Text>
            </div>
          </div>

          {!accountDetailQuery.data?.owner && (
            <>
              {accountDetailQuery.data?.crew ? (
                <Button type="button" color="Red100" size="medium" onClick={handleOpenDeleteCrewConfirm}>
                  <Text type="body14" color="White100">
                    크루 해제하기
                  </Text>
                </Button>
              ) : (
                <Button type="button" color="Primary100" size="medium" onClick={handleRequireCrew}>
                  <Text type="body14" color="White100">
                    크루 추가하기
                  </Text>
                </Button>
              )}
            </>
          )}
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
              <PreWrapText type="tag12" color="White100">
                {accountDetailQuery.data?.introduction}
              </PreWrapText>
            </div>
            <Spacing col={42} />
            <div>
              <Text type="body16" color="White100">
                업적
              </Text>
            </div>
          </div>
        )}

        {selectedTab === 'post' && <AuthorPost accountIdx={accountIdx} />}
        {selectedTab === 'crew' && <AuthorCrew accountIdx={accountIdx} />}
        {selectedTab === 'tag' && <AuthorTag accountIdx={accountIdx} />}
      </section>

      <Confirm
        isShown={isShownDeleteCrewConfirm}
        onClose={handleCloseDeleteCrewConfirm}
        onConfirm={handleDeleteCrew}
        description="크루를 해제할까요?"
        buttonTextColor="Red100"
        buttonText="해제하기"
      />
    </>
  );
};

export default Author;

const authorContainerStyle = css`
  display: flex;
  flex-direction: column;
  max-width: 942px;
  margin: 56px auto 0;
`;

const PreWrapText = styled(Text)`
  white-space: pre-wrap;
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
