import { Story, Meta } from '@storybook/react';
import React from 'react';

import Project from '.';

export default {
  title: 'Components/templates/Project',
  component: Project,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Project />
);
