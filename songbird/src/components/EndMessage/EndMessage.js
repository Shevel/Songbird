import React from 'react';
import styles from './EndMessage.module.css'

export const EndMessage = ({ score, showScore, setCurrentPageIndex, setScore, handleCloseScore }) => {
  if (showScore) {
    return (
      <div
        className={styles.end_message}
      >
        <h2
          className={styles.congrats}
        >
          Позравляем!
      </h2>
        <span
          className={styles.end_message__text}
        >
          Вы прошли викторину и набрали {score} из 30 возможных баллов.
      </span>
        <button
          className={styles.end_message__btn}
          onClick={() => {
            setCurrentPageIndex(0);
            setScore(0);
            handleCloseScore();
            }
          }
        >
          Ещё разок
        </button>
      </div>
    )
  } else {
    return null;
  }
}