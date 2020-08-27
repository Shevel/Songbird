import React from 'react';
import { Header } from './components/Header/Header';
import { RandomBird } from './components/RandomBird/RandomBird';

function App(props) {
  return (
    <React.Fragment>
      <Header birdsData={props.birdsData} />
      <RandomBird />
    </React.Fragment>
  );
}

export default App;
