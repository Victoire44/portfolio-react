import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet";
import FaviconSvg from "./assets/favicon.svg";
import FaviconPng from "./assets/favicon.png";
import { makeStyles } from "@material-ui/core/styles";

const theme = createMuiTheme({
  spacing: 5,
})
const useStyles = makeStyles(theme => ({
  body: {
    boxSizing: "border-box"
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <div>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Lato&family=Spartan&family=Poiret+One&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href={FaviconSvg} />
        <link rel="icon" type="image/png" href={FaviconPng} />
        <title>Victoire Baron</title>
        <meta name="author" content="Victoire Baron <me@victoirebaron.com>" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Victoire Baron, web developer based in San Francisco" />
        <body className={classes.body} />
      </Helmet>
      <ThemeProvider theme={theme}>
        <Header />
        <Works />
        <About />
        <Skills />
        <Footer />
      </ThemeProvider>
    </div>
  )
}
