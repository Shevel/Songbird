import React from 'react';
import birdsData from '../../../birdsData';
import styles from './AnswerList.module.css';

export const AnswerList = () => {
  const answerElements = birdsData[0]
    .map((bird) => {
      return (
        <li className={styles.answer__item} key={bird.id}>
          <span className={styles.answer__btn}></span>
          {bird.name}
        </li>
      )
    });
  return (
    <ul className={styles.answer__list}>
      {answerElements}
    </ul>
  )
}