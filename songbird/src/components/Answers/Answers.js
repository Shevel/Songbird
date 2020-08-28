import React from 'react';
import styles from './Answers.module.css';
import { AnswerList } from './AnswerList/AnswerList';
import { Details } from './Details/Details';

export const Answers = ({ birds, rightBirdNum, onSelectBird, disabledButton, clickedBird }) => {

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
      <button
        className={styles.nxt_btn}
        disabled={disabledButton}
      >
        Next Level
      </button>
    </div>
  )
}