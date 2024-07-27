import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Box, Button, Grow, IconButton, Link, Slide, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import { ThemeContext } from '../ThemeContext';

const Home = () => {
  const { darkMode, BG_COLOR, BG_COLOR1 } = useContext(ThemeContext);

  const [text] = useTypewriter({
    words: ['Backend Developer', 'Software Developer'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1000,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    const sectionElement = document.getElementById('home');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
          } else {
            setShow(false);
          }
        });
      },
      { threshold: 0.6 }
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume/SoftwareDevResume.pdf';
    link.download = 'SoftwareDevResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <Box id="home" className="flex flex-col items-center mt-6">
      <Slide direction="down" in={show} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 1000 }}>
        <Box
          className="rounded-full overflow-hidden"
          sx={{
            backgroundColor: `${darkMode ? BG_COLOR1 : BG_COLOR}`,
            border: `13px solid ${darkMode ? BG_COLOR : BG_COLOR1}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '5px',
            width: {
              xs: '200px',
              sm: '250px',
              md: '300px',
              lg: '350px',
            },
            height: {
              xs: '200px',
              sm: '250px',
              md: '300px',
              lg: '350px',
            },
            boxShadow: `inset 0 5px 13px ${darkMode ? BG_COLOR1 : BG_COLOR},
                        0 5px 13px ${darkMode ? BG_COLOR : BG_COLOR1}`,
          }}
        >
          <img
            src='/images/img.png'
            alt="Profile"
            style={{
              borderRadius: '50%',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Slide>
      <Typography
        sx={{
          fontSize: {
            xs: '3rem',
            sm: '4rem',
            md: '5rem',
          },
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: 1,
        }}
      >
        Jaylord Vhan Fabor
      </Typography>
      <Box
        sx={{
          fontSize: {
            xs: '1.5rem',
            sm: '2.5rem',
            md: '3.5rem',
          },
          textAlign: 'center',
          mt: 0,
          lineHeight: 1,
        }}
      >
        <h1 style={{ margin: 0 }}>
          I'm a&nbsp;
          <span style={{ color: darkMode ? BG_COLOR : BG_COLOR1 }}>
            {text}
          </span>
          <Cursor cursorStyle='>' cursorColor={darkMode ? BG_COLOR : BG_COLOR1} />
        </h1>
      </Box>
      <Box className="flex justify-center space-x-6 mt-4">
        <Slide direction="right" in={show} mountOnEnter unmountOnExit timeout={{ enter: 1500, exit: 1500 }}>
          <Link href="mailto:faborjaylordvhan@gmail.com" color="inherit">
            <IconButton
              sx={{
                width: '50px',
                height: '50px',
                margin: '10px',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <Email
                sx={{
                  color: darkMode ? BG_COLOR : BG_COLOR1,
                  fontSize: '3rem',
                  '&:hover': {
                    transform: 'scale(1.5)',
                  },
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </IconButton>
          </Link>
        </Slide>
        <Grow direction="down" in={show} mountOnEnter unmountOnExit timeout={{ enter: 2000, exit: 2000 }}>
          <Link href="https://www.linkedin.com/in/jjayfabor/" target="_blank" color="inherit">
            <IconButton
              sx={{
                width: '50px',
                height: '50px',
                margin: '10px',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <LinkedIn
                sx={{
                  color: darkMode ? BG_COLOR : BG_COLOR1,
                  fontSize: '3rem',
                  '&:hover': {
                    transform: 'scale(1.5)',
                  },
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </IconButton>
          </Link>
        </Grow>
        <Slide direction="left" in={show} mountOnEnter unmountOnExit timeout={{ enter: 1500, exit: 1500 }}>
          <Link href="https://github.com/JjayFabor" target="_blank" color="inherit">
            <IconButton
              sx={{
                width: '50px',
                height: '50px',
                margin: '10px',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              <GitHub
                sx={{
                  color: darkMode ? BG_COLOR : BG_COLOR1,
                  fontSize: '3rem',
                  '&:hover': {
                    transform: 'scale(1.5)',
                  },
                  transition: 'transform 0.3s ease-in-out',
                }}
              />
            </IconButton>
          </Link>
        </Slide>
      </Box>
      <Grow direction="down" in={show} mountOnEnter unmountOnExit timeout={{ enter: 2000, exit: 2000 }}>
        <Button
          variant="contained"
          onClick={handleDownload}
          sx={{
            marginTop: 5,
            color: darkMode ? BG_COLOR : BG_COLOR1,
            backgroundColor: darkMode ? BG_COLOR1 : BG_COLOR,
            border: `5px solid ${darkMode ? BG_COLOR : BG_COLOR1}`,
            padding: '8px 16px',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: `inset 0 5px 13px ${darkMode ? BG_COLOR1 : BG_COLOR},
                        0 5px 13px ${darkMode ? BG_COLOR : BG_COLOR1}`,
            '&:hover': {
              border: `5px solid ${darkMode ? BG_COLOR : BG_COLOR1}`,
              color: darkMode ? BG_COLOR : BG_COLOR1,
              backgroundColor: darkMode ? BG_COLOR1 : BG_COLOR,
              boxShadow: `inset 0 10px 100px ${darkMode ? BG_COLOR1 : BG_COLOR},
                          0 10px 100px ${darkMode ? BG_COLOR : BG_COLOR1}`,
              transform: 'scale(1.3)',
            },
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          Download CV
        </Button>
      </Grow>

    </Box>
  );
}

export default Home;
