import React from 'react';
import styles from './Answers.module.css';
import { AnswerList } from './AnswerList/AnswerList';
import { Details } from './Details/Details';

export const Answers = () => {
  return (
    <div className={styles.answers_block}>
      <AnswerList />
      <Details />
      <button className={styles.nxt_btn}>Next Level</button>
    </div>
  )
}