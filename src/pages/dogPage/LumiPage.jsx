import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Box,
  IconButton,
  Tooltip
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { FaAward } from 'react-icons/fa';

const carouselImages = [
  "/img/utstilling/lumi.PNG",
  "/img/trening/IMG_5710%203.JPG",
  "/img/lumi1.jpg",
  "/img/utstilling/lumi-rosetter.jpg",
  "/img/utstilling/ringenKnarrvik.jpg",
  "/img/oversikt-familie.png"
];

const getImageStyles = (index) => {
  let styles = {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center'
  };

  if (index === 1 || index === 2) {
    styles.objectFit = 'contain';
    styles.backgroundColor = '#000';
  }

  if (index === 3) {
    styles.objectFit = 'cover';
    styles.objectPosition = 'center 30%';
  }

  if (index === 4) {
    styles.objectFit = 'cover';
    styles.objectPosition = 'center';
    styles.transform = 'scale(1.1)';
  }

  return styles;
};

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = carouselImages.length;

  const prevSlide = () => {
    setCurrent(current === 0 ? totalSlides - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === totalSlides - 1 ? 0 : current + 1);
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: { xs: '250px', sm: '350px', md: '450px' },
          overflow: 'hidden',
          backgroundColor: '#000',
          borderRadius: '8px'
        }}
      >
        {carouselImages.map((img, index) => (
          <Box
            key={index}
            component="img"
            src={img}
            loading="lazy"
            alt={`Slide ${index + 1}`}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: index === current ? 1 : 0,
              transition: 'opacity 0.6s ease-in-out',
              zIndex: index === current ? 1 : 0,
              ...getImageStyles(index)
            }}
          />
        ))}

        <IconButton
          onClick={prevSlide}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            zIndex: 2,
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.8)',
              transform: 'translateY(-50%) scale(1.1)'
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
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            zIndex: 2,
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.8)',
              transform: 'translateY(-50%) scale(1.1)'
            }
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Dot-indikator under karusellen */}
      <Box
        sx={{
          mt: 2,
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        {carouselImages.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrent(index)}
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '2px solid black',
              backgroundColor: index === current ? 'black' : 'transparent',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          />
        ))}
      </Box>
    </>
  );
};

const LumiPage = () => {
  const navigate = useNavigate();

  const exhibitionResults = [
    "CERT: 1 lite 1 stort",
    "CACIB",
    "BIM - 1",
    "AAK1: 4",
    "Ex -11 totalt"
  ];

  const lpResults = [
    "CERT: 2",
    "1 plass: 2",
    "3 plass: 5"
  ];

  const dogFacts = [
    "Date of Birth: 10.10.20",
    "Long tail",
    "Eyes Cleared: 2023",
    "HFS4, CEA, PRA: Clear",
    "MDR1: +/- | DM: Clear",
    "Hips: A/A | Elbows: 0/0",
    "Full Dentition | Scissors Bite",
    "Hight: 50 cm | Weight: 22 kg"
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Container maxWidth="md" sx={{ position: 'relative', mt: 4 }}>
        {/* Tilbake-knapp */}
        <Tooltip title="Tilbake til forsiden" arrow>
          <IconButton
            onClick={() => navigate("/")}
            sx={{
              position: 'absolute',
              top: { xs: '20px', sm: '80px' },
              left: { xs: '24px', sm: '-140px' },
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: '#fff',
              p: '10px',
              zIndex: 10,
              borderRadius: '50%',
              fontSize: '1.4rem',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.85)',
                transform: 'scale(1.15)'
              }
            }}
          >
            <ArrowBackIosNewIcon fontSize="medium" />
          </IconButton>
        </Tooltip>

        <Carousel />
      </Container>

      <Container maxWidth="md" sx={{ flexGrow: 1, pb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            mt: 4,
            fontSize: { xs: '1.3rem', sm: '1.5rem', md: '2.2rem' },
            textAlign: 'center',
            textTransform: 'uppercase',
            mx: 'auto',
            px: 2,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          Lumi - whambam Rock your world
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 3,
            gap: 1
          }}
        >
          {dogFacts.map((fact, index) => (
            <Typography
              key={index}
              variant="body2"
              sx={{
                textAlign: 'center',
                fontSize: { xs: '0.95rem', sm: '1rem' }
              }}
            >
              - {fact} -
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 4,
            mt: 6,
            mb: 6,
            px: { xs: 1, sm: 2, md: 0 }
          }}
        >
          <Box sx={{ p: { xs: 2, md: 3 }, border: '1px solid #eee', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Resultater utstilling
            </Typography>
            {exhibitionResults.map((item, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <FaAward style={{ marginRight: '8px', color: 'gray' }} />
                <Typography variant="body2">{item}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ p: { xs: 2, md: 3 }, border: '1px solid #eee', borderRadius: '8px' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
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

        <Typography variant="body1" sx={{ mt: 4, lineHeight: 1.6 }}>
          Lumi som hun heter her, er importert fra Sverige. Hun er en fantastisk familiehund på 3 år. Et godt eksemplar på en all around hund som både brukes til utstilling, lydighet og en fantastisk venn for barna. Hun er vokst opp med tvillinger, så hun er godt vant med barn.
          <br /><br />
          Personligheten er veldig happy go lucky, hun smiler fra øre til øre bokstaveligtalt og er en god følgesvenn. Som australian shepherd er hun en aktiv hund som elsker å trene i flere timer, sier aldri neitakk til en tur eller å leke med barna.
        </Typography>
      </Container>
    </Box>
  );
};

export default LumiPage;
