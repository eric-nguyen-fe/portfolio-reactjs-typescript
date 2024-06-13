/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import { experienceRender } from 'assets/data';
import ExperienceTimeline from 'components/organisms/ExperienceTimeline';

interface ExperienceProps {
}

const Experience: React.FC<ExperienceProps> = ({ }) => (
  <div>
    <ExperienceTimeline experiences={experienceRender} />
  </div>
);

Experience.defaultProps = {
};

export default Experience;
