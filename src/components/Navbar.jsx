import {
  Brightness4 as Brightness4Icon,
  Brightness7 as Brightness7Icon,
  Menu as MenuIcon
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

const Navbar = () => {
  const { darkMode, handleThemeChange, BG_COLOR, BG_COLOR1 } = useContext(ThemeContext);
  const [currentSection, setCurrentSection] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const sections = ['home', 'about', 'projects', 'experience', 'contact'];

  const handleNavigation = (section) => {
    const sectionElement = document.getElementById(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            window.history.pushState({}, '', `#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        observer.observe(sectionElement);
      }
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          observer.unobserve(sectionElement);
        }
      });
    };
  }, [sections]);

  useEffect(() => {
    const currentPath = window.location.hash.substring(1);
    if (currentPath) {
      setCurrentSection(currentPath);
      handleNavigation(currentPath);
    }
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {sections.map((section) => (
          <ListItem key={section} onClick={() => handleNavigation(section)}>
            <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: darkMode ? BG_COLOR : BG_COLOR1, color: darkMode ? BG_COLOR1 : BG_COLOR }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', color: `${darkMode ? BG_COLOR1 : BG_COLOR}`, flexGrow: 1 }}
          >
            Jjay Fabor
          </Typography>
          {isMobile ? (
            <>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              {sections.map((section) => (
                <Button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  sx={{
                    fontWeight: 'bold',
                    color: currentSection === section ? `${darkMode ? BG_COLOR : BG_COLOR1}` : `${darkMode ? BG_COLOR1 : BG_COLOR}`,
                    backgroundColor: currentSection === section ? `${darkMode ? BG_COLOR1 : BG_COLOR}` : `${darkMode ? BG_COLOR : BG_COLOR1}`,
                    borderTop: `2px solid ${darkMode ? BG_COLOR1 : BG_COLOR}`,
                    borderBottom: currentSection === section ? 'none' : `4px solid ${darkMode ? BG_COLOR1 : BG_COLOR}`,
                    borderRadius: '25px',
                    padding: '5px 15px',
                    '&:hover': {
                      borderBottom: `2px solid ${darkMode ? BG_COLOR : BG_COLOR1}`,
                      color: `${darkMode ? BG_COLOR : BG_COLOR1}`,
                      backgroundColor: `${darkMode ? BG_COLOR1 : BG_COLOR}`,
                    },
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              ))}
            </Box>
          )}
          <IconButton onClick={handleThemeChange} sx={{ marginLeft: 2 }} aria-label="toggle dark mode">
            {darkMode ? <Brightness7Icon sx={{ color: 'black' }} /> : <Brightness4Icon sx={{ color: 'white' }} />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
