import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { TestComp } from 'components/TestComp';

const Template: Story = () => <TestComp />;

export default {
  title: 'Atoms/Test',
  component: TestComp
} as Meta;

export const TestComponent = Template.bind({});

TestComponent.args = {};
