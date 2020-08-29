import React from 'react';
import styles from './EndMessage.module.css'

export const EndMessage = ({ score, showScore, setCurrentPageIndex, setScore, handleCloseScore }) => {
  let result = (
    <span
      className={styles.end_message__text}
    >
      Вы набрали {score} баллов из 35 возможных.
    </span>
  );
  if (showScore) {
    if (score === 35) {
      result = (
        <span
          className={styles.end_message__text}
        >
          Невероятно! Вы МАСТЕР ЗНАТОК и теперь вы знаете, кто чирикнул.
        </span>
      );
    }
    return (
      <div
        className={styles.end_message}
      >
        <h2
          className={styles.congrats}
        >
          Позравляем!
      </h2>
        {result}
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