/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import Icon from 'components/atoms/Icon';
import 'react-vertical-timeline-component/style.min.css';

interface ExperienceTimelineProps {
  experiences: any;
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => (
  <div className="o-timeline">
    <VerticalTimeline animate lineColor="#eeeeee" className="o-timeline_wrapper">
      {experiences?.length ? experiences?.map((experience: any, index: any) => (
        <div key={experience.id} className="o-timeline_item">
          <VerticalTimelineElement
            className="o-timeline_item_element"
            contentStyle={{ background: '#313652', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #313652' }}
            date={experience.date}
            iconStyle={{
              background: '#fff', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}
            icon={<Icon iconName="case" size="44x44" />}
            position={index % 2 === 0 ? 'left' : 'right'}
          >
            <h3 className="o-timeline_item_element_subject">{experience.company}</h3>
            <p className="o-timeline_item_element_role">
              <strong>Position:</strong>
              {' '}
              {experience.position}
            </p>
            <p className="o-timeline_item_element_desc">
              <strong>Location:</strong>
              {' '}
              {experience.address}
            </p>
            <p className="o-timeline_item_element_desc">Projects:</p>
            <ul className="o-timeline_item_project">
              {experience?.projects?.length ? experience?.projects?.map((project: any) => (
                <li key={project.projectId} className="o-timeline_item_project_item">
                  <h3 className="o-timeline_item_project_item_subject">{project.projectName}</h3>
                  <p className="o-timeline_item_project_item_role">
                    <strong>Role:</strong>
                    {' '}
                    {project.role}
                  </p>
                  <p className="o-timeline_item_project_item_desc">
                    <strong>Description:</strong>
                    {' '}
                    {project.projectDesc}
                  </p>
                  <p className="o-timeline_item_project_item_desc">
                    <strong>Technologies:</strong>
                    {' '}
                    {project.technologies.join(', ')}
                  </p>
                </li>
              )) : null}
            </ul>
          </VerticalTimelineElement>
        </div>
      )) : null}
      <VerticalTimelineElement
        iconStyle={{ background: '#ffffff', color: '#fff' }}
      />
    </VerticalTimeline>
  </div>
);

ExperienceTimeline.defaultProps = {
};

export default ExperienceTimeline;
