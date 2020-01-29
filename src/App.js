import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Projects from "./components/Projects";
import Footer from "./components/Footer";



const theme = createMuiTheme({
  spacing: 5,
});

export default function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Projects />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
