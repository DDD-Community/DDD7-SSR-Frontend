import { css, SerializedStyles } from '@emotion/react';
import { useMemo } from 'react';
import { forwardRef, memo } from 'react';
import { Color } from '../../constants';
import { ButtonProps, ButtonSizeType } from './ButtonType';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = 'button',
      onClick,
      children,
      color = 'Gray800',
      size = 'small',
      fixedWidth,
      isLoading,
      disabled = false,
      ...props
    },
    ref,
  ) => {
    const ButtonCss = useMemo(
      () => css`
        ${ButtonBaseCss}
        ${!fixedWidth && size && ButtonSizeCss[size]};
        ${fixedWidth &&
        css`
          width: ${fixedWidth}px;
          padding-top: 14px;
          padding-bottom: 15px;
        `}
        ${color &&
        css`
          background-color: ${color === 'transparent' ? 'transparent' : Color[color]};
          color: ${color === 'Gray800' || color === 'transparent' ? Color.Primary100 : Color.White100};
          transition: background-color 0.2s linear;
        `};
      `,
      [color, size, fixedWidth],
    );

    return (
      <button
        className={className}
        css={ButtonCss}
        onClick={onClick}
        ref={ref}
        type={type}
        disabled={disabled}
        {...props}
      >
        {isLoading ? <div>Loading Icon...</div> : children}
      </button>
    );
  },
);

export default memo(Button);

const ButtonBaseCss = css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  min-width: 55px;
  cursor: pointer;
  word-break: keep-all;
`;

const ButtonSizeCss: Record<ButtonSizeType, SerializedStyles> = {
  small: css`
    height: 31px;
    padding: 8px 10px;
  `,
  medium: css`
    height: 40px;
    padding: 11px 12px;
  `,
  large: css`
    height: 48px;
    padding: 15px 14px;
  `,
};
