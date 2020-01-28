import React from 'react';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from './components/Header';
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  spacing: 5,
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <Skills />
        <Portfolio />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
