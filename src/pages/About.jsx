import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Overskrift */}
      <Typography
        variant="h4"
        component="h1"
        align="center"
        fontWeight={600}
        gutterBottom
      >
        Om oss
      </Typography>

      {/* Intro */}
      <Typography variant="body1" paragraph>
        Hei! Jeg heter Tonje, en stolt mamma til tvillinger og eier av en fantastisk Australian Shepherd.
        Livet mitt er fylt med glede, energi og kjærlighet – både fra familien min og de firbeinte medlemmene
        som deler hverdagen vår.
      </Typography>

      <Typography variant="body1" paragraph>
        Jeg har alltid hatt en lidenskap for hunder, spesielt for Australian Shepherds. Deres intelligens,
        lojalitet og arbeidsmoral gjør dem til en unik rase som krever dedikasjon, men som gir så mye tilbake.
        Dette har inspirert meg til å starte en kennel hvor kvalitet, helse og kjærlighet står i fokus.
      </Typography>

      {/* Hovedbilde */}
      <Box
        component="img"
        src="https://picsum.photos/800/400?random=1"
        alt="Tonje og barna"
        sx={{
          width: '100%',
          borderRadius: 4,
          my: 4
        }}
      />

      {/* Galleribilder */}
      <Grid container spacing={2} sx={{ mb: 6 }}>
        <Grid item xs={6}>
          <Box
            component="img"
            src="https://picsum.photos/400/300?random=2"
            alt="Hund 1"
            sx={{ width: '100%', borderRadius: 4 }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box
            component="img"
            src="https://picsum.photos/400/300?random=3"
            alt="Hund 2"
            sx={{ width: '100%', borderRadius: 4 }}
          />
        </Grid>
      </Grid>

      {/* Visjon */}
      <Typography variant="h5" component="h2" gutterBottom fontWeight={600}>
        Vår Visjon
      </Typography>

      <Typography variant="body1" paragraph>
        Med kennelen ønsker jeg å bidra til å fremme de beste egenskapene hos Australian Shepherds – både mentalt
        og fysisk. Målet mitt er å avle frem trygge, balanserte og friske hunder som kan bli en del av kjærlige hjem,
        enten som familiehunder, arbeidshunder eller i konkurranse.
      </Typography>

      <Typography variant="body1" paragraph>
        Hos oss får hundene all den omsorg og trening de trenger for å utvikle sitt fulle potensial.
        Jeg tror på viktigheten av tidlig sosialisering, sunn kost og et miljø der hver valp får individuell oppmerksomhet.
      </Typography>

      <Typography variant="body1" paragraph>
        Hver hund og hver valp som kommer fra kennelen min, er et resultat av nøye planlegging og ekte lidenskap.
        Hvis du ønsker å lære mer om meg, kennelen eller rasen, er du hjertelig velkommen til å ta kontakt.
        Jeg ser frem til å dele denne reisen med deg!
      </Typography>

      <Typography variant="body1" paragraph>
        Lurer du på noe, eller ønsker å kjøpe valp, ikke nøl med å ta kontakt.
      </Typography>
    </Container>
  );
};

export default About;
