/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';

import Information from 'components/templates/Information';
import Layout from 'components/templates/Layout';

const HomePage: React.FC = () => (
  <Layout>
    <div className="p-homepage">
      <Information />
    </div>
  </Layout>
);

export default HomePage;
