import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Footer = () => {
  const {darkMode, BG_COLOR, BG_COLOR1} = useContext(ThemeContext)

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: darkMode ? BG_COLOR : BG_COLOR1,
        color: darkMode ? BG_COLOR1 : BG_COLOR,
        textAlign: 'center',
        padding: '20px 0',
        marginTop: 'auto',
        width: '100%',
        bottom: 0,
        left: 0,
        zIndex: 1300,
      }}
    >
      <Typography variant="body1">© 2024 Jjay Fabor. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
