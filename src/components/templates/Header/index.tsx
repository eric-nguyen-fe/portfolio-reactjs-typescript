import React from 'react';

import { dataMenu } from 'assets/data';
import Menu from 'components/organisms/Menu';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = ({ }) => (
  <div className="t-header">
    <div className="t-header_left">
      Header
    </div>
    <div className="t-header_right">
      <Menu option={dataMenu} />
    </div>

  </div>
);

Header.defaultProps = {
};

export default Header;
