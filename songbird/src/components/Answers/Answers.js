import React from 'react';
import styles from './Answers.module.css';
import { AnswerList } from './AnswerList/AnswerList';
import { Details } from './Details/Details';

export const Answers = ({ birds, rightBirdNum, onSelectBird, clickedBird, showScore }) => {
  if (showScore) {
    return null;
  }
  return (
    <div className={styles.answers_block}>
      <AnswerList
        birds={birds}
        rightBirdNum={rightBirdNum}
        onSelectBird={onSelectBird}
      />
      <Details
        birds={birds}
        clickedBird={clickedBird}
      />
    </div>
  )
}