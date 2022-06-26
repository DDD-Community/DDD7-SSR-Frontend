import { css, SerializedStyles } from '@emotion/react';
import { memo, PropsWithChildren, useMemo } from 'react';
import { Color, ColorType } from '../../constants';

type TextType = 'title28' | 'title24' | 'title16' | 'body18' | 'body16' | 'body14' | 'tag12';

interface TextProps {
  type: TextType;
  color?: ColorType;
  useInline?: boolean;
  className?: string;
  onClick?: () => void;
}

const Text: React.FC<PropsWithChildren<TextProps>> = ({ children, className, type, color, useInline, onClick }) => {
  const textStyle = useMemo(
    () => css`
      ${TextStyleMap[type]}
      color: ${Color[color || 'White100']};
      display: ${useInline ? 'inline-flex' : 'block'};
    `,
    [type, color, useInline],
  );

  return (
    <div className={className} css={textStyle} onClick={onClick}>
      {children}
    </div>
  );
};

export default memo(Text);

export const TextStyleMap: Record<TextType, SerializedStyles> = {
  title28: css`
    font-size: 28px;
    line-height: 34px;
    font-weight: 700;
  `,
  title24: css`
    font-size: 24px;
    line-height: 29px;
    font-weight: 700;
  `,
  title16: css`
    font-size: 16px;
    line-height: 19px;
    font-weight: 700;
  `,
  body18: css`
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  `,
  body16: css`
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
  `,
  body14: css`
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
  `,
  tag12: css`
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  `,
};
