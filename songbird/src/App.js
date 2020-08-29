import React from 'react';
import { useState } from 'react'
import { Header } from './components/Header/Header';
import { RandomBird } from './components/RandomBird/RandomBird';
import { Answers } from './components/Answers/Answers';
import { EndMessage } from './components/EndMessage/EndMessage';
import { getRandomNum } from './utils/getRandomNum';
import { removeClassFromAnswers } from './utils/removeClassFromAnswers';
import styles from './App.module.css';
import birdsData from './birdsData';
import './global.css';

let initialMark = 5;

function App() {

  const [score, setScore] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const [currentData, setCurrentData] = useState(birdsData[currentPageIndex]);
  const [randomBird, setRandomBird] = useState(getRandomNum(currentData.length));

  const [disabledButton, setDisabledButton] = useState(true);
  const [clickedBird, setClickedBird] = useState(null);

  const [showScore, setShowScore] = useState(false);
  const handleShowScore = () => setShowScore(true);
  const handleCloseScore = () => setShowScore(false);

  const clickOnAnswer = (id, currentHtml) => {
    setClickedBird(+id);
    if (disabledButton) {
      if (+id === randomBird) {
        setScore(score + initialMark);
        setDisabledButton(false);
        currentHtml.classList.add('success');
        document.querySelector('.rhap_container audio').pause();
        initialMark = 6;
      } else {
        currentHtml.classList.add('error');
      }
      initialMark--;
    }
  };

  const handleClickNext = () => {
    if (currentPageIndex === 5) {
      handleShowScore();
      setCurrentData(birdsData[0]);
    } else {
      setCurrentPageIndex(currentPageIndex + 1);
      setCurrentData(birdsData[currentPageIndex + 1]);
    }
    setDisabledButton(true);
    setRandomBird(getRandomNum(currentData.length));
    setClickedBird(null);
    removeClassFromAnswers('success');
    removeClassFromAnswers('error');
  };
  console.log('Правильный вариант ответа: ',currentData[randomBird].name);
  return (
    <React.Fragment>
      <Header
        score={score}
        currentPageIndex={currentPageIndex}
      />
      <RandomBird
        showScore={showScore}
        data={currentData}
        rightBirdName={randomBird}
        rightAnswer={disabledButton}
      />
      <Answers
        showScore={showScore}
        birds={currentData}
        rightBirdNum={randomBird}
        clickedBird={clickedBird}
        disabledButton={disabledButton}
        onSelectBird={clickOnAnswer}
      />
      <button
        className={`${showScore ? 'hidden' : 'visible'} ${styles.nxt_btn}`}
        disabled={disabledButton}
        onClick={handleClickNext}
      >
        Next Level
      </button>
      <EndMessage
        showScore={showScore}
        score={score}
        setCurrentPageIndex={setCurrentPageIndex}
        setScore={setScore}
        handleCloseScore={handleCloseScore}
      />
    </React.Fragment>
  );
}

export default App;
