/* eslint-disable react/button-has-type */
/* eslint-disable react/no-unstable-nested-components */
import React, { useMemo, useState } from 'react';

interface CollapseCustomProps {
  children?: React.ReactNode;
  state?: boolean;
}

const CollapseCustom: React.FC<CollapseCustomProps> = ({ children, state = false }) => {
  const [showContent, setShowContent] = useState(state);
  const CustomHeader = useMemo(() => (
    <div className="m-collapse_header_child">
      2
    </div>
  ), []);

  const toggleContent = () => setShowContent(!showContent);

  return (
    <div className="m-collapse">
      <button onClick={toggleContent} className="m-collapse_header">{CustomHeader}</button>
      {showContent && (
        <div className="m-collapse_content">
          {children}
        </div>
      )}
    </div>
  );
};

CollapseCustom.defaultProps = {
  children: undefined,
};

export default CollapseCustom;
