import { css } from '@emotion/react';
import React from 'react';
import { Color } from '../../constants';
import { Text } from '../Text';
import { Spacing } from '../Spacing';
import Image from 'next/image';
import { Comment as CommentType } from 'src/domains/posts/detail/PostDetail.model';

const Comment = ({ account, comment }: CommentType) => {
  return (
    <li css={commentWrapperStyle}>
      <div css={commentAuthorInfoStyle}>
        <Image src={account.profileImg || '/dewspaper_logo-02.svg'} width={32} height={32} alt="profile-image" />
        <Spacing row={8} />
        <Text type="tag12" color="White100" useInline>
          {account.name}
        </Text>
      </div>
      <Spacing col={9} />

      <Text type="body16" color="White100">
        {comment}
      </Text>
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
