import React from 'react';
import { Header } from './components/Header/Header';
import { RandomBird } from './components/RandomBird/RandomBird';
import { Answers } from './components/Answers/Answers';

function App(props) {
  return (
    <React.Fragment>
      <Header birdsData={props.birdsData} />
      <RandomBird />
      <Answers />
    </React.Fragment>
  );
}

export default App;
