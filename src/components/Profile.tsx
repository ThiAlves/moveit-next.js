import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://source.unsplash.com/random" alt="Thiago Alves"/>
      <div>
        <strong>Thiago Alves</strong>
        <p>
          <img src="icons/level.svg" alt="Level Up Icon"/>
          Level 1
        </p>
      </div>
    </div>
  );
}