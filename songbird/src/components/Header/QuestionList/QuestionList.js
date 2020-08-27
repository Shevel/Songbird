import React from 'react';
import styles from './QuestionList.module.css';
import questionData from './QuestionData';

export const QuestionList = () => {
  const questionElements = questionData
    .map(question => {
      return (
        <li
          key={questionData.length - question.id}
          className={styles.question_list__item}
        >
          <a className={styles.question_list__link} href='/#'>{question.category}</a>
        </li>)
    });
  return (
    <ul className={styles.question_list}>
      {questionElements}
    </ul>
  );
}