import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useContext, useEffect, useMemo, useState } from "react";
import { ThemeContext } from "../ThemeContext";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const { darkMode, BG_COLOR, BG_COLOR1 } = useContext(ThemeContext);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: darkMode ? BG_COLOR1 : BG_COLOR,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        color: {
          value: darkMode ? BG_COLOR : BG_COLOR1,
        },
        links: {
          color: darkMode ? BG_COLOR : BG_COLOR1,
          distance: 150,
          enable: false, 
          opacity: 0.3,
          width: 3,
        },
        move: {
          direction: "bottom", 
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 2, 
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle", 
        },
        size: {
          value: { min: 2, max: 4 }, 
        },
      },
      detectRetina: true,
    }),
    [darkMode, BG_COLOR, BG_COLOR1]
  );

  return init ? <Particles id={props.id} init={particlesLoaded} options={options} /> : null;
};

export default ParticlesComponent;
