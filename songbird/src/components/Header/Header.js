import React from 'react';
import logo from './Logo/logo.svg';
import styles from './Header.module.css';
import { QuestionList } from './QuestionList/QuestionList';

export const Header = ({ score, currentPage }) => {

  return (
    <header className={styles.header}>
      <div className={styles.top_panel}>
        <img src={logo} className={styles.logo} alt='logo' />
        <div className={styles.score}>Score:
          <span>{score}</span>
        </div>
      </div>
      <QuestionList currentPage={currentPage} />
    </header>
  )
};