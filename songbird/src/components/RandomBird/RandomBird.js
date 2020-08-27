import React from 'react';
import defaultBird from './bird.jpg';
import styles from './RandomBird.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const RandomBird = () => {
  return (
    <div className={styles.random_bird}>
      <img className={styles.bird_image} src={defaultBird} alt='bird' />
      <div className={styles.random_bird__info}>
        <h3 className={styles.random_bird__name}>******</h3>
        <AudioPlayer
          className={styles.audio_player}
          layout='horizontal-reverse'
          defaultDuration={false}
          showJumpControls={false}
          customVolumeControls={[]}
          customAdditionalControls={[]}
          src='https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
          onPlay={e => console.log("onPlay")}
        />
      </div>
    </div>
  )
} 