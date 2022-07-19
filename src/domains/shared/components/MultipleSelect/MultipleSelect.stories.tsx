import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import MultipleSelect from './MultipleSelect';
import { ValueOption } from './MultipleSelectTypes';

export default {
  title: 'MultipleSelect',
  component: MultipleSelect,
  parameters: {
    componentSubtitle: 'MultipleSelect Component를 보여줍니다.',
  },
} as ComponentMeta<typeof MultipleSelect>;

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

const Template: ComponentStory<typeof MultipleSelect> = ({ ...args }) => {
  const [values, setValues] = useState<string[]>([]);

  return (
    <MultipleSelect
      {...args}
      options={options}
      value={values}
      onChange={(newValue) => {
        setValues(newValue);
      }}
      placeholder="검색어를 입력해주세요."
    />
  );
};

export const Example = Template.bind({});
