// Endre importen
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>Kennnel Charming Chaos</h1>
        <p>En liten koselig kennel like utenfor Bergen.</p>
        
      </div>
    </div>
  );
};

export default Hero;
