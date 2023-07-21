import { Story, Meta } from '@storybook/react';
import React from 'react';

import LayoutHoc from '.';

export default {
  title: 'Components/templates/LayoutHoc',
  component: LayoutHoc,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <LayoutHoc />
);
