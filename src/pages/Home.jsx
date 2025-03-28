import React from 'react';
import Button from '@mui/material/Button';
import style from './Home.module.css';
import Hero from '../components/Hero/Hero';
import CardHome from '../components/card-home/CardHome';
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

const Home = () => {
  return (
    <>
      <Hero />

      <div className={style.pageWrapper}>

        {/* Velkommen */}
        <section className={`${style.section} ${style.sectionTight}`}>
          <h1 className={style.introHeading}>Velkommen</h1>
          <p className={style.introText}>
            Jeg driver en liten kennel like utenfor Bergen. 
            På min nettside kan du finne alt av informasjon om mine hunder, 
            og planlagte kull. Lurer du på noe, må du gjerne ta kontakt.
          </p>
        </section>

        {/* Valper ventes */}
        <section className={style.section}>
          <h2 className={style.subHeading}>Valper ventes</h2>
          <img 
            className={style.responsiveImage}
            src="/img/test-parring.png" 
            alt="Valper ventes plakat" 
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px' }}>
            <Button
              size="small"
              variant="contained"
              sx={squareButtonSx}
              component={Link}
              to="/valper"
            >
              Les mer
            </Button>
          </div>
        </section>

        {/* Året 2024 og 2025 + kort */}
        <section className={style.section}>
  <h2 className={style.subHeading}>Året 2024 og 2025</h2>
</section>

        {/* Kortene */}
        <div className={style.cardStack}>
          <CardHome />
        </div>

      </div>
    </>

     
  );
};

export default Home;
