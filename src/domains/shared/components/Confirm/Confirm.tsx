import { css } from '@emotion/react';
import React from 'react';
import { Modal } from '../Modal';
import { Text } from '../Text';
import { Spacing } from '../Spacing';
import { ConfirmProps } from './ConfirmType';
import { Button } from '../Button';
import { Color } from '../../constants';

export const Confirm = ({
  isShown,
  onClose,
  description,
  buttonText,
  buttonTextColor = 'White100',
  onConfirm,
}: ConfirmProps) => {
  return (
    <Modal isShown={isShown} onClose={onClose} position="center">
      <div css={confirmContainerStyle}>
        <Text type="body18" color="White100">
          {description}
        </Text>
        <Spacing col={40} />

        <div css={buttonWrapperStyle}>
          <Button type="button" color="transparent" size="medium" onClick={onClose}>
            <Text color="Gray500" type="body16">
              취소
            </Text>
          </Button>
          <div></div>
          <Button type="button" color="transparent" size="medium" onClick={onConfirm}>
            <Text color={buttonTextColor} type="body16">
              {buttonText}
            </Text>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

const confirmContainerStyle = css`
  width: 311px;
  height: 166px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 44px 0px;
  background: ${Color.Gray800};
  border-radius: 16px;
`;

const buttonWrapperStyle = css`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 0;
  border-top: 1px solid ${Color.Gray750};

  & > div {
    width: 1px;
    height: 100%;
    border-right: 1px solid ${Color.Gray750};
  }

  & button {
    width: 50%;
  }
`;
