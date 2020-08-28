import React from 'react';
import { useState } from 'react'
import { Header } from './components/Header/Header';
import { RandomBird } from './components/RandomBird/RandomBird';
import { Answers } from './components/Answers/Answers';
import { getRandomNum } from './utils/getRandomNum';
import birdsData from './birdsData';
import './global.css';

let initialMark = 5;

function App() {

  const [score, setScore] = useState(0);
  const [currentPageIndex, setCurrentPageIndex] = useState(0); // index

  const [currentData, setCurrentData] = useState(birdsData[currentPageIndex]);
  const [randomBird, setRandomBird] = useState(getRandomNum(currentData.length));

  const [disabledButton, setDisabledButton] = useState(true);
  const [clickedBird, setClickedBird] = useState(null);

  const clickOnAnswer = (id, currentHtml) => {
    setClickedBird(+id);
    if (disabledButton) {
      if (+id === randomBird) {
        setScore(score + initialMark);
        setDisabledButton(false);
        currentHtml.classList.add('success');
        initialMark = 6;
      } else {
        currentHtml.classList.add('error');
      }
      initialMark--;
    }
  };

  return (
    <React.Fragment>
      <Header
        score={score}
        currentPageIndex={currentPageIndex}
      />
      <RandomBird
        data={currentData}
        rightBirdName={randomBird}
        rightAnswer={disabledButton}
      />
      <Answers
        birds={currentData}
        rightBirdNum={randomBird}
        clickedBird={clickedBird}
        disabledButton={disabledButton}
        onSelectBird={clickOnAnswer}
      />
    </React.Fragment>
  );
}

export default App;
