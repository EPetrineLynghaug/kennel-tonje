import React from 'react';
import Button from '@mui/material/Button';
import style from './Home.module.css';
import Hero from '../components/Hero/Hero';
import CardHome from '../components/card-home/CardHome';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Hero />

      <div className={style.pageWrapper}>

        {/* Velkommen */}
        <section className={style.section}>
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
          <div className={style.introButton}>
            <Button
              variant="contained"
              className={style.styledButton}
              component={Link}
              to="/valper"
            >
              Les mer
            </Button>
          </div>
        </section>

        {/* Kortene – skal vises som før */}
        <h2 className={style.subHeading}>Året 2024 og 2025</h2>
        <div className={style.cardStack}>
          <CardHome />
        </div>
        
      </div>
    </>
  );
};

export default Home;
