import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Spacing, Text, Viewer, CommentList } from 'src/domains/shared/components';
import { useCommentListQuery, useCreateCommentMutation, usePostDetailQuery } from './PostDetail.queries';
import { Textarea, Button } from 'src/domains/shared/components';
import { UseInfiniteQueryResult, useQueryClient } from 'react-query';
import { GetCommentsResponse } from './PostDetail.model';

const PostDetail = () => {
  const queryClient = useQueryClient();

  const { query } = useRouter();
  const postIdx = Number(query.postIdx);
  // TODO: SSR 처리 필요
  const postDetailQuery = usePostDetailQuery(postIdx);
  const commentListQuery = useCommentListQuery(postIdx);
  const createCommentMutation = useCreateCommentMutation();

  const totalCommentCount = commentListQuery.data?.pages.flatMap((data) => data)[0].totalElements;
  const commentList = commentListQuery.data?.pages.flatMap((data) => data.content);

  const [commentText, setCommentText] = useState('');

  const handleLoadMore = () => commentListQuery.fetchNextPage();

  const handleCreateComment = () => {
    createCommentMutation.mutate(
      {
        postIdx,
        comment: commentText,
        accountIdx: 8,
      },
      {
        onSuccess: () => {
          // 리팩토링 필요.
          queryClient.invalidateQueries(['CommentList', postIdx]);
          setCommentText('');
        },
      },
    );
  };

  return (
    <section css={postDetailSection}>
      <Text type="title28" color="White100">
        {postDetailQuery.data?.title}
      </Text>
      {postDetailQuery.data && <Viewer initialValue={postDetailQuery.data.contents} />}

      <Spacing col={117} />

      {commentList && (
        <CommentList
          totalCounts={totalCommentCount || 0}
          isLoadMore={commentListQuery.hasNextPage}
          comments={commentList}
          onLoadMore={handleLoadMore}
        />
      )}

      <Textarea
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
        maxLength={1000}
        placeholder="댓글을 적어주세요."
        withCount
      />
      <Button type="button" color="Primary100" disabled={commentText.length === 0} onClick={handleCreateComment}>
        작성하기
      </Button>
    </section>
  );
};

export default PostDetail;

const postDetailSection = css`
  margin: 83px 0px;
  overflow-y: auto;
`;
