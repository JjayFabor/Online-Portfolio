import { useForm, ValidationError } from '@formspree/react';
import { Box, Button, FormControl, Grid, TextField, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const Contact = () => {
  const { darkMode, BG_COLOR, BG_COLOR1 } = useContext(ThemeContext);
  const [state, handleSubmit] = useForm("xeojqone");

  if (state.succeeded) {
    return (
      <div className="flex flex-col justify-center items-center h-[80%] w-full">
        <h1 className="text-6xl">Thanks for messaging me!</h1>
      </div>
    );
  }

  return (
    <div id="contact" className="h-screen flex flex-col items-center justify-center p-4">
      <Box
        sx={{
          backgroundColor: darkMode ? 'rgba(221, 217, 214, 0.6)' : 'rgba(22, 20, 18, 0.6)',
          borderRadius: 4,
          p: { xs: 2, md: 4 },
          width: { xs: '100%', md: '100%' },
          maxWidth: 700,
        }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            color: darkMode ? BG_COLOR1 : BG_COLOR,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 'bold',
            textAlign: 'center'
          }}
        >
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit} method="POST">
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Your Name"
                  name="name"
                  variant="outlined"
                  required
                  sx={{
                    input: { color: darkMode ? BG_COLOR1 : BG_COLOR },
                    label: { color: darkMode ? BG_COLOR1 : BG_COLOR },
                    backgroundColor: darkMode ? 'rgba(221, 217, 214, 0.3)' : 'rgba(22, 20, 18, 0.3)',
                    borderRadius: 1,
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Your Email"
                  name="email"
                  type="email"
                  variant="outlined"
                  required
                  sx={{
                    input: { color: darkMode ? BG_COLOR1 : BG_COLOR },
                    label: { color: darkMode ? BG_COLOR1 : BG_COLOR },
                    backgroundColor: darkMode ? 'rgba(221, 217, 214, 0.3)' : 'rgba(22, 20, 18, 0.3)',
                    borderRadius: 1,
                  }}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  label="Your Message"
                  name="message"
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  sx={{
                    textarea: { color: darkMode ? BG_COLOR1 : BG_COLOR },
                    label: { color: darkMode ? BG_COLOR1 : BG_COLOR },
                    backgroundColor: darkMode ? 'rgba(221, 217, 214, 0.3)' : 'rgba(22, 20, 18, 0.3)',
                    borderRadius: 1,
                  }}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} className="flex justify-center">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  color: darkMode ? BG_COLOR : BG_COLOR1,
                  backgroundColor: darkMode ? BG_COLOR1 : BG_COLOR,
                  '&:hover': {
                    color: darkMode ? BG_COLOR1 : BG_COLOR,
                    backgroundColor: darkMode ? BG_COLOR : BG_COLOR1,
                  },
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  padding: { xs: '8px 16px', md: '10px 20px' }
                }}
                disabled={state.submitting}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </div>
  );
};

export default Contact;
