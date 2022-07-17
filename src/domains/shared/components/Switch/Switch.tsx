import styled from '@emotion/styled';
import React, { forwardRef, memo } from 'react';
import { Color } from '../../constants';

interface SwitchProps {
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  id?: string;
  name?: string;
  className?: string;
}

const Switch: React.FC<SwitchProps> = forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked = false, disabled, onChange, id, name, className, ...restProps }, ref) => {
    const handleSliderClick = () => {
      if (disabled) {
        return;
      }

      onChange();
    };

    return (
      <SwitchContainer {...restProps} className={className}>
        <SwitchInput type="checkbox" id={id} name={name} ref={ref} checked={checked} disabled={disabled} readOnly />
        <SwitchSlider onClick={handleSliderClick} />
      </SwitchContainer>
    );
  },
);

export default memo(Switch);
Switch.displayName = 'Switch';

const SwitchContainer = styled.span`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 18px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${Color.Primary100};
  }

  &:checked + span::before {
    transform: translateX(14px);
  }

  &:disabled + span {
    opacity: 0.2;
  }
`;

const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${Color.Gray300};
  transition: 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: '';
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: ${Color.Gray100};
    transition: 0.4s;
    border-radius: 50%;
  }
`;
