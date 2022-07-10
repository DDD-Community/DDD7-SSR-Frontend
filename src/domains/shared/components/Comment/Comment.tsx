import { css } from '@emotion/react';
import React, { useEffect, useRef, useState } from 'react';
import { Color, DEFAULT_PROFILE_IMAGE } from '../../constants';
import { Button } from '..';
import { Text } from '../Text';
import { Spacing } from '../Spacing';
import { Comment as CommentType } from 'src/domains/posts/detail/PostDetail.model';
import { throttle } from 'lodash-es';

const Comment = ({ account, comment }: CommentType) => {
  const commentRef = useRef<HTMLDivElement>(null);
  const [isLineOver, setIsLineOver] = useState(false);
  const [isShowCommentNextLine, setShowCommentNextLine] = useState(false);

  const showCommentNextLine = () => {
    setShowCommentNextLine(true);
    setIsLineOver(false);
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
      <div css={commentAuthorInfoStyle}>
        <img src={account.profileImg ?? DEFAULT_PROFILE_IMAGE} width={32} height={32} alt="profile-image" />
        <Spacing row={8} />
        <Text type="tag12" color="White100" useInline>
          {account.name}
        </Text>
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

const commentAuthorInfoStyle = css`
  display: flex;
  align-items: center;
  & img {
    border-radius: 50%;
  }
`;

const commentBodyStyle = (isLineOver: boolean, isShowCommentNextLine: boolean) => css`
  display: block;
  max-height: none;
  overflow: auto;
  -webkit-line-clamp: unset;

  ${isLineOver &&
  !isShowCommentNextLine &&
  css`
    display: -webkit-box;
    overflow: hidden;
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
