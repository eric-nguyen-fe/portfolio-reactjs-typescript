/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import pdfData from 'assets/data/base64.json';
import Typography from 'components/atoms/Typography';
import { downloadBlobPDF } from 'utils/functions';

export interface MenuItemType {
  id: string,
  label: string,
  slug: string,
}

interface MenuProps {
  option: MenuItemType[];
}

const Menu: React.FC<MenuProps> = ({ option }) => {
  const [indexMenu, setIndexMenu] = useState(Math.floor(Math.random() * option.length));

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexMenu(Math.floor(Math.random() * option.length));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const getAllMenuItem = document.querySelectorAll('.o-menu li');
    getAllMenuItem.forEach((i) => {
      i.classList.remove('active');
    });
    getAllMenuItem[Number(indexMenu)].classList.add('o-menu_active');
  }, [indexMenu]);
  return (
    <div className="o-menu">
      {option.map((item, idx) => (
        <li
          key={idx}
          className="o-meu_item"
          onClick={() => {
            if (item?.slug === '/resume') {
              downloadBlobPDF(pdfData?.data, 'CV_Frontend_NguyenQuocDai');
            }
          }}
        >
          <Link to={item.slug}>
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
