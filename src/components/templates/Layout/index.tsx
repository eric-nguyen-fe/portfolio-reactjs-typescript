/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import Header from '../Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [height, setHeight] = useState(window.scrollY);

  const handleScroll = () => {
    console.log(' 🚀- DaiNQ - 🚀: -> height:', height);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="t-layout">
      <div className="t-layout_wrapper">
        <Header />
        <div className="t-layout_content">
          {children}
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  children: undefined,
};

export default Layout;
