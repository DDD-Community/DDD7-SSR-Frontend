export const Color = {
  Primary50: '#5A89FF',
  Primary100: '#3C6EEB',
  Primary200: '#2853BF',

  White100: '#fff',

  Gray100: '#F7F7F7',
  Gray200: '#E5E6EC',
  Gray300: '#CBCDD6',
  Gray400: '#BDBEC6',
  Gray500: '#A2A5AD',

  Gray600: '#8C8F9C',
  Gray650: '#676A75',
  Gray750: '#464851',
  Gray800: '#303136',
  Gray700: '#585B67',
  Gray850: '#212225',
  Gray900: '#191A1C',
  Gray950: '#111111',

  Red100: '#EB3C3C',
};

export const FontSize = {
  xLarge: '28px',
  Large: '16px',
  medium: '14px',
  small: '12px',
};

export type ColorType = keyof typeof Color;

export type FontSizeType = keyof typeof FontSize;

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const REQUEST_AUTH_URL = {
  KAKAO: process.env.KAKAO_AUTH_URL,
  NAVER: process.env.NAVER_AUTH_URL,
  GOOGLE: process.env.GOOGLE_AUTH_URL,
};
