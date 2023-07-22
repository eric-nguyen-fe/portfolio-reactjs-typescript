import { Story, Meta } from '@storybook/react';
import React from 'react';

import Information from '.';

export default {
  title: 'Components/templates/Information',
  component: Information,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Information />
);
