/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';

import Icon, { IconName } from 'components/atoms/Icon';
import { downloadBlobPDF } from 'utils/functions';

interface SkillProps {
}

const Skill: React.FC<SkillProps> = ({ }) => {
  const [edges, setEdges] = useState([]);

  const dataSkills = [
    {
      id: 0,
      title: 'Languages',
      list: [
        { id_list: 0, icon: 'html', desc: '' },
        { id_list: 1, icon: 'css', desc: '' },
        { id_list: 2, icon: 'js', desc: '' },
        { id_list: 3, icon: 'typescript', desc: '' },
        { id_list: 4, icon: 'sql', desc: '' },
        { id_list: 5, icon: 'csharp', desc: '' },
      ]
    },
    {
      id: 1,
      title: 'Databases',
      list: [
        { id_list: 0, icon: 'mysql', desc: '' },
        { id_list: 1, icon: 'sql-server', desc: '' },
        { id_list: 2, icon: 'postgre', desc: '' },
        { id_list: 3, icon: 'mongodb', desc: '' },
      ]
    },
    {
      id: 2,
      title: 'Framework',
      list: [
        { id_list: 0, icon: 'bootstrap', desc: '' },
        { id_list: 1, icon: 'react', desc: '' },
        { id_list: 2, icon: 'nextjs', desc: '' },
        { id_list: 3, icon: 'express', desc: '' },
        { id_list: 4, icon: 'nodejs', desc: '' },
      ]
    },
    {
      id: 3,
      title: 'State Management',
      list: [
        { id_list: 0, icon: 'redux', desc: '' },
        { id_list: 1, icon: 'redux-saga', desc: '' },
        { id_list: 2, icon: 'redux', desc: '' },
      ]
    },
    {
      id: 4,
      title: 'Tool',
      list: [
        { id_list: 0, icon: 'git', desc: '' },
        { id_list: 1, icon: 'jira', desc: '' },
        { id_list: 2, icon: 'figma', desc: '' },
        { id_list: 3, icon: 'zeplin', desc: '' },
      ]
    },
    {
      id: 5,
      title: 'More',
      list: [
        { id_list: 0, icon: 'html', desc: '' },
        { id_list: 1, icon: 'css', desc: '' },
        { id_list: 2, icon: 'js', desc: '' },
        { id_list: 3, icon: 'typescript', desc: '' },
        { id_list: 4, icon: 'csharp', desc: '' },
      ]
    },
  ];

  return (
    <div className="p-skill">
      <ul className="p-skill_wrap">
        {
          dataSkills.map((skill) => (
            <li className="p-skill_item" key={skill.id}>
              <span>{skill.title}</span>
              <ul className="p-skill_list">
                {
                  skill.list.map((item) => (
                    <li key={item?.id_list}>
                      <Icon iconName={item?.icon as IconName} size="60x60" />
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
Skill.defaultProps = {
};

export default Skill;
