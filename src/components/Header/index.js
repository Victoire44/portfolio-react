import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Parallax } from "react-parallax";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
    grow: {
        flexGrow: 1,
    },
    box: {
        background: "rgb(37, 40, 52)",
        height: 500
    }
})


export default function Header() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton color="inherit">
                            <GitHubIcon fontSize="large" aria-label="github" />
                        </IconButton>
                        <IconButton color="inherit">
                            <LinkedInIcon fontSize="large" aria-label="linkedin" />
                        </IconButton>
                        <IconButton color="inherit">
                            <EmailIcon fontSize="large" aria-label="email" />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Parallax
                blur={10}
                bgImage={require('./assets/jumbotron.jpg')}
                bgImageAlt="background"
                strength={200}
            >
                Victoire Baron
            <div style={{ height: '200px' }} />
            </Parallax>
            <Box className={classes.box}>

            </Box>

        </div>

    )

}