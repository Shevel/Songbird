import React from 'react';
import styles from './Details.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Details = ({ birds, rightBirdNum, disabled }) => {

  const rightBird = birds[rightBirdNum];

  if (disabled) {
    return (
      <div className={styles.details}>
        <p className={styles.instruction}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
      </div>
    )
  }

  if (!disabled) {
    return (
      <div className={styles.details}>
        <div className={styles.card}>
          <img
            className={styles.bird_image}
            src={rightBird.image}
            alt={rightBird.name}
          />
          <ul className={styles.card_body}>
            <li className={styles.card_item}>
              <h3 className={styles.bird_name}>{rightBird.name}</h3>
            </li>
            <li className={styles.card_item}>
              <span className={styles.bird_latin_name}>{rightBird.species}</span>
            </li>
            <li className={styles.card_item}>
              <AudioPlayer
                className={styles.audio_player}
                layout='horizontal-reverse'
                defaultDuration={false}
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                src={rightBird.audio}
              />
            </li>
            <li className={styles.card_item}>
              <span className={styles.bird_description}>
                {rightBird.description}
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}