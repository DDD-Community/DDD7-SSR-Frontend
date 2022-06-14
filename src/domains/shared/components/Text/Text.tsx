import { css, SerializedStyles } from '@emotion/react';
import { memo, PropsWithChildren, useMemo } from 'react';
import { Color, ColorType } from '../../constants';

type TextType = 'title28' | 'title24' | 'title16' | 'body14' | 'tag12';

interface TextProps {
  type: TextType;
  color?: ColorType;
}

const Text: React.FC<PropsWithChildren<TextProps>> = ({ children, type, color }) => {
  const textStyle = useMemo(
    () => css`
      ${TextStyleMap[type]}
      color: ${Color[color || 'White100']};
    `,
    [type, color],
  );

  return <div css={textStyle}>{children}</div>;
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