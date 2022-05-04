import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Writer from '../domains/shared/components/editor/Writer';
import Viewer from '../domains/shared/components/editor/Viewer';
import { Button } from '../domains/shared/components/button';
import { useCounterStore } from '../domains/shared/store/counter';

const Home: NextPage = () => {
  const { count, increase, decrease, increaseByValue } = useCounterStore();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Writer />
        <Viewer />

        <div>본 카운트: {count}</div>
        <TestComponent />

        <Button color="primary" size="large" onClick={increase}>
          증가하기
        </Button>
        <Viewer />
        <Button color="secondary" size="medium" onClick={decrease}>
          감소하기
        </Button>
        <Viewer />
        <Button color="default" size="small" onClick={() => increaseByValue(5)}>
          많이 증가하기
        </Button>
      </main>
    </div>
  );
};

export default Home;

const TestComponent = () => {
  const { count } = useCounterStore();
  return <div>테스트: {count}</div>;
};
