import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
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

  return (
    <div className="h-screen flex flex-col items-center justify-center relative">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {projects.map((project, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                maxHeight: 400,
                backgroundColor: darkMode ? 'rgba(221, 217, 214, 0.6)' : 'rgba(22, 20, 18, 0.6)',
                borderRadius: 4,
                p: 4,
              }}
            >
              <Typography
                variant="h5"
                component="div"
                gutterBottom
                sx={{
                  color: darkMode ? BG_COLOR1 : BG_COLOR,
                  fontWeight: 'bold',
                }}
              >
                {project.title}
              </Typography>
              <Box
                component="img"
                sx={{
                  borderRadius: '10%',
                  height: 200,
                  width: 'auto',
                  mb: 2,
                  maxWidth: '100%',
                }}
                src={project.image}
                alt={project.title}
              />
              <Typography
                variant="body2"
                color="text.secondary"
                gutterBottom
                sx={{
                  color: darkMode ? BG_COLOR1 : BG_COLOR,
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
                    '&:hover':{
                      color: darkMode ? BG_COLOR1 : BG_COLOR,
                      backgroundColor: darkMode ? BG_COLOR : BG_COLOR1,
                    }
                  }}
                >
                  GitHub
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
