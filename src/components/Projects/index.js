import React from "react";
import { Container, Typography, Box, makeStyles, Divider, Button } from "@material-ui/core/";
import Card from "../Card";
import memory from "../Projects/assets/memorygame.png";
import bamazon from "../Projects/assets/bamazon.png";
import burger from "../Projects/assets/burger.png";
import googlebook from "../Projects/assets/googlebook.png";
import icecream from "../Projects/assets/ice-cream-collector.png";
import liri from "../Projects/assets/liri.png";
import trainscheduler from "../Projects/assets/train-scheduler.png";
import wordguess from "../Projects/assets/word-guess-game.png";
import netflix from "../Projects/assets/netflix.png";
import purrfectmatch from "../Projects/assets/purr-fect-match.png";
import campdad from "../Projects/assets/campdad.png";
import campmom from "../Projects/assets/campmom.png";

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        padding: theme.spacing(20, 0, 15, 0),
        "& Button:nth-child(n+2)": {
            marginLeft: theme.spacing(5)
        },
    },
    card: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    }
}));

function arrayEquals(array1, array2) {
    return array1.length === array2.length && array1.every(value => array2.includes(value))
}

export default function Projects() {
    const classes = useStyles()

    const all = ['projects', 'team']
    const [categoriesToShow, setCategoriesToShow] = React.useState(all)

    return (
        <div id="projects" className={classes.root}>
            <Container style={{ width: "1100px" }}>
                <Box mb={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000" classeName={classes.title}>Projects</Typography>
                    <Divider />
                </Box>
                <Box mb={10} >
                    <Button onClick={() => setCategoriesToShow(all)} disabled={arrayEquals(categoriesToShow, all)}>Show all</Button>
                    <Button onClick={() => setCategoriesToShow(["projects"])} disabled={arrayEquals(categoriesToShow, ["projects"])}>Projects</Button>
                    <Button onClick={() => setCategoriesToShow(["team"])} disabled={arrayEquals(categoriesToShow, ["team"])}>Team projects</Button>
                </Box >
                <Box className={classes.card}>
                    {(categoriesToShow.includes("projects") ? <Card
                        image={memory}
                        title="Animals Memory Game"
                        alt="Animals Memory Game"
                        tools="React.js"
                        text="Click on an image to earn points, but don't click on any more than once!"
                        github="https://github.com/Victoire44/clicky-game"
                        heroku="https://victoire44.github.io/clicky-game"
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={campdad}
                        title="CampDad"
                        alt="CampDad"
                        text="Campsite search application"
                        tools="jQuery"
                        github="https://github.com/Victoire44/project1"
                        heroku="https://victoire44.github.io/project1/"
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={campmom}
                        title="CampMom"
                        alt="CampMom"
                        text="Campsite search application in React"
                        tools="React.js"
                        github="https://github.com/Victoire44/CampMom"
                        heroku="https://campmom.herokuapp.com/"
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={purrfectmatch}
                        title="Purr-fect Match"
                        alt="Purr-fect Match"
                        text="Pet adoption service"
                        tools="MERN stack"
                        github="https://github.com/Victoire44/Purr-fect-Match"
                        heroku="https://purr-fect-match-vb.herokuapp.com/main"
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={netflix}
                        title="Netflix Gif"
                        alt="Netflix Gif"
                        text="App that displays many gifs on Netflix series that are pulled from the Giphy API using Ajax calls."
                        tools="jQuery"
                        github="https://github.com/Victoire44/GifTastic"
                        heroku="https://victoire44.github.io/GifTastic/"
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={googlebook}
                        title="Google Books Search"
                        alt="Google Books Search"
                        tools="MERN stack"
                        text="Full Stack app to display books based on user searches. Use of Express.js and MongoDB so that users can save books to review or purchase later."
                        github="https://github.com/Victoire44/Google-Books-Search"
                        heroku="https://google-books-search-vb.herokuapp.com/"
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={trainscheduler}
                        title="Train Scheduler"
                        alt="Train Scheduler"
                        tools="jQuery, Firebase"
                        text="Built a train schedule app that incorporates Firebase to host arrival and departure data."
                        github="https://github.com/Victoire44/Train-Scheduler"
                        heroku="https://victoire44.github.io/Train-Scheduler/"
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={wordguess}
                        title="Word Guess Game"
                        alt="Word Guess Game"
                        tools="JavaScript"
                        text="Word Guessing game created in javaScript where users can guess missing letters of a given word."
                        github="https://github.com/Victoire44/Word-Guess-Game"
                        heroku="https://victoire44.github.io/Word-Guess-Game"
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={icecream}
                        title="Ice Cream Game"
                        alt="Ice Cream Game"
                        tools="JavaScript"
                        text="Guessing game built with jQuery. You win the game by matching your total score to random number."
                        github="https://github.com/Victoire44/unit-4-game"
                        heroku="https://victoire44.github.io/unit-4-game"
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={burger}
                        title="Eat-Da-Burger"
                        alt="Eat-Da-Burger"
                        tools="jQuery, Node.js, MySQL"
                        text="Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat."
                        github="https://github.com/Victoire44/burger"
                        heroku="https://burger-vb.herokuapp.com"
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={bamazon}
                        title="Bamazon"
                        alt="Bamazon"
                        text="Command line app"
                        tools="Node.js, MySQL"
                        github="https://github.com/Victoire44/Bamazon"
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={liri}
                        title="Liri"
                        alt="Liri"
                        tools="Node.js"
                        text="Command line app with band in town, Spotify, OMDB APIs"
                        github="https://github.com/Victoire44/liri-node-app"
                    /> : null)}
                </Box>
            </Container>
        </div>
    )
}