import { Story, Meta } from '@storybook/react';
import React from 'react';

import Contact from '.';

export default {
  title: 'Components/templates/Contact',
  component: Contact,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <Contact />
);
