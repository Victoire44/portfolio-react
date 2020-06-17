import React from "react";
import { Container, Typography, Box, makeStyles, Divider, Button } from "@material-ui/core/";
import Card from "../Card";
import memory from "../Works/assets/memorygame.png";
import bamazon from "../Works/assets/bamazon.png";
import burger from "../Works/assets/burger.png";
import googlebook from "../Works/assets/googlebook.png";
import icecream from "../Works/assets/ice-cream-collector.png";
import liri from "../Works/assets/liri.png";
import trainscheduler from "../Works/assets/train-scheduler.png";
import wordguess from "../Works/assets/word-guess-game.png";
import laminar from "../Works/assets/laminar.png";
import netflix from "../Works/assets/netflix.png";
import purrfectmatch from "../Works/assets/purr-fect-match.png";
import campdad from "../Works/assets/campdad.png";
import remibesse from "../Works/assets/remi-besse.png";
import firminGirard from "../Works/assets/firmin-girard.png";
import Title from "../Title";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#f5f5f5",
        minHeight: `calc(100vh - ${theme.spacing(35)}px)`,
        padding: theme.spacing(20, 0, 15, 0),
        "& Button:nth-child(n+2)": {
            marginLeft: theme.spacing(5)
        },
    },
    card: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",

    },
    "@global": {
        ".MuiBox-root-281": {
            [theme.breakpoints.down(680)]: {
                display: "flex",
                justifyContent: "center"
            }
        }
    },
}));



function arrayEquals(array1, array2) {
    return array1.length === array2.length && array1.every(value => array2.includes(value))
}

export default function Works() {
    const classes = useStyles()

    const all = ['projects', 'team']
    const [categoriesToShow, setCategoriesToShow] = React.useState(all)

    const title = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -40 }
    }
    return (
        <div id="works" className={classes.root}>
            <Container maxWidth="md">
                <Title>
                    <Typography>Works</Typography>
                </Title>
                <div mb={10} style={{ paddingBottom: "20px" }} >
                    <Button onClick={() => setCategoriesToShow(all)} disabled={arrayEquals(categoriesToShow, all)}>Show all</Button>
                    <Button onClick={() => setCategoriesToShow(["projects"])} disabled={arrayEquals(categoriesToShow, ["projects"])}>Projects</Button>
                    <Button onClick={() => setCategoriesToShow(["team"])} disabled={arrayEquals(categoriesToShow, ["team"])}>Team projects</Button>
                </div>
                <Box className={classes.card}>
                    {(categoriesToShow.includes("projects") ? <Card
                        image={remibesse}
                        title="Remi Besse"
                        alt="Remi Besse"
                        text="Remi Besse is a French artist, moviemaker and photographer "
                        tools="React.js, Material.UI & Framer"
                        github="https://github.com/Victoire44/rbportfolio"
                        heroku="https://remibesse.com"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={firminGirard}
                        title="Firmin-Girard"
                        alt="Firmin-Girard"
                        text="French painter Firmin-Girard website"
                        tools="React.js & Material.UI"
                        github="https://github.com/Victoire44/Firmin-Girard"
                        heroku="https://victoire44.github.io/firmin-girard"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={campdad}
                        title="CampDad"
                        alt="CampDad"
                        text="Campsite search application"
                        tools="jQuery"
                        github="https://github.com/Victoire44/project1"
                        heroku="https://victoire44.github.io/project1/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={memory}
                        title="Animals Memory Game"
                        alt="Animals Memory Game"
                        tools="React.js"
                        text="Click on an image to earn points, but don't click on any more than once!"
                        github="https://github.com/Victoire44/clicky-game"
                        heroku="https://victoire44.github.io/clicky-game"
                        locked={false}
                    /> : null)}
                    {/* {(categoriesToShow.includes("projects") ? <Card
                        image={laminar}
                        title="Laminar"
                        alt="Netflix"
                        text="Netflix internal tool for Data Scientists and Streaming Engineers to explore client playback logs"
                        tools="React.js & Material.UI"
                        locked={true}
                    /> : null)} */}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={trainscheduler}
                        title="Train Scheduler"
                        alt="Train Scheduler"
                        tools="jQuery & Firebase"
                        text="Built a train schedule app that incorporates Firebase to host arrival and departure data."
                        github="https://github.com/Victoire44/Train-Scheduler"
                        heroku="https://victoire44.github.io/Train-Scheduler/"
                        locked={false}
                    /> : null)}
                    {/* {(categoriesToShow.includes("projects") ? <Card
                        image={netflix}
                        title="Netflix Gif"
                        alt="Netflix Gif"
                        text="App that displays many gifs on Netflix series that are pulled from the Giphy API using Ajax calls."
                        tools="jQuery"
                        github="https://github.com/Victoire44/GifTastic"
                        heroku="https://victoire44.github.io/GifTastic/"
                        locked={false}
                    /> : null)} */}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={googlebook}
                        title="Google Books Search"
                        alt="Google Books Search"
                        tools="MERN stack"
                        text="Full Stack app to display books based on user searches. Use of Express.js and MongoDB to save books."
                        github="https://github.com/Victoire44/Google-Books-Search"
                        heroku="https://google-books-search-vb.herokuapp.com/"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("team") ? <Card
                        image={purrfectmatch}
                        title="Purr-fect Match"
                        alt="Purr-fect Match"
                        text="Pet adoption service"
                        tools="MERN stack"
                        github="https://github.com/Victoire44/Purr-fect-Match"
                        heroku="https://purr-fect-match-vb.herokuapp.com/main"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={wordguess}
                        title="Word Guess Game"
                        alt="Word Guess Game"
                        tools="JavaScript"
                        text="Word Guessing game created in javaScript where users can guess missing letters of a given word."
                        github="https://github.com/Victoire44/Word-Guess-Game"
                        heroku="https://victoire44.github.io/Word-Guess-Game"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={icecream}
                        title="Ice Cream Game"
                        alt="Ice Cream Game"
                        tools="JavaScript"
                        text="Guessing game built with jQuery. You win the game by matching your total score to random number."
                        github="https://github.com/Victoire44/unit-4-game"
                        heroku="https://victoire44.github.io/unit-4-game"
                        locked={false}
                    /> : null)}
                    {/* {(categoriesToShow.includes("projects") ? <Card
                        image={burger}
                        title="Eat-Da-Burger"
                        alt="Eat-Da-Burger"
                        tools="jQuery, Node.js & MySQL"
                        text="Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat."
                        github="https://github.com/Victoire44/burger"
                        heroku="https://burger-vb.herokuapp.com"
                        locked={false}
                    /> : null)} */}
                    {/* {(categoriesToShow.includes("projects") ? <Card
                        image={bamazon}
                        title="Bamazon"
                        alt="Bamazon"
                        text="Command line app"
                        tools="Node.js & MySQL"
                        github="https://github.com/Victoire44/Bamazon"
                        locked={false}
                    /> : null)}
                    {(categoriesToShow.includes("projects") ? <Card
                        image={liri}
                        title="Liri"
                        alt="Liri"
                        tools="Node.js"
                        text="Command line app with band in town, Spotify, OMDB APIs"
                        github="https://github.com/Victoire44/liri-node-app"
                        locked={false}
                    /> : null)} */}
                </Box>
            </Container>
        </div>
    )
}