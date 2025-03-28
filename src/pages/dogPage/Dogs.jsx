import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Skeleton,
  Container
} from '@mui/material';
import { Link } from 'react-router-dom';

const squareButtonSx = {
  borderRadius: '4px',
  textTransform: 'none',
  fontWeight: '500',
  fontSize: '0.95rem',
  px: 3,
  py: 1,
  backgroundColor: '#1d1d1d',
  color: '#fff',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#000',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    transform: 'translateY(-1px)'
  }
};

const cardSx = {
  width: '100%',
  maxWidth: { xs: 500, md: 600 },
  borderRadius: 3,
  overflow: 'hidden',
  boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.015)'
  }
};

const DogCard = () => {
  return (
    <Card sx={cardSx}>
      <CardMedia
        component="img"
        sx={{ height: 300, objectFit: 'cover' }}
        image="/img/utstilling/lumi.PNG"
        alt="Lumi"
      />
      <CardContent sx={{ px: 3, pt: 2, pb: 0 }}>
        <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
          Lumi
        </Typography>
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          WHAMBAM ROCK YOUR WORLD
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', px: 3, pb: 2 }}>
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
      <CardContent sx={{ px: 3, pt: 2, pb: 0 }}>
        <Typography gutterBottom variant="h5" component="div" fontWeight={600}>
          Kommer snart
        </Typography>
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          Mer info på vei
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'flex-end', px: 3, pb: 2 }}>
        <Button size="small" variant="contained" sx={squareButtonSx}>
          Les mer
        </Button>
      </CardActions>
    </Card>
  );
};

const DogsPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography
        variant="h3"
        sx={{
          mb: 5,
          textAlign: 'center',
          fontWeight: 600,
          fontSize: { xs: '1.8rem', sm: '2.4rem' },
          letterSpacing: '-0.5px'
        }}
      >
        Våre Hunder
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: { xs: 4, sm: 5, md: 6 },
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
