/* eslint-disable max-len */
import React, { useCallback } from 'react';
import Particles from 'react-particles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

interface AnimatedBackgroundProps { }

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <div className="t-background">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            image: ''
          },
          fpsLimit: 2000,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 5,
              },
              repulse: {
                distance: 160,
                duration: 2,
              },
            },
          },
          particles: {
            color: {
              value: '#9DB2BF',
            },
            links: {
              color: '#DDE6ED',
              distance: 220,
              enable: true,
              opacity: 0.3,
              width: 0.1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: true,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1000,
              },
              value: 160,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 0.5, max: 8 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
