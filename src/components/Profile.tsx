import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return(
    <div className={styles.profileContainer}>
      <img src="https://source.unsplash.com/random" alt="Thiago Alves"/>
      <div>
        <strong>Thiago Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level Up Icon"/>
          Level {level}
        </p>
      </div>
    </div>
  );
}