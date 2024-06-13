import { Story, Meta } from '@storybook/react';
import React from 'react';

import Skill from '.';

export default {
  title: 'Components/templates/Skill',
  component: Skill,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Skill />
);
