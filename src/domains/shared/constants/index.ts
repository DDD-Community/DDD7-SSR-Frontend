export const Color = {
  Primary20: '#8FE8F7',
  Primary50: '#6DB5F2',
  Primary80: '#3C6EEB',
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
};

export type ColorType = keyof typeof Color;

export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;