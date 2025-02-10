

import React from 'react';
import Button from '@mui/material/Button';
import style from './Home.module.css';
import Hero from '../components/Hero/Hero'; 
import CardHome from '../components/card-home/CardHome';

const Home = () => {
  return (
    <>
      <Hero />
      
      {/* Felles wrapper for hele innholdet */}
      <div className={style.pageWrapper}>
        
        {/* Introseksjonen */}
        <section className={style.introContainer}>
          <div className={style.introTextWrapper}>
            <h1 className={style.introHeading}>Velkommen</h1>
            <p className={style.introText}>
              Jeg driver en liten kennel like utenfor Bergen. 
              På min nettside kan du finne alt av informasjon om mine hunder, 
              planlagte kull. Lurer du på noe, må du gjerne ta kontakt.
            </p>
          </div>
          <div className={style.introButton}>
            <Button variant="contained" color="primary">
              Les mer
            </Button>
          </div>
        </section>
        
        {/* Underoverskrift for kortseksjonen */}
        <h2 className={style.subHeading}>Året 2024 og 2025</h2>
        
        {/* Kortene */}
        <CardHome />
      </div>
    </>
  );
};

export default Home;

