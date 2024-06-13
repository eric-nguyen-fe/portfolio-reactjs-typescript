/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Contact from 'components/templates/Contact';
import Experience from 'components/templates/Experience';
import Information from 'components/templates/Information';
import Layout from 'components/templates/Layout';
import Project from 'components/templates/Project';
import Skill from 'components/templates/Skills';

const HomePage: React.FC = () => {
  const location = useLocation();
  const [pathNames, setPathNames] = useState('/');

  useEffect(() => {
    setPathNames(location?.pathname);
  }, [location]);

  const handleRenderContent = () => {
    switch (pathNames) {
      case '/':
        return (<Information />);
      case '/skill':
        return (<Skill />);
      case '/experience':
        return (<Experience />);
      case '/project':
        return (<Project />);
      case '/contact':
        return (<Contact />);
    }
  };

  return (
    <Layout>
      <div className="p-homepage">
        {handleRenderContent()}
      </div>
    </Layout>
  );
};

export default HomePage;
