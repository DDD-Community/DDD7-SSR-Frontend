import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React from 'react';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import { Text, Button, Spacing } from 'src/domains/shared/components';

const Custom404 = () => {
  const router = useRouter();

  const routeMain = () => {
    router.push('/');
  };

  return (
    <DefaultLayout>
      <section css={notFoundContainerStyle}>
        <img css={notFoundImageStyle} src="/pageNotFound.png" alt="page-not-found" />

        <Spacing col={24} />

        <Text type="body14" color="White100">
          페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
        </Text>
        <Spacing col={12} />
        <Text type="body14" color="White100">
          입력하신 페이지의 주소가 정확한지 다시 한번 확인해주세요.
        </Text>

        <Spacing col={24} />

        <Button type="button" size="medium" color="Primary100" onClick={routeMain}>
          <Text type="body14" color="White100">
            메인 페이지로 돌아가기
          </Text>
        </Button>
      </section>
    </DefaultLayout>
  );
};

export default Custom404;

const notFoundContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 136px 0 0;
`;

const notFoundImageStyle = css`
  width: 197px;
  height: 133px;
`;
