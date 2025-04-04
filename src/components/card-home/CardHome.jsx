import style from './CardHome.module.css';

const CardHome = () => {
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <h1 className={style.title}>Utstilling Ølen 2025</h1>
        <span className={style.subtitle}>Resultater EX, 1 AKK.</span>
        <hr className={style.divider} />
        <p className={style.description}>
          En fin helg på ølen med gode venner og god kritikk for Lumi. 
          Lumi fikk excellente og 1 plass i åpen klasse tispe.
        </p>
        <p className={style.critique}>
          "3 years, strong but feminine, lovely feminine head with good strenght of scull,
          correct headplanes, ears and a bit rounde eyes, neck of good lenght, level topline that could be just a bit stronger,
          good angualations both ends, just a bit long in loin, excellent depth of body, excellent bones,
          moves with good reach and drive just a bit soft in topline, excellent coat and presentation.
          excellent temperament."
        </p>
        <div className={style.imageContainer}>
          <img 
            className={style.image} 
            src="../../img/lumi1.jpg" 
            alt="Utstilling Ølen 2025" 
            loading="lazy"
          />
        </div>
      </div>

      <div className={style.card}>
        <h1 className={style.title}>LP konkurranse 2024</h1>
        <span className={style.subtitle}>Resultater cert, 1 premie og 3.plass</span>
        <hr className={style.divider} />
        <p className={style.description}>
          Lumi har vært på LP konkurranse, og fikk 269.5 poeng. Hun beviser gang på gang hvor allsidig hun er til både sport og utstilling.
          Vi nærmer oss klasse to, det blir en spennende reise framover.
        </p>
        <p className={style.critique}>
          "Helhetsintrykk : 10/10 P, <br /> 
          Helhetsintrykk : 10/10 P, <br /> 
          Helhetsintrykk : 10/10 P, <br /> 
          Helhetsintrykk : 10/10 P "
        </p>
        <div className={style.imageContainer}>
          <img 
            className={style.image} 
            src="/img/trening/TeamWork.JPG" 
            alt="LP konkurranse 2024" 
            loading="lazy"
          />
        </div>
      </div>

      {/* Nytt placeholder-kort */}
      <div className={style.card}>
        <h1 className={style.title}>Placeholder Title</h1>
        <span className={style.subtitle}>Placeholder Subtitle</span>
        <hr className={style.divider} />
        <p className={style.description}>
          Dette er en placeholder-beskrivelse for å demonstrere hvordan kortene plasseres ved siden av hverandre.
        </p>
        <p className={style.critique}>
          Placeholder-kritikk: Ingen evaluering tilgjengelig ennå.
        </p>
        <div className={style.imageContainer}>
          <img 
            className={style.image} 
            src="https://via.placeholder.com/550x300" 
            alt="Placeholder Image" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CardHome;
