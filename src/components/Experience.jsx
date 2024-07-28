import { Box, Typography } from '@mui/material';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Experience = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={{ xs: 20, md: 52 }}
      p={{ xs: 4, md: 0 }}
      height="100vh"
    >
      <Typography
        variant="h1"
        component="span"
        fontWeight="bold"
        fontSize={{ xs: '4rem', sm: '3rem', md: '9rem' }}
        textAlign="center"
      >
        <TypeAnimation
          sequence={[
            'NO EXPERIENCE🥲',
            1000,
            '',
            1000
          ]}
          wrapper="span"
          speed={50}
          style={{ display: 'inline-block' }}
          repeat={Infinity}
        />
      </Typography>
    </Box>
  );
}

export default Experience;
