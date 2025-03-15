import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const carouselImages = [
  "https://via.placeholder.com/600x300/CCCCCC/969696?text=Slide+1",
  "https://via.placeholder.com/600x300/CCCCCC/969696?text=Slide+2",
  "https://via.placeholder.com/600x300/CCCCCC/969696?text=Slide+3"
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? carouselImages.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === carouselImages.length - 1 ? 0 : current + 1);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        mt: 2,
        height: { xs: '300px', md: '500px' } // Høyde justeres etter skjermstørrelse
      }}
    >
      <Box 
        component="img"
        src={carouselImages[current]}
        alt={`Slide ${current + 1}`}
        sx={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
      <IconButton 
        onClick={prevSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          boxShadow: 3,
          zIndex: 1,
          '&:hover': {
            transform: 'translateY(-50%) scale(1.1)',
            boxShadow: 6,
          }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton 
        onClick={nextSlide}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'white',
          boxShadow: 3,
          zIndex: 1,
          '&:hover': {
            transform: 'translateY(-50%) scale(1.1)',
            boxShadow: 6,
          }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
      
      {/* Prikker plassert absolutt nederst i karusellen */}
      <Box 
        sx={{
          position: 'absolute',
          bottom: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '10px'
        }}
      >
        {carouselImages.map((_, index) => (
          <Box 
            key={index}
            onClick={() => setCurrent(index)}
            sx={{
              height: 10,
              width: 10,
              borderRadius: '50%',
              backgroundColor: index === current ? 'black' : 'gray',
              cursor: 'pointer'
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

const LumiPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Hovedinnhold */}
      <Container maxWidth="md" sx={{ mt: 4, flexGrow: 1 }}>
        {/* Karusell med placeholder-bilder */}
        <Carousel />
        
        {/* Overskrift */}
        <Typography variant="h1" sx={{ mt: 4, fontSize: { xs: '2rem', md: '3rem' } }}>
          Lumi Detaljer
        </Typography>
        
        {/* Placeholder-bilde under overskriften */}
        <Box 
          component="img"
          src="https://via.placeholder.com/600x400/CCCCCC/969696?text=Placeholder+Bilde"
          alt="Placeholder"
          sx={{ width: '100%', mt: 2 }}
        />
        
        {/* Lorem ipsum tekst */}
        <Typography variant="body1" sx={{ mt: 4 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </Typography>
        
        {/* Tilbake-knapp */}
        <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(-1)}>
          Tilbake
        </Button>
      </Container>
      
      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: 'grey.200', py: 2 }}>
        <Container maxWidth="md">
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Ditt Firmanavn
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LumiPage;
