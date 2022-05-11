import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';
import { ButtonSizeType } from './ButtonType';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const BUTTON_SIZES: ButtonSizeType[] = ['small', 'medium', 'large'];

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => {
  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, auto)', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Default Button</h2>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} color="default" size={size} style={{ marginBottom: '40px' }}>
              {children}
            </Button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Primary Button</h2>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} color="primary" size={size} style={{ marginBottom: '40px' }}>
              {children}
            </Button>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h2>Secondary Button</h2>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} color="secondary" size={size} style={{ marginBottom: '40px' }}>
              {children}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h2>Loading</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {BUTTON_SIZES.map((size) => (
            <Button key={size} {...args} isLoading color="primary" size={size} style={{ marginRight: '40px' }}>
              {children}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h2>Disabled Buttons</h2>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {BUTTON_SIZES.map((size) => (
            <Button disabled key={size} {...args} size={size} style={{ marginRight: '40px' }}>
              {children}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export const Example = Template.bind({});
Example.args = {
  children: 'Example',
};
