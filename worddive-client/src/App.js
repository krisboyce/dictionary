import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import WordPage from './WordPage/WordPage';
import { HomePage } from './home';
import { CssBaseline, createMuiTheme, MuiThemeProvider, responsiveFontSizes, useMediaQuery } from '@material-ui/core';
import Header from './Layout/Header';
import SearchPage from './Search/SearchPage';



function App() {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = React.useMemo(
    () =>
      responsiveFontSizes(createMuiTheme({
        palette: {
          type: prefersLightMode ? 'light' : 'dark',
        },
        props: {
          MuiTypography: {
            variantMapping: {
              body1: 'span',
              body2: 'span',
            },
          },
        },
      })),
    [prefersLightMode],
  );

  return (<Router>
            <MuiThemeProvider theme={theme}>
              <CssBaseline />
              <Header/>
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/dive/:word" component={WordPage}></Route>
              <Route path="/find/:query" component={SearchPage}></Route>
            </MuiThemeProvider>
          </Router>)
}

export default App;
