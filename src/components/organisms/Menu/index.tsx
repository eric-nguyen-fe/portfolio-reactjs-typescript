/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import pdfData from 'assets/data/base64.json';
import Typography from 'components/atoms/Typography';
import mapModifiers, { downloadBlobPDF } from 'utils/functions';

export interface MenuItemType {
  id: string,
  label: string,
  slug: string,
}

interface MenuProps {
  option: MenuItemType[];
}

const Menu: React.FC<MenuProps> = ({ option }) => {
  const [idActive, setIdActive] = useState('0');

  return (
    <div className="o-menu">
      {option.map((item, idx) => (
        <li
          key={idx}
          className={mapModifiers('o-menu_item', idActive === item.id ? 'active' : '')}
          onClick={() => {
            setIdActive(item?.slug === '/resume' ? '0' : item.id);
            if (item?.slug === '/resume') {
              downloadBlobPDF(pdfData?.data, 'CV_nguyen_quoc_dai_software_developer');
            }
          }}
        >
          <Link to={item?.slug === '/resume' ? '/' : item.slug}>
            <Typography content={item.label} />
          </Link>
        </li>
      ))}
    </div>
  );
};

Menu.defaultProps = {
};

export default Menu;
