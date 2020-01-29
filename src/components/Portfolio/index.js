import React from "react";
import { Container, Typography, Box, makeStyles, Divider } from "@material-ui/core/";
import Card from "../Card";
import memory from "../Portfolio/assets/memorygame.png";
import bamazon from "../Portfolio/assets/bamazon.png";
import burger from "../Portfolio/assets/burger.png";
import googlebook from "../Portfolio/assets/googlebook.png";
import icecream from "../Portfolio/assets/ice-cream-collector.png";
import liri from "../Portfolio/assets/liri.png";
import trainscheduler from "../Portfolio/assets/train-scheduler.png";
import wordguess from "../Portfolio/assets/word-guess-game.png";
import netflix from "../Portfolio/assets/netflix.png";


const useStyles = makeStyles({
    card: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
    }
});


export default function Portfolio() {
    const classes = useStyles();

    return (
        <div id="portfolio">
            <Container style={{ width: "1100px" }}>
                <Box my={10}>
                    <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">Portfolio</Typography>
                    <Divider />
                </Box>
                <Box className={classes.card}>
                    <Card
                        image={memory}
                        title="Animals Memory Game"
                        alt="Animals Memory Game"
                        text="Command line app with band in town, Spotify, OMDB APIs."
                        github="https://github.com/Victoire44/clicky-game"
                        heroku="https://victoire44.github.io/clicky-game"
                    />
                    <Card
                        image={wordguess}
                        title="Word Guess Game"
                        alt="Word Guess Game"
                        text="Word Guessing game created in javaScript where users can guess missing letters of a given word."
                        github="https://github.com/Victoire44/Word-Guess-Game"
                        heroku="https://victoire44.github.io/Word-Guess-Game"
                    />
                    <Card
                        image={netflix}
                        title="Netflix Gif"
                        alt="Netflix Gif"
                        text="App that displays many gifs on Netflix series that are pulled from the Giphy API using Ajax calls."
                        github="https://github.com/Victoire44/GifTastic"
                        heroku="https://victoire44.github.io/GifTastic/"
                    />
                    <Card
                        image={icecream}
                        title="Ice Cream Game"
                        alt="Ice Cream Game"
                        text="Guessing game built with jQuery. You win the game by matching your total score to random number."
                        github="https://github.com/Victoire44/unit-4-game"
                        heroku="https://victoire44.github.io/unit-4-game"

                    />
                    <Card
                        image={googlebook}
                        title="Google Books Search"
                        alt="Google Books Search"
                        text="Full Stack app to display books based on user searches. Use of Express and MongoDB so that users can save books to review or purchase later"
                        github="https://github.com/Victoire44/Google-Books-Search"
                        heroku="https://google-books-search-vb.herokuapp.com/"
                    />
                    <Card
                        image={trainscheduler}
                        title="Train Scheduler"
                        alt="Train Scheduler"
                        text="Built a train schedule app that incorporates Firebase to host arrival and departure data."
                        github="https://github.com/Victoire44/Train-Scheduler"
                        heroku="https://github.com/Victoire44/Train-Scheduler"
                    />
                    <Card
                        image={burger}
                        title="Eat-Da-Burger"
                        alt="Eat-Da-Burger"
                        text="Eat-Da-Burger is a restaurant app that lets users input the names of burgers they'd like to eat."
                        github="https://github.com/Victoire44/burger"
                        heroku="https://burger-vb.herokuapp.com"
                    />
                    <Card
                        image={bamazon}
                        title="Bamazon"
                        alt="Bamazon"
                        text="Command line app "
                        github="https://github.com/Victoire44/Bamazon"
                    />
                    <Card
                        image={liri}
                        title="Liri"
                        alt="Liri"
                        text="Click on an image to earn points, but don't click on any more than once!"
                        github="https://github.com/Victoire44/liri-node-app"
                    />
                </Box>
            </Container>
        </div>
    )
}