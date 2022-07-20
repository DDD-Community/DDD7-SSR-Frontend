import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { Color, DEFAULT_PROFILE_IMAGE } from '../../constants';
import { Button } from '..';
import { Text } from '../Text';
import { Spacing } from '../Spacing';
import { CommentProps } from 'src/domains/posts/detail/PostDetail.model';
import { throttle } from 'lodash-es';
import { formatDate } from '../../utils/date';

const Comment = ({ account, commentIdx, comment, createDate, isOwner, onDeleteComment }: CommentProps) => {
  const commentRef = useRef<HTMLDivElement>(null);
  const [isLineOver, setIsLineOver] = useState(false);
  const [isShowCommentNextLine, setShowCommentNextLine] = useState(false);

  const showCommentNextLine = () => {
    setShowCommentNextLine(true);
    setIsLineOver(false);
  };

  const onDelete = () => {
    onDeleteComment(commentIdx);
  };

  useEffect(() => {
    const checkLineOver = throttle(() => {
      if (commentRef.current) {
        setIsLineOver(commentRef.current.scrollHeight > 95);
      }
    }, 200);

    if (!isShowCommentNextLine) {
      checkLineOver();
      window.addEventListener('resize', checkLineOver);
    }

    return () => {
      window.removeEventListener('resize', checkLineOver);
    };
  }, [isShowCommentNextLine]);

  return (
    <li css={commentWrapperStyle}>
      <div css={commentInfoWrapperStyle}>
        <div css={commentAuthorInfoStyle}>
          <img src={account.profileImg || DEFAULT_PROFILE_IMAGE} width={32} height={32} alt="profile-image" />
          <Spacing row={8} />
          <div>
            <Text type="tag12" color="White100" useInline>
              {account.name}
            </Text>
            <Text color="Gray650" type="tag12">
              {formatDate(createDate)}
            </Text>
          </div>
        </div>

        {isOwner && (
          <Button type="button" color="transparent" onClick={onDelete}>
            <Text type="tag12" color="Red100">
              삭제
            </Text>
          </Button>
        )}
      </div>
      <Spacing col={9} />

      <div ref={commentRef} css={commentBodyStyle(isLineOver, isShowCommentNextLine)}>
        <Text type="body16" color="White100">
          {comment}
        </Text>
      </div>
      {isLineOver && (
        <Button css={moreButtonStyle} type="button" color="transparent" onClick={showCommentNextLine}>
          <Text type="body14" color="Primary100">
            더보기
          </Text>
        </Button>
      )}
    </li>
  );
};

export default Comment;

const commentWrapperStyle = css`
  border-bottom: 1px solid ${Color.Gray750};
  padding: 32px;

  &:first-of-type {
    border-top: 1px solid ${Color.Gray750};
  }
`;

const commentInfoWrapperStyle = css`
  display: flex;
  justify-content: space-between;
`;

const commentAuthorInfoStyle = css`
  display: flex;
  & img {
    border-radius: 50%;
  }
`;

const commentBodyStyle = (isLineOver: boolean, isShowCommentNextLine: boolean) => css`
  display: block;
  max-height: none;
  overflow: hidden;
  -webkit-line-clamp: unset;

  ${isLineOver &&
  !isShowCommentNextLine &&
  css`
    display: -webkit-box;
    -webkit-line-clamp: 5;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  `}
`;

const moreButtonStyle = css`
  position: relative;
  left: -5px;
  padding-left: 0;
`;
