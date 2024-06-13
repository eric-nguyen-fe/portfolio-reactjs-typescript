/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import Avatar from 'assets/images/avatar.png';
import TypingEffect from 'components/atoms/TypingEffect';
import Typography from 'components/atoms/Typography';

interface InformationProps {
}

const Information: React.FC<InformationProps> = ({ }) => (
  <div className="p-information">
    <div className="p-information_left">
      <Typography type="h1" content={'Hi, I\'m Nguyen Quoc Dai'} />
      <TypingEffect typeText="h2" text={'I\'m Frontend developer'} />
      <Typography type="p" content="I am a software engineer with nearly 3 years of experience, specializing in front-end development. Having also worked in back-end positions, I have a comprehensive understanding of the software development lifecycle. I am passionate about exploring and applying new technologies, always aiming to enhance my technical skills. In the next 2 years, my goal is to become a Senior Software Developer, where I can contribute more, lead important projects, and continue advancing my career in the technology industry." />
    </div>
    <div className="p-information_right">
      <img src={Avatar} />
    </div>
  </div>
);

Information.defaultProps = {
};

export default Information;
