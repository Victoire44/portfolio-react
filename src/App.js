import React from 'react';
import Header from './components/Header';
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  spacing: 5,
});

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header />
        <Skills />
        <Portfolio />
      </ThemeProvider>
    </div>
  );
}
