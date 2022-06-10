import type { NextPage } from 'next';
import Head from 'next/head';
import { MultipleSelect, Button, Header, Switch } from 'src/domains/shared/components';
import { useCounterStore } from '../domains/shared/store/counter';
import { useState } from 'react';
import { ValueOption } from 'src/domains/shared/components/MultipleSelect/MultipleSelect.types';

const options = [
  {
    label: 'ansejrrhkd@naver.com',
    value: 'ansejrrhkd',
  },
  {
    label: 'ansrjsdn@naver.com',
    value: 'ansrjsdn',
  },
  {
    label: 'test1234@naver.com',
    value: 'test1234',
  },
  {
    label: 'test55555@naver.com',
    value: 'test55555',
  },
];

const Home: NextPage = () => {
  const { count, increase, decrease, increaseByValue } = useCounterStore();
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState<ValueOption[]>([]);

  const onChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <MultipleSelect
          options={options}
          value={values}
          onChange={(newValue) => {
            console.log('뉴밸류', newValue);
            setValues(newValue);
          }}
        />
        <Switch checked={checked} onChange={onChange} />
        <div>본 카운트: {count}</div>
        <TestComponent />

        <Button color="Primary100" size="large" onClick={increase}>
          증가하기
        </Button>
        <Button color="Gray800" size="medium" onClick={decrease}>
          감소하기
        </Button>
        <Button color="Primary100" size="small" onClick={() => increaseByValue(5)}>
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
