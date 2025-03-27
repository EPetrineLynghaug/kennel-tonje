import React from 'react';
import Button from '@mui/material/Button';
import style from './Home.module.css';
import Hero from '../components/Hero/Hero'; 
import CardHome from '../components/card-home/CardHome';
import ResponsiveImage from '../components/ResponsiveImage'; // juster stien om nødvendig

const Home = () => {
  return (
    <>
      <Hero />
      
      <div className={style.pageWrapper}>
        
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
        <h1 className={style.subHeading}>Valper ventes!</h1>
        <ResponsiveImage 
          src="/img/test-parring.png" 
          alt="Test parring" 
        />
        
        <h2 className={style.subHeading}>Året 2024 og 2025</h2>
        
        <CardHome />
      </div>
    </>
  );
};

export default Home;
