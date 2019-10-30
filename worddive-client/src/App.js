import React from 'react';
import './App.css';
import {Locations, Location} from 'react-router-component'
import { WordPage } from './WordPage';
import { HomePage } from './home';

function App() {
  return (
    <div className="App">
      <Locations>
        <Location path="/" handler={<HomePage/>}></Location>
        <Location path="/:word" handler={WordPage}></Location>
      </Locations>
    </div>
  );
}

export default App;
