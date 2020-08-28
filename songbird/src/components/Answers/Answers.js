import React from 'react';
import styles from './Answers.module.css';
import { AnswerList } from './AnswerList/AnswerList';
import { Details } from './Details/Details';

export const Answers = ({ birds, rightBirdNum, onSelectBird, disabledButton }) => {

  return (
    <div className={styles.answers_block}>
      <AnswerList
        birds={birds}
        rightBirdNum={rightBirdNum}
        onSelectBird={onSelectBird}
      />
      <Details
        birds={birds}
        rightBirdNum={rightBirdNum}
        disabled={disabledButton}
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