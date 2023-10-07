import { Tooltip } from '@mantine/core';
import React from 'react';

type TransitionData = 'fade' | 'scale' | 'scale-y' | 'scale-x ' | 'skew-up' | 'skew-down' | 'rotate-left' | 'rotate-right' | 'slide-down' | 'slide-up' | 'slide-left' | 'slide-right' | 'pop' | 'pop-bottom-left' | 'pop-bottom-right' | 'pop-top-left' | 'pop-top-right';

interface CTooltipProps {
  children?: React.ReactNode;
  label?: string;
  transitions?: TransitionData;
}

const CTooltip: React.FC<CTooltipProps> = ({ children, label, transitions }) => (
  <Tooltip
    multiline
    w={220}
    withArrow
    transitionProps={{ duration: 200, transition: transitions as any }}
    label={label}
  >
    {children}
  </Tooltip>
);

CTooltip.defaultProps = {
  children: undefined,
  transitions: 'skew-up'
};

export default CTooltip;
