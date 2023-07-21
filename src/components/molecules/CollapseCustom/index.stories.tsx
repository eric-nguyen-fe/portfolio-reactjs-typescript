import { Story, Meta } from '@storybook/react';
import React from 'react';

import CollapseCustom from '.';

export default {
  title: 'Components/molecules/CollapseCustom',
  component: CollapseCustom,
  argTypes: {
    heading: {
      control: {
        type: 'text',
      },
      defaultValue: 'Click me',
    },
  },
} as Meta;

export const normal: Story = ({ }) => (
  <CollapseCustom>text</CollapseCustom>
);
