import CakeIcon from '@mui/icons-material/Cake';
import InterestsIcon from '@mui/icons-material/Interests';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const About = () => {
  const { darkMode, BG_COLOR, BG_COLOR1 } = useContext(ThemeContext);

  return (
    <Box sx={{ margin: 6 }}>
      <Box
        className="p-8 rounded-lg shadow-lg"
        sx={{
          maxWidth: '1200px',
          margin: 'auto',
          padding: 4,
          backgroundColor: darkMode ? 'rgba(221, 217, 214, 0.7)' : 'rgba(22, 20, 18, 0.7)',
          color: darkMode ? BG_COLOR1 : BG_COLOR,
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: 4,
            fontWeight: 'bold',
            color: darkMode ? BG_COLOR1 : BG_COLOR,
          }}
        >
          Who Am I?
        </Typography>
        
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: { xs: '100%', md: '50%' },
              mb: { xs: 4, md: 0 },
              paddingRight: { xs: 0, md: 4 },
            }}
          >
            <Box
              className="rounded-full overflow-hidden"
              sx={{
                backgroundColor: `${darkMode ? BG_COLOR1 : BG_COLOR}`,
                border: `13px solid ${darkMode ? BG_COLOR : BG_COLOR1}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: {
                  xs: '200px',
                  sm: '225px',
                  md: '250px',
                  lg: '275px',
                },
                height: {
                  xs: '200px',
                  sm: '225px',
                  md: '250px',
                  lg: '275px',
                },
                margin: 'auto',
                boxShadow: `inset 0 5px 13px ${darkMode ? BG_COLOR : BG_COLOR1},
                            0 5px 13px ${darkMode ? BG_COLOR1 : BG_COLOR}`,
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
            <Typography
              variant="body1"
              sx={{
                marginTop: 2,
                textAlign: 'center',
                fontSize: '1.2rem',
              }}
            >
              I'm a software/backend developer who loves creating innovative software solutions. I excel in algorithm development, troubleshooting, and technical documentation. Skilled in various programming languages and frameworks, I enjoy working on collaborative projects. In my free time, I relax by playing video games and watching K-Dramas and Anime.
              <span
                style={{
                  fontWeight: 'bold',
                  color: darkMode ? BG_COLOR : BG_COLOR1,
                  backgroundColor: darkMode ? BG_COLOR1 : BG_COLOR,
                  margin: 5,
                }}
              >
                I'm currently looking for part-time, internship, and contractual opportunities as I wait for my OJT at school next year.
              </span>
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: { xs: '100%', md: '50%' },
              paddingLeft: { xs: 0, md: 4 },
            }}
          >
            <Box sx={{ width: '100%' }}>
            <Box display="flex" flexDirection="column" mb={2}>
              <Box display="flex" mb={1}>
                <SchoolIcon sx={{ mr: 2, fontSize: '3.5rem' }} />
                <Box>
                  <Typography variant="body1" fontSize={18} fontWeight='bold'>
                    Bachelor of Science in Computer Science
                  </Typography>
                  <Typography variant="body2">
                    Central Philippine University (2021 - Undergraduate)
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" mb={2}>
              <Box display="flex" mb={1}>
                <SchoolIcon sx={{ mr: 2, fontSize: '3.5rem' }} />
                <Box>
                  <Typography variant="body1" fontSize={18} fontWeight='bold'>
                    Vocational Degree in Computer Technology
                  </Typography>
                  <Typography variant="body2">
                    Professional Electronics Institute Inc. (2019 - 2021)
                  </Typography>
                </Box>
              </Box>
            </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <CakeIcon sx={{ fontSize: '3.5rem', mr: 2 }} />
                <Typography variant="body1" fontSize={18}>
                  October 5, 2000
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <LocationOnIcon sx={{ fontSize: '3.5rem', mr: 2 }} />
                <Typography variant="body1" fontSize={18}>
                  Iloilo City, Philippines
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon sx={{ fontSize: '3.5rem', mr: 2 }} />
                <Typography variant="body1" fontSize={18}>
                  (+63) 919 848 4665
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" mb={2}>
                <InterestsIcon sx={{ fontSize: '3.5rem', mr: 2 }} />
                <Typography variant="body1" fontSize={18}>
                  K-Dramas, Anime, Video games
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
