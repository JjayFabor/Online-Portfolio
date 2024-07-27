import { Box, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

const About = () => {
  const { darkMode, BG_COLOR, BG_COLOR1 } = useContext(ThemeContext);

  return (
    <Grid container spacing={10}>
      <Grid item xs={12} md={6}>
        <Box
          className="p-8 rounded-lg shadow-lg"
          sx={{
            marginLeft: 20,
            width: '80%',
            height: 700,
            backgroundColor: darkMode ? BG_COLOR : BG_COLOR1,
            color: darkMode ? BG_COLOR1 : BG_COLOR,
            opacity: 0.70,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h5" className="text-center mb-4">
            Who Am I?
          </Typography>
          <Typography variant="body1">
            We are committed to providing personalized learning tools and resources for students from underserved communities. Our mission is to empower these students by leveraging advanced AI technologies to create customized learning experiences tailored to their unique needs.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          className="p-8 rounded-lg shadow-lg"
          sx={{
            marginRight: 5,
            width: '80%',
            height: 700,
            backgroundColor: darkMode ? BG_COLOR : BG_COLOR1,
            color: darkMode ? BG_COLOR1 : BG_COLOR,
            opacity: 0.70,
            backdropFilter: 'blur(10px)',
          }}
        >
          <Typography variant="h5" className="text-center mb-4">
            Personal Information
          </Typography>
          <Typography variant="body1">
            Our vision is to bridge the educational gap by offering innovative solutions that cater to the diverse learning styles and needs of every student. We believe in the transformative power of education and aim to create opportunities for all.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
