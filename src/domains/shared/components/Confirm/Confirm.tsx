import { css } from '@emotion/react';
import React from 'react';
import { Modal } from '../Modal';
import { Text } from '../Text';
import { Spacing } from '../Spacing';
import { ConfirmProps } from './ConfirmType';
import { Button } from '../Button';
import { Color } from '../../constants';
import { BreakPoint } from '../../hooks/useMediaQuery';

export const Confirm = ({ isShown, onClose, description, buttonText, onConfirm }: ConfirmProps) => {
  return (
    <Modal isShown={isShown} onClose={onClose} position="center">
      <div css={confirmContainerStyle}>
        <Text type="title20" color="White100">
          {description}
        </Text>
        <Spacing col={16} />
        <Button color="Red100" onClick={onConfirm} size="medium">
          <Text color="White100" type="body14">
            {buttonText}
          </Text>
        </Button>
      </div>
    </Modal>
  );
};

const confirmContainerStyle = css`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 58px 80px 48px;
  background: ${Color.Gray800};
  border-radius: 16px;

  ${BreakPoint.Mobile()} {
    width: 360px;
    padding: 48px 60px 32px;
  }
`;
