import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  Grid
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FaAward } from 'react-icons/fa';

const carouselImages = [
  "/img/utstilling/lumi.PNG",
  "/img/trening/IMG_5710%203.JPG",
  "/img/lumi1.jpg",
  "/img/oversikt-familie.png" // Nytt bilde lagt til karusellen
];

const getImageStyles = (index) => {
  let styles = {
    width: '100%',
    height: '100%',
    display: 'block'
  };

  if (index === 0) {
    styles.objectFit = 'cover';
    styles.objectPosition = 'center';
  } else if (index === 1) {
    styles.objectFit = 'contain';
    styles.objectPosition = 'center top';
  } else if (index === 2) {
    styles.objectFit = 'contain';
    styles.objectPosition = 'center';
    styles.transform = 'scale(0.9)';
  } else if (index === 3) {
    // Spesialstil for oversiktsbildet slik at det ikke tar overhånd
    styles.objectFit = 'contain';
    styles.objectPosition = 'center';
    styles.padding = '10px';
  }
  return styles;
};

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? carouselImages.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === carouselImages.length - 1 ? 0 : current + 1);
  };

  const buttonStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: '50%',
    border: 'none',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.3)',
    zIndex: 1,
    transition: 'all 0.3s ease',
    color: 'white',
    padding: '8px',
    '&:hover': {
      transform: 'translateY(-50%) scale(1.2)',
      backgroundColor: 'rgba(0,0,0,0.7)',
      boxShadow: '0px 6px 12px rgba(0,0,0,0.4)'
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        height: { xs: '300px', sm: '350px', md: '450px' }
      }}
    >
      <Box 
        component="img"
        src={carouselImages[current]}
        alt={`Slide ${current + 1}`}
        loading="lazy"
        sx={getImageStyles(current)}
      />
      <IconButton 
        onClick={prevSlide}
        sx={{
          ...buttonStyles,
          left: '10px'
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton 
        onClick={nextSlide}
        sx={{
          ...buttonStyles,
          right: '10px'
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
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

  const exhibitionResults = [
    "CERT: 1 lite 1 stort",
    "CACIB",
    "BIM - 1",
    "AAK1: 4",
    "Ex -11 totalt",
  ];

  const lpResults = [
    "CERT: 2",
    "1 plass: 2",
    "3 plass: 5"
  ];

  const dnaPanelItems = [
    "Dna panel fritt",
    "full hale",
    "HD: AA",
    "AD: 00",
    "øyelyst uten merknader",
    "Mdr1 fri"
  ];

  const dnaPanelText = `• ${dnaPanelItems.join(' • ')} •`;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Legger til padding-bottom for å gi plass under knappen */}
      <Container maxWidth="md" sx={{ mt: 4, flexGrow: 1, pb: 4 }}>
        <Carousel />

        <Typography
          variant="h2"
          sx={{
            mt: 4,
            fontSize: { xs: '1.8rem', md: '2.4rem' },
            textAlign: 'center',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            mx: 'auto'
          }}
        >
          Lumi - whambam Rock your world
        </Typography>

        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            mt: 1,
            fontSize: { xs: '0.9rem', md: '1rem' }
          }}
        >
          {dnaPanelText}
        </Typography>

        {/* Resultatlister for utstilling og LP med grid-layout */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            mt: 4
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
              Resultater utstilling
            </Typography>
            {exhibitionResults.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <FaAward style={{ marginRight: '8px', color: 'gray' }} />
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>
              Resultater LP
            </Typography>
            {lpResults.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <FaAward style={{ marginRight: '8px', color: 'gray' }} />
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Ny beskrivelsestekst */}
        <Typography variant="body1" sx={{ mt: 4, lineHeight: 1.6 }}>
          Lumi som hun heter her, er impotert fra Sverige. Hun er en fantastisk familiehund på 3 år. Et godt eksemplar på en all around hund som både brukes til utstilling, lydighet og en fantastisk venn for barna. Hun er vokst opp med tvillinger, så hun er godt vant med barn.
          <br /><br />
          Personligheten er veldig happy go lucky, hun smiler fra øre til øre bokstaveligtalt og er en god følgesvenn. Som australian shepherd er hun en aktiv hund som elsker å trene i flere timer, sier aldri neitakk til en tur eller å leke med barna.
        </Typography>

        <Button variant="contained" sx={{ mt: 2 }} onClick={() => navigate(-1)}>
          Tilbake
        </Button>
      </Container>
    </Box>
  );
};

export default LumiPage;
