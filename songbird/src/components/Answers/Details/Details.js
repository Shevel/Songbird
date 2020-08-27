import React from 'react';
import styles from './Details.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export const Details = () => {
  return (
    <div className={styles.details}>
      <p className={styles.instruction}>
        <span>Послушайте плеер.</span>
        <span>Выберите птицу из списка</span>
      </p>
      <div className={styles.card}>
        <img
          className={styles.bird_image}
          src='https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg'
          alt='bird-name!!!'
        />
        <ul className={styles.card_body}>
          <li className={styles.card_item}>
            <h3 className={styles.bird_name}>Ворона</h3>
          </li>
          <li className={styles.card_item}>
            <span className={styles.bird_latin_name}>Corvus corax</span>
          </li>
          <li className={styles.card_item}>
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
          </li>
          <li className={styles.card_item}>
            <span className={styles.bird_description}>
              Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров.
              Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день,
              когда черные вороны улетят от Тауэра, монархия рухнет.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}