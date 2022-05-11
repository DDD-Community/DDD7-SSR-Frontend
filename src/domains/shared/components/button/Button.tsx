import { css, SerializedStyles } from '@emotion/react';
import { forwardRef } from 'react';
import { ButtonColorType, ButtonProps, ButtonSizeType } from './ButtonType';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = 'button', onClick, children, color, size, isLoading, disabled = false, ...props }, ref) => {
    const ButtonCss = css`
      ${ButtonBaseCss}
      ${size && ButtonSizeCss[size]};
      ${color && ButtonColorCss[color]};
    `;

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

export default Button;

const ButtonBaseCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;
  height: 30px;
`;

const ButtonSizeCss: Record<ButtonSizeType, SerializedStyles> = {
  small: css`
    width: 280px;
  `,
  medium: css`
    width: 320px;
  `,
  large: css`
    width: 360px;
  `,
};

const ButtonColorCss: Record<ButtonColorType, SerializedStyles> = {
  primary: css`
    background-color: royalblue;
    color: white;
  `,
  secondary: css`
    background-color: beige;
    color: royalblue;
  `,
  default: css`
    background-color: gray;
    color: white;
  `,
};
