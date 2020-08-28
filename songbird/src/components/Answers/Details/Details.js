import React from 'react';
import styles from './Details.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Details = ({ birds, clickedBird }) => {

  if (clickedBird === null) {
    return (
      <div className={styles.details}>
        <p className={styles.instruction}>
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
      </div>
    )
  } else if (clickedBird >= 0) {
    const birdToShow = birds[clickedBird];
    return (
      <div className={styles.details}>
        <div className={styles.card}>
          <img
            className={styles.bird_image}
            src={birdToShow.image}
            alt={birdToShow.name}
          />
          <ul className={styles.card_body}>
            <li className={styles.card_item}>
              <h3 className={styles.bird_name}>{birdToShow.name}</h3>
            </li>
            <li className={styles.card_item}>
              <span className={styles.bird_latin_name}>{birdToShow.species}</span>
            </li>
            <li className={styles.card_item}>
              <AudioPlayer
                className={styles.audio_player}
                layout='horizontal-reverse'
                autoPlay={false}
                autoPlayAfterSrcChange={false}
                defaultDuration={false}
                showJumpControls={false}
                customVolumeControls={[]}
                customAdditionalControls={[]}
                src={birdToShow.audio}
              />
            </li>
            <li className={styles.card_item}>
              <span className={styles.bird_description}>
                {birdToShow.description}
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}