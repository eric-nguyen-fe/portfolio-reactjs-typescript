/* eslint-disable consistent-return */
import React, { useEffect, useState } from 'react';

import Typography, { Heading, Paragraph } from '../Typography';

interface TypingEffectProps {
  text: string;
  typeText?: Heading | Paragraph,
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, typeText }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const typingInterval = 150; // Thời gian mỗi ký tự được hiển thị (miliseconds)

    if (forward && currentIndex < text.length) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingInterval);

      return () => clearTimeout(timeoutId);
    } if (!forward && currentIndex > 0) {
      const timeoutId = setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, -1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }, typingInterval);

      return () => clearTimeout(timeoutId);
    }
  }, [currentIndex, forward, text]);

  useEffect(() => {
    const reverseTimeout = 3000;

    if (forward && currentIndex === text.length) {
      setTimeout(() => setForward(false), reverseTimeout);
    } else if (!forward && currentIndex === 0) {
      setForward(true);
    }
  }, [currentIndex, forward, text.length]);

  return (
    <div className="a-typing_effect">
      <Typography type={typeText} content={currentText || '&nbsp;'} modifiers={['capitalize']} />
    </div>
  );
};
TypingEffect.defaultProps = {
  typeText: 'p'
};

export default TypingEffect;
