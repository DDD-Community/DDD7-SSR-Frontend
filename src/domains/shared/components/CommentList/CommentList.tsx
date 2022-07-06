import React from 'react';
import { CommentListProps } from './CommentListType';
import { Spacing, Comment, Button } from '..';
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

      {isLoadMore && (
        <div css={loadMoreStyle}>
          <Button color="transparent" type="button" onClick={onLoadMore}>
            <Text type="tag12" color="Primary100">
              이전댓글보기
            </Text>
          </Button>
        </div>
      )}

      <ul>
        {comments.map((comment) => (
          <Comment key={comment.commentIdx} {...comment} />
        ))}
      </ul>
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

const loadMoreStyle = css`
  width: 100%;
  display: flex;
  border-top: 1px solid ${Color.Gray750};
  padding: 21px 0;

  & button {
    margin: 0 auto;
  }
`;
