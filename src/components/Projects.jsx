import { Box, Slide } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

const projects = [
  {
    title: 'Lettuce Watch',
    image: '/images/project1.png',
    description: "A real-time monitoring system for lettuce farms.",
    githubLink: 'https://github.com/JjayFabor/LettuceRealTimeMonitoringSystem'
  },
  {
    title: 'BridgeAI',
    image: '/images/project2.png',
    description: "An educational platform for personalized learning.",
    githubLink: 'https://github.com/JjayFabor/bridgeAI'
  },
  {
    title: 'Gcash Inventory',
    image: '/images/project3.png',
    description: "An inventory for Gcash E-Wallet Store.",
    githubLink: 'https://github.com/JjayFabor/GcashInventory'
  }
];

const Projects = () => {
  const { darkMode, BG_COLOR, BG_COLOR1 } = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const sectionElement = document.getElementById('projects');
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

  return (
    <div id="projects" className="h-screen flex flex-col items-center justify-center relative">
      <Grid 
        container 
        spacing={{ xs: 4, md: 6 }} 
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ padding: { xs: 4, md: 4 } }}
      >
        {projects.map((project, index) => (
          <Slide
            direction="left"
            in={show}
            mountOnEnter
            unmountOnExit
            timeout={{ enter: 1500 + index * 200, exit: 1500 }}
            key={index}
          >
            <Grid item xs={4} sm={4} md={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  maxHeight: { xs: 350, md: 600 },
                  backgroundColor: darkMode ? 'rgba(221, 217, 214, 0.6)' : 'rgba(22, 20, 18, 0.6)',
                  borderRadius: 4,
                  p: { xs: 2, md: 4 },
                }}
              >
                <Typography
                  variant="h5"
                  component="div"
                  gutterBottom
                  sx={{
                    color: darkMode ? BG_COLOR1 : BG_COLOR,
                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                    fontWeight: 'bold',
                  }}
                >
                  {project.title}
                </Typography>
                <Box
                  component="img"
                  sx={{
                    borderRadius: '10%',
                    height: { xs: 150, md: 250 },
                    width: 'auto',
                    mb: 2,
                    maxWidth: '100%',
                  }}
                  src={project.image}
                  alt={project.title}
                />
                <Typography
                  variant="body2"
                  gutterBottom
                  sx={{
                    color: darkMode ? BG_COLOR1 : BG_COLOR,
                    fontSize: { xs: '0.875rem', md: '1rem' },
                    flexGrow: 1,
                  }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Button
                    variant="contained"
                    href={project.githubLink}
                    target="_blank"
                    sx={{
                      color: darkMode ? BG_COLOR : BG_COLOR1,
                      backgroundColor: darkMode ? BG_COLOR1 : BG_COLOR,
                      '&:hover': {
                        color: darkMode ? BG_COLOR1 : BG_COLOR,
                        backgroundColor: darkMode ? BG_COLOR : BG_COLOR1,
                      },
                      fontSize: { xs: '0.75rem', md: '1rem' },
                      padding: { xs: '6px 12px', md: '8px 16px' }
                    }}
                  >
                    GitHub
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Slide>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
