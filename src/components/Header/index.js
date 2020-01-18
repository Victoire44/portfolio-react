import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import { Parallax } from "react-parallax";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles(theme => ({
    icons: {
        marginLeft: "auto",
    },
    appbar: {
        backgroundColor: "#252834",
    },
    box: {
        background: "#252834",
        height: 500
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
                strength={200}
            >
                Victoire Baron
            <div style={{ height: '450px' }} />
            </Parallax>
            <Box className={classes.box}>

            </Box>

        </div>

    )

}