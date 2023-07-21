import React from 'react';

import Icon, { IconName } from '../Icon';

import mapModifiers from 'utils/functions';

export type DataSwitchs = {
  id: number,
  name: string,
  icon: IconName
};

interface SwitchsProps {
  optionData: DataSwitchs[];
  valueActive: string;
  handleSetValueActive: (value: string) => void;
  handleSetModeActive: (data: IconName) => void;
  isLightDarkMode: boolean;
}

const Switchs: React.FC<SwitchsProps> = ({
  optionData, valueActive, handleSetValueActive, isLightDarkMode = false, handleSetModeActive
}) => (
  <div className={mapModifiers('a-switchs', isLightDarkMode && 'light_dark_mode')}>
    {!isLightDarkMode && optionData.length && optionData.map((item) => (
      <div key={item.id} className={mapModifiers('a-switchs_item', valueActive === item.name && 'active')} onClick={() => handleSetValueActive(item.name)}>{item.name}</div>
    ))}
    {isLightDarkMode && optionData.length && optionData.map((item) => (
      <div key={item.id} className={mapModifiers('a-switchs_item', valueActive === item.icon && 'active')} onClick={() => handleSetModeActive(item.icon || 'lightmode')}><Icon iconName={item.icon || 'lightmode'} /></div>
    ))}
  </div>
);
Switchs.defaultProps = {
};

export default Switchs;
