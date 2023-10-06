import React from 'react';
import { useNavigate } from 'react-router-dom';

import { dataMenu } from 'assets/data';
import Menu from 'components/organisms/Menu';
import mapModifiers from 'utils/functions';

interface HeaderProps {
  isFixed?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isFixed }) => {
  const navigator = useNavigate();
  return (
    <div className={mapModifiers('t-header', isFixed && 'fixed')}>
      <div className="t-header_left" onClick={() => navigator('/')}>
        Eric
      </div>
      <div className="t-header_right">
        <Menu option={dataMenu} />
      </div>

    </div>
  );
};

Header.defaultProps = {
  isFixed: true
};

export default Header;
