import { Story, Meta } from '@storybook/react';
import React from 'react';

import CTooltip from '.';

export default {
  title: 'Components/molecules/CTooltip',
  component: CTooltip,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <CTooltip />
);
