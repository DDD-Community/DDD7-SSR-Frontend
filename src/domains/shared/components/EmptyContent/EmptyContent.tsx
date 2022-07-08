import { css } from '@emotion/react';
import React from 'react';
import { Color, ColorType } from '../../constants';
import { Icon, IconType } from '../Icon';
import { Text } from '../Text';
import { Spacing } from '../Spacing';
import styled from '@emotion/styled';

interface EmptyContentProps {
  icon?: IconType;
  iconColor?: ColorType;
  description: string;
  additionalComponent?: React.ReactNode;
}

export const EmptyContent = ({ icon, iconColor, description, additionalComponent }: EmptyContentProps) => {
  return (
    <div css={emptyContentStyle}>
      {icon && (
        <>
          <Icon icon={icon} color={iconColor ? Color[iconColor] : 'white'} size={28} />
          <Spacing col={20} />
        </>
      )}

      <CustomText type="body16" color="White100">
        {description}
      </CustomText>
      <Spacing col={20} />

      {additionalComponent}
    </div>
  );
};

const emptyContentStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${Color.Gray850};
  padding: 62px 0 64px;
  border-radius: 20px;
`;

const CustomText = styled(Text)`
  text-align: center;
  white-space: pre;
  line-height: 23px;
`;
