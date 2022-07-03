import React from 'react';
import { CommentListProps } from './CommentListType';
import { Spacing, Comment } from '..';
import { css } from '@emotion/react';
import { Color } from '../../constants';
import { Text } from '../Text';

const CommentList = ({ totalCounts, comments, isLoadMore, onLoadMore }: CommentListProps) => {
  return (
    <section css={commentListContainerStyle}>
      <div css={commentCountStyle}>
        <Text type="body18" color="White100" useInline>
          댓글
        </Text>
        <Spacing row={8} />
        <Text type="body18" color="Primary100" useInline>
          {totalCounts}
        </Text>
      </div>

      <Spacing col={16} />

      <ul>
        {comments.map((comment) => (
          <Comment key={comment.commentIdx} {...comment} />
        ))}
      </ul>
      {isLoadMore && (
        <>
          <Spacing col={24} />
          <button css={loadMoreButtonStyle} type="button" onClick={onLoadMore}>
            댓글 더 보기
          </button>
          <Spacing col={41} />
        </>
      )}
    </section>
  );
};

export default CommentList;

const commentListContainerStyle = css`
  display: flex;
  flex-direction: column;
`;

const commentCountStyle = css`
  display: flex;
`;

const loadMoreButtonStyle = css`
  color: ${Color.White100};
  border: 1px solid ${Color.Gray750};
  margin: 0 auto;
  padding: 11px 12px;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
`;
