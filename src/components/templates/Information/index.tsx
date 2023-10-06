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
      <Typography type="p" content="I aspire to join a dynamic and professional work environment where I can leverage my skills and knowledge in front-end development to make meaningful contributions. With a strong foundation in JavaScript, Typescript, Reactjs and a range of other technologies, coupled with my experience in internships and real-world projects, I am eager to continue growing as a Frontend Developer and collaborate with passionate teams to create innovative web solutions. My dedication, adaptability, and commitment to self-improvement make me an asset in both independent and collaborative settings, especially within startup environments. " />
    </div>
    <div className="p-information_right">
      {/* <img src={Avatar} /> */}
      <Typography type="h2" content="Avatar" modifiers={['white']} />
    </div>
  </div>
);

Information.defaultProps = {
};

export default Information;
