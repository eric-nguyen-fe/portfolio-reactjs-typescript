import { Story, Meta } from '@storybook/react';
import React from 'react';

import ExperienceTimeline from '.';

export default {
  title: 'Components/organisms/ExperienceTimeline',
  component: ExperienceTimeline,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <ExperienceTimeline experiences={undefined} />
);
