import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import Switchs, { DataSwitchs } from '.';

export default {
  title: 'Components/atoms/Switchs',
  component: Switchs,
  argTypes: {},
} as Meta;

const languageData = [
  { id: 0, name: 'vn' },
  { id: 1, name: 'en' },
];

export const normal: Story = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [value, setValue] = useState('vn');
  return (
    <Switchs
      optionData={languageData as DataSwitchs[]}
      valueActive={value}
      handleSetValueActive={(data) => setValue(data)}
      isLightDarkMode={false}
      handleSetModeActive={() => { }}
    />
  );
};
