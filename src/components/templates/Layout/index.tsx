import React from 'react';

import Header from '../Header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="t-layout">
    <div className="t-layout_wrapper">
      <Header />
      <div className="t-layout_content">
        {children}
      </div>
    </div>
  </div>
);

Layout.defaultProps = {
  children: undefined,
};

export default Layout;
