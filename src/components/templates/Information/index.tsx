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
      <Typography type="p" content="I am a passionate Frontend Developer with a love for creativity. <br/>I am a quick learner and dedicated to staying updated with the latest technologies. My skills include React.js, Next.js, Typescript, Express.js, and PHP. I am eager to contribute my expertise to projects and collaborate with teams to deliver outstanding web applications. <br/>Thank you for considering my application." />
    </div>
    <div className="p-information_right">
      <img src={Avatar} />
    </div>
  </div>
);

Information.defaultProps = {
};

export default Information;
