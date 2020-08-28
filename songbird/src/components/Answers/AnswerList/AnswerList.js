import React from 'react';
import styles from './AnswerList.module.css';
import correctSound from '../../../utils/sounds/correct.mp3';
import incorrectSound from '../../../utils/sounds/incorrect.mp3';

export const AnswerList = ({ birds, rightBirdNum, onSelectBird }) => {

  const answerElements = birds.map((bird) => { 

    const audioHandler = (event) => {
      const id = event.target.getAttribute('id');
      if (id == rightBirdNum) {
        const audio = document.querySelector('.audio_correct');
        audio.play();
        return;
      }
      const audio = document.querySelector('.audio_incorrect');
      audio.play();
    }

    const clickHandlerAnswer = (event) => {
      const el = event.target;
      const currentId = el.getAttribute('id');
      onSelectBird(currentId, el);
    };
  

    return (
      <li
        className={styles.answer__item}
        key={bird.id}
        id={bird.id}
        onClick={(event) => {
          audioHandler(event);
          clickHandlerAnswer(event);
        }}
      >
        <span className={styles.answer__btn}></span>
        {bird.name}
      </li>
    )
  });
  return (
    <React.Fragment>
      <ul className={styles.answer__list}>
        {answerElements}
      </ul>
      <audio className="audio_correct">
        <source src={correctSound}></source>
      </audio>
      <audio className="audio_incorrect">
        <source src={incorrectSound}></source>
      </audio>
    </React.Fragment>
  )
}