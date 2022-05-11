import React from 'react';

export type ButtonSizeType = 'large' | 'medium' | 'small';
export type ButtonColorType = 'primary' | 'secondary' | 'default';

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  color?: ButtonColorType;
  size?: ButtonSizeType;
  isLoading?: boolean;
  disabled?: boolean;
}
