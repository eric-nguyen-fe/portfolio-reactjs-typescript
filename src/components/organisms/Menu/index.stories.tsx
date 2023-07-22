import { Story, Meta } from '@storybook/react';
import React from 'react';

import Menu from '.';

export default {
  title: 'Components/organisms/Menu',
  component: Menu,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Menu option={[]} />
);
