import React from 'react';
import styles from './RandomBird.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import defaultImage from './bird.jpg';

let img = (answer, image) => {
  if (!answer || !defaultImage) return <img className={styles.bird_image} src={image} alt="img" />;
  return <img className={styles.bird_image} alt="img" src={defaultImage} />;
};

let contentName = (answer, name) => {
  if (!answer) return <h3 className={styles.random_bird__name}>{name}</h3>;
  return <h3 className={styles.random_bird__name}>******</h3>;
};

export const RandomBird = ({ data, rightBirdName, rightAnswer }) => {

  const { audio, image, name } = data[rightBirdName];

  return (
    <div className={styles.random_bird}>
      {img(rightAnswer, image)}
      <div className={styles.random_bird__info}>
        {contentName(rightAnswer, name)}
        <AudioPlayer
          className={styles.audio_player}
          layout='horizontal-reverse'
          defaultDuration={false}
          showJumpControls={false}
          autoPlayAfterSrcChange={false}
          customAdditionalControls={[]}
          src={audio}
          autoPlay={false}
        />
      </div>
    </div>
  )
} 