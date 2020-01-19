import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Parallax } from "react-parallax";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import CardMedia from "@material-ui/core/cardMedia";


const useStyles = makeStyles(theme => ({
    icons: {
        marginLeft: "auto",
    },
    appbar: {
        backgroundColor: "#252834",
    },
    box: {
        background: "#252834",
        height: 500,
        color: "#fff",
    },
    myname: {
        color: "#fff",
    },
    title: {
        color: "#FA0063",
    },
}))


export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static" className={classes.appbar}>
                <Container>
                    <Toolbar >
                        <Box className={classes.icons} >
                            <IconButton color="inherit">
                                <GitHubIcon fontSize="large" aria-label="github" />
                            </IconButton>
                            <IconButton color="inherit">
                                <LinkedInIcon fontSize="large" aria-label="linkedin" />
                            </IconButton>
                            <IconButton color="inherit">
                                <EmailIcon fontSize="large" aria-label="email" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Parallax
                bgImage={require('./assets/jumbotron.jpg')}
                bgImageAlt="background"
                strength={900}
            >
                <Box align="center">
                    <Typography className={classes.myname} variant="h3" >Victoire Baron</Typography>
                    <Typography className={classes.title} variant="h4" > Front end Web developer</Typography>
                </Box>
                <div style={{ height: '350px' }} />
            </Parallax>
            <Box className={classes.box}>
                <Container>
                    <CardMedia
                        image="./assets/portrait.jpg"
                        title="portrait"
                    />
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

                </Container>
            </Box>
        </div>

    )

}