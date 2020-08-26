import React from 'react';
import logo from './Logo/logo.svg';
import styles from './Header.module.css';
import { QuestionList } from './QuestionList/QuestionList';

export const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.top_panel}>
        <img src={logo} className={styles.logo} alt='logo' />
        <div className={styles.score}>Score:
          <span>0</span>
        </div>
      </div>
      <QuestionList />
    </header>
  )
};