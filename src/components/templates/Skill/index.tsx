/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';

import { downloadBlobPDF } from 'utils/functions';

interface SkillProps {
}

const Skill: React.FC<SkillProps> = ({ }) => {
  const [edges, setEdges] = useState([]);

  return (
    <div className="p-skill">
      2
    </div>
  );
};
Skill.defaultProps = {
};

export default Skill;
