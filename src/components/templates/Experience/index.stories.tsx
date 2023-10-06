import { Story, Meta } from '@storybook/react';
import React from 'react';

import Experience from '.';

export default {
  title: 'Components/templates/Experience',
  component: Experience,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Experience />
);
