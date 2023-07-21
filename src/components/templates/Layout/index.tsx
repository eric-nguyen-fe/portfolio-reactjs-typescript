import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="t-layout">
    <div className="t-layout_wrapper">
      <div className="t-layout_menu">
        Menu
      </div>
      {children}
    </div>
  </div>
);

Layout.defaultProps = {
  children: undefined,
};

export default Layout;
