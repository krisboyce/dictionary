import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import WordPage from './WordPage/WordPage';
import { HomePage } from './home';
import { CssBaseline, Container, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import Header from './Layout/Header';
import SearchPage from './Search/SearchPage';

function App() {
  const theme = createMuiTheme()
  theme.spacing(200)

  return (<Router>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Header/>

              <Container display="flex" >
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/dive/:word" component={WordPage}></Route>
                <Route path="/find/:query" component={SearchPage}></Route>
              </Container>
            </MuiThemeProvider>
          </Router>)
}

export default App;
