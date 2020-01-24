import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Parallax } from "react-parallax";
import { AppBar, Toolbar, IconButton, Typography, Link } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import portrait from "./assets/portrait.jpg";

const useStyles = makeStyles(theme => ({
    links: {
        marginLeft: "auto",
    },
    icons: {
        fill: "#fff",
    },
    appbar: {
        backgroundColor: "#252834",
    },
    box: {
        background: "#252834",
        height: 500,
        color: "#fff"
    },
    name: {
        color: "#fff",
        fontWeight: 400
    },
    title: {
        color: "#FA0063",
    },
    padding: {
        padding: 6,
    },
    parallax: {
        height: 450,
    },
    portrait: {
        height: 250,
        borderRadius: "50%",
        float: "left"
    },
    about: {
        float: "left"
    }
}))


export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Container>
                    <Toolbar>
                        <Box className={classes.links}>
                            <Link href="https://github.com/Victoire44" target="_blank">
                                <IconButton className={classes.padding}>
                                    <GitHubIcon className={classes.icons} fontSize="large" aria-label="github" />
                                </IconButton>
                            </Link>
                            <Link href="https://www.linkedin.com/in/victoirebaron/?locale=en_US" target="_blank">
                                <IconButton className={classes.padding}>
                                    <LinkedInIcon className={classes.icons} fontSize="large" aria-label="linkedin" />
                                </IconButton>
                            </Link>
                            <Link href="mailto:victoirebaron@hotmail.fr" target="_blank" >
                                <IconButton className={classes.padding}>
                                    <EmailIcon className={classes.icons} fontSize="large" aria-label="email" />
                                </IconButton>
                            </Link>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Parallax
                className={classes.parallax}
                bgImage={require('./assets/jumbotron.jpg')}
                bgImageAlt="background"
                strength={900}
            >
                <Box align="center">
                    <Typography variant="h2" className={classes.name}>Victoire Baron</Typography>
                    <Typography className={classes.title} variant="h4"> Front End Web Developer</Typography>
                </Box>

            </Parallax>
            <Box className={classes.box}>
                <Container>
                    <div>
                        <img
                            src={portrait}
                            className={classes.portrait}
                            alt="portrait"
                        />
                        <Box className={classes.about}>
                            <Typography>
                                Hello, I'm Victoire, an ambitious Full Stack Web Developer living in San Francisco who has
                                transitioned over from being an expert in paintings.
                </Typography>
                            <Typography>
                                My background in Art History makes me think creatively with an artistic outlook. I think of
                                the interface like a painting where I seek to create harmony and a good balance between the
                                color and components.
                </Typography>
                            <Typography>
                                I enjoy creating and developing powerful products using HTML, CSS and React.js. I am equipped
                                    with the skills needed to create products that bring joy to users.
                </Typography>
                            <Typography>
                                Feel free to have a look on my work.
                </Typography>
                        </Box>
                    </div>
                </Container>
            </Box>
        </div>
    )
}