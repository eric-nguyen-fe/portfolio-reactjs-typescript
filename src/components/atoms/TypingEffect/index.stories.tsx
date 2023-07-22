import { Story, Meta } from '@storybook/react';
import React from 'react';

import TypingEffect from '.';

export default {
  title: 'Components/atoms/TypingEffect',
  component: TypingEffect,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <TypingEffect text="" />
);
