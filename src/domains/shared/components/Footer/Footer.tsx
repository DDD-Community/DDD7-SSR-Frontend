import styled from '@emotion/styled';
import { memo } from 'react';
import { Color } from '../../constants';
import { BreakPoint } from '../../hooks/useMediaQuery';
import { Text } from '../Text';

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLine></FooterLine>
        <FooterTextContainer>
          <Text type={'tag12'} color={'Gray600'}>
            듀스페이퍼
          </Text>
          <Text type={'tag12'} color={'Gray600'}>
            광고문의 : ddd.web2@gmail.com
          </Text>
        </FooterTextContainer>
      </FooterContainer>
    </>
  );
};

export default memo(Footer);

const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Color.Gray700};
`;

const FooterContainer = styled.footer`
  margin-top: 30px;
  height: 58px;
  color: white;
`;

const FooterTextContainer = styled.div`
  padding: 24px 92px;
  ${BreakPoint.Mobile()} {
    padding: 24px 32px 24px 28px;
  }
`;
