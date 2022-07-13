import { css } from '@emotion/react';
import React, { forwardRef, memo, useMemo } from 'react';
import { Color, FontSize } from '../../constants';
import { InputProps, InputVariant } from './TextInputType';

const TextInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      error,
      id,
      variant = 'default',
      labelText,
      maxLength,
      minLength,
      name,
      placeholder,
      required,
      validationMessage,
      value,
      type = 'text',
      withCount,
      readOnly,
      onChange,
      onBlur,
      onFocus,
      onClick,
      onKeyDown,
    },
    ref,
  ) => {
    const TextInputCss = useMemo(
      () => css`
        ${TextInputStyle(variant, error)}
      `,
      [variant, error],
    );

    return (
      <>
        <label css={TextInputLabelStyle} htmlFor={id}>
          {labelText && <span css={TextInputLabelTextStyle}>{labelText}</span>}
          <div css={TextInputContainerStyle}>
            <input
              css={TextInputCss}
              id={id}
              ref={ref}
              className={className}
              placeholder={placeholder}
              name={name}
              type={type}
              value={value}
              disabled={disabled}
              readOnly={readOnly}
              required={required}
              maxLength={maxLength}
              minLength={minLength}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              onClick={onClick}
              onKeyDown={onKeyDown}
            />
            {withCount && !!maxLength && (
              <span css={TextInputLengthCounterStyle}>
                {value?.length ?? 0} / {maxLength}
              </span>
            )}
          </div>
        </label>
        {error && !!validationMessage && <div css={TextInputErrorMessageStyle}>{validationMessage}</div>}
      </>
    );
  },
);

export default TextInput;

const TextInputLabelStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextInputLabelTextStyle = css`
  display: block;
  margin: 12px 0 6px 0;
`;

const TextInputStyle = (variant: InputVariant, isError?: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-size: ${FontSize.medium};
  border: ${isError ? '1px solid red' : '1px solid black'};
  border-radius: 8px;
  padding: 12px 65px 12px 16px;
  color: ${Color.White100};
  background-color: ${Color.Gray800};
  box-sizing: border-box;
  outline: none;
  border: none;

  ${variant === 'search' &&
  css`
    height: 40px;
    border-radius: 54px;
  `}
`;

const TextInputContainerStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
`;

const TextInputLengthCounterStyle = css`
  position: absolute;
  right: 16px;
  color: grey;
`;

const TextInputErrorMessageStyle = css`
  margin: 4px 0 0 4px;
  color: red;
`;
