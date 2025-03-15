// DogsPage.jsx
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, Button, Box, Skeleton, Container } from '@mui/material';
import { Link } from 'react-router';

const squareButtonSx = {
  borderRadius: 0,
  textTransform: 'none',
  fontWeight: 'bold',
  px: 3,
  py: 1,
  boxShadow: 'none',
  backgroundColor: '#0057e7',
  '&:hover': {
    backgroundColor: '#0041c4'
  }
};

const cardSx = {
  width: '100%',
  maxWidth: { xs: 500, md: 600 },
  boxShadow: 'none',
  borderRadius: 2,
  backgroundColor: 'transparent'
};

const DogCard = () => {
  return (
    <Card sx={cardSx}>
      <CardMedia
        component="img"
        sx={{ height: 300, objectFit: 'cover' }}
        image="/img/utstilling/lumi.PNG"
        alt="Hund"
      />
      <CardContent sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', p: 1 }}>
        <Typography gutterBottom variant="h5">
          Lumi
        </Typography>
        <Typography variant="body2" color="text.secondary">
          WHAMBAM ROCK YOUR WORLD
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', backgroundColor: 'rgba(255, 255, 255, 0.8)', p: 2 }}>
        {/* Link-komponenten sender oss til "/lumi" */}
        <Button 
          size="small" 
          variant="contained" 
          sx={squareButtonSx}
          component={Link} 
          to="/lumi"
        >
          Les mer
        </Button>
      </CardActions>
    </Card>
  );
};

const PlaceholderCard = () => {
  return (
    <Card sx={cardSx}>
      <Skeleton variant="rectangular" height={300} />
      <CardContent sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', p: 2 }}>
        <Typography gutterBottom variant="h5">
          Placeholder Tittel
        </Typography>
        <Typography variant="body2" color="text.secondary">
          EN TIL?
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', backgroundColor: 'rgba(255, 255, 255, 0.8)', p: 2 }}>
        <Button size="small" variant="contained" sx={squareButtonSx}>
          Les mer
        </Button>
      </CardActions>
    </Card>
  );
};

const DogsPage = () => {
  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 4,
          p: { xs: 1, sm: 2, md: 3 },
          justifyItems: 'center'
        }}
      >
        <DogCard />
        <PlaceholderCard />
        <PlaceholderCard />
      </Box>
    </Container>
  );
};

export default DogsPage;
