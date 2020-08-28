import React from 'react';
import { useState } from 'react'
import { Header } from './components/Header/Header';
import { RandomBird } from './components/RandomBird/RandomBird';
import { Answers } from './components/Answers/Answers';
import { getRandomNum } from './utils/getRandomNum';
import defaultImageBird from './components/RandomBird/bird.jpg';
import birdsData from './birdsData';
import './global.css';

let initialMark = 5;

function App() {

  const [score, setScore] = useState(0);
  const [currentPage, setCurrentPage] = useState(0); // index

  const [currentData, setCurrentData] = useState(birdsData[currentPage]);
  const [randomBird, setRandomBird] = useState(getRandomNum(currentData.length));

  const [disabledButton, setDisabledButton] = useState(true);

  const clickOnAnswer = (id, currentHtml) => {

    if (disabledButton) {
      if (id == randomBird) {
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
        currentPage={currentPage}
      />
      <RandomBird
        data={currentData}
        rightBirdName={randomBird}
        rightAnswer={disabledButton}
      />
      <Answers
        birds={currentData}
        rightBirdNum={randomBird}
        disabledButton={disabledButton}
        onSelectBird={clickOnAnswer}
      />
    </React.Fragment>
  );
}

export default App;
