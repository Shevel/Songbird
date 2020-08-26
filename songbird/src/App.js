import React from 'react';
import { Header } from './components/Header/Header';

function App(props) {
  return (
    <Header birdsData={props.birdsData}/>
  );
}

export default App;
