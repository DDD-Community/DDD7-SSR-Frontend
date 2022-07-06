import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { Spacing, Text, Viewer, CommentList } from 'src/domains/shared/components';
import { useCommentListQuery, useCreateCommentMutation, usePostDetailQuery } from './PostDetail.queries';
import { Textarea, Button } from 'src/domains/shared/components';
import { useQueryClient } from 'react-query';
import Image from 'next/image';

const PostDetail = () => {
  const queryClient = useQueryClient();

  const { query } = useRouter();
  const postIdx = Number(query.postIdx);
  // TODO: SSR 처리 필요
  const postDetailQuery = usePostDetailQuery(postIdx);
  const commentListQuery = useCommentListQuery(postIdx);
  const createCommentMutation = useCreateCommentMutation();

  const totalCommentCount = commentListQuery.data?.pages.flatMap((data) => data)[0].totalElements;
  const commentList = useMemo(
    () => [...(commentListQuery.data?.pages || [])].reverse().flatMap((data) => [...data.content].reverse()),
    [commentListQuery.data?.pages],
  );

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
      <Spacing col={32} />
      <div css={commentTextareaWrapper}>
        <div>
          <Image src={'/defaultProfileImage.png'} width={48} height={48} alt="profile-image" />
          <Spacing row={20} />
          <Textarea
            value={commentText}
            onChange={(event) => setCommentText(event.target.value)}
            maxLength={1000}
            placeholder="댓글을 적어주세요."
            withCount
          />
        </div>
        <Spacing col={16} />
        <Button
          type="button"
          color={commentText.length === 0 ? 'Gray700' : 'Primary100'}
          size="medium"
          disabled={commentText.length === 0}
          onClick={handleCreateComment}
        >
          <Text type="body14">작성하기</Text>
        </Button>
      </div>
    </section>
  );
};

export default PostDetail;

const postDetailSection = css`
  width: 100%;
  max-width: 936px;
  display: flex;
  flex-direction: column;
  margin: 83px auto;
  padding-bottom: 153px;
  overflow-y: auto;
`;

const commentTextareaWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 6px;

  & > div {
    display: flex;
    align-items: flex-start;

    & textarea {
      height: 217px;
    }
  }

  & button {
    margin-left: auto;
  }
`;
