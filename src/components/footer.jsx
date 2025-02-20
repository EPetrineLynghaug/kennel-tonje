import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import logo from "/img/logo.svg";
import styles from './footer.module.css';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#C8C6C0',
        color: '#000',
        py: 2,
       
        bottom: 0,
       
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          {/* Venstre del: Kennelnavn og kontaktinfo */}
          <Grid item xs={12} md={8}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Kennel- Charming Chaos
            </Typography>
            <Box display="flex" alignItems="center" mb={1}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography variant="body1">hei@mail.com</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={1}>
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography variant="body1">999 999 999</Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <HomeIcon sx={{ mr: 1 }} />
              <Typography variant="body1">Askøyvegen 1</Typography>
            </Box>
          </Grid>

          {/* Høyre del: Logo */}
          <Grid
            item
            xs={12}
            md={4}
            display="flex"
            justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
            alignItems="center"
          >
            <Box
              component="img"
              src={logo}
              alt="Kennel-logo"
              sx={{ maxWidth: '100px', borderRadius: '50%' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
