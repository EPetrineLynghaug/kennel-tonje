import Button from '@mui/material/Button';
import Hero from '../components/Hero/Hero'; // Sørg for at stien stemmer

const Home = () => {
  return (
    <>
      <Hero />
      <div style={{ padding: '2rem' }}>
        <h1>Hei, velkommen til Kennel Tonje!</h1>
        <Button variant="contained" color="primary">
          Klikk meg
        </Button>
      </div>
    </>
  );
};

export default Home;
