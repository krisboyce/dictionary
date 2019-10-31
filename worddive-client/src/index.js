import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
    Route
  } from "react-router-dom";
import { WordPage } from './WordPage/WordPage';

ReactDOM.render(
    <Router>
        <Route path="/" component={App}>
            <Route path="/:word" component={WordPage}></Route>
        </Route>
    </Router>, document.getElementById('root'));
