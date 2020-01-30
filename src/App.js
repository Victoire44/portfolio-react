import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import FaviconSvg from "./assets/favicon.svg";
import FaviconPng from "./assets/favicon.png";


const theme = createMuiTheme({
  spacing: 5,
});

export default function App() {
  return (
    <div>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href={FaviconSvg}/>
        <link rel="icon" type="image/png" href={FaviconPng}/>
        <title>Victoire Baron</title>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
