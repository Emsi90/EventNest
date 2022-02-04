import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from 'components/Button';

const Template: Story = () => <Button>Lorem ipsum</Button>;

export default {
  title: 'Atoms/Button',
  component: Template
} as Meta;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary button'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary button'
};

export const Outlined = Template.bind({});
Outlined.args = {
  variant: 'outlined',
  children: 'Outlined button'
};
