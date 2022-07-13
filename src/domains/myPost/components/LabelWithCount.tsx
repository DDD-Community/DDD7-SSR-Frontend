import { css } from '@emotion/react';
import React from 'react';
import { Text, Spacing } from 'src/domains/shared/components';
import { Color } from 'src/domains/shared/constants';

interface LabelWithCountProps {
  label: string;
  count: number;
  isSelected?: boolean;
}

const LabelWithCount = ({ label, count, isSelected }: LabelWithCountProps) => {
  return (
    <div css={labelContainerStyle(!!isSelected)}>
      <Text type="body16" color="White100">
        {label}
      </Text>
      <Spacing row={7} />
      <div css={labelCountStyle}>{count}</div>
    </div>
  );
};

export default LabelWithCount;

const labelContainerStyle = (isSelected: boolean) => css`
  display: flex;
  opacity: ${isSelected ? 1 : 0.5};
`;

const labelCountStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 17px;
  border-radius: 8px;
  background-color: ${Color.Gray800};
  color: ${Color.White100};
  font-size: 12px;
  line-height: 15px;
`;
