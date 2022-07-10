import React, { useMemo } from 'react';
import { useAuthorTaggedPostListQuery } from '../Author.quries';
import { EmptyContent, PostGrid } from 'src/domains/shared/components';

interface AuthorTagProps {
  accountIdx: number;
}

export const AuthorTag = ({ accountIdx }: AuthorTagProps) => {
  const authorTaggedPostListQuery = useAuthorTaggedPostListQuery(accountIdx);
  const postList = useMemo(
    () => authorTaggedPostListQuery.data?.pages.flatMap((posts) => posts.content),
    [authorTaggedPostListQuery.data],
  );
  const loadMorePost = () => authorTaggedPostListQuery.fetchNextPage();

  return (
    <>
      <div>
        {postList && postList?.length > 0 ? (
          <PostGrid contents={postList} loadMore={loadMorePost} />
        ) : (
          <EmptyContent
            icon="Exclamation"
            iconColor="Primary100"
            description={'아직 태그된 글이 존재하지 않아요.\n 크루와 함께 글을 작성해보세요!'}
          />
        )}
      </div>
    </>
  );
};
