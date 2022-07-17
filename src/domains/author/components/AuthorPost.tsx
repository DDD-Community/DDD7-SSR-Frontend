import React, { useMemo } from 'react';
import { useAuthorPostListQuery } from '../Author.quries';
import { EmptyContent, Text, Button, PostGrid, Spacing } from 'src/domains/shared/components';

interface AuthorPostProps {
  accountIdx: number;
  isOwner: boolean;
}

export const AuthorPost = ({ accountIdx, isOwner }: AuthorPostProps) => {
  const authorPostListQuery = useAuthorPostListQuery(accountIdx);
  const postList = useMemo(
    () => authorPostListQuery.data?.pages.flatMap((posts) => posts.content),
    [authorPostListQuery.data],
  );
  const loadMorePost = () => authorPostListQuery.fetchNextPage();

  const isEmpty = postList && postList?.length > 0;

  return (
    <>
      <Spacing col={isEmpty ? 60 : 45} />
      <div>
        {!isEmpty && postList ? (
          <PostGrid contents={postList} loadMore={loadMorePost} />
        ) : (
          <EmptyContent
            icon="Exclamation"
            iconColor="Primary100"
            description={'아직 블로그에 글을 작성하지 않으셨어요.\n 오늘 설레는 첫 글을 작성해볼까요?'}
            additionalComponent={
              isOwner && (
                <Button color="Primary100" type="button" size="medium">
                  <Text color="White100" type="body14">
                    글 작성하러 가기
                  </Text>
                </Button>
              )
            }
          />
        )}
      </div>
    </>
  );
};
