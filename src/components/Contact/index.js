import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography, Box, Divider, Link } from "@material-ui/core";
import Title from "../Title";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#000",
        opacity: 0.95,
        height: theme.spacing(85),
        paddingTop: theme.spacing(10),
        "& .MuiDivider-root": {
            background: "white"
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            color: "white"
        }
    },
    footer: {
        background: "#fff",
        color: "#000",
        display: "flex",
        justifyContent: "center",
    },
    contact: {
        [theme.breakpoints.down('sm')]: {
            margin: theme.spacing(4)
        },
        "& div": {
            marginBottom: theme.spacing(6),
        }
    }
}));

export default function Contact() {
    const classes = useStyles();

    return (
        <div id="contact">
            <AppBar position="static" className={classes.root}>
                <Container maxWidth="md">
                    <Title>
                        <Typography>Contact</Typography>
                    </Title>
                    <Box className={classes.contact}>
                        <Typography variant="h6">Tel: +1 415-416-0428</Typography>
                        <Link href="mailto:me@victoirebaron.com" target="_blank">
                            <Typography variant="h6">Email: me(at)victoirebaron.com</Typography>
                        </Link>
                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                            <Box ml={4}>
                                <Link href="https://www.linkedin.com/in/victoirebaron/?locale=en_US" target="_blank">
                                    <Typography variant="h6">LinkedIn</Typography>
                                </Link>
                            </Box>
                            <Box ml={4}>
                                <Link href="https://github.com/Victoire44" target="_blank">
                                    <Typography variant="h6">Github</Typography>
                                </Link>
                            </Box>
                            <Box ml={4}>
                                <Link href="https://github.com/Victoire44" target="_blank">
                                    <Typography variant="h6">Resume</Typography>
                                </Link>
                            </Box>
                        </div>
                    </Box>
                </Container>
            </AppBar>
            <Toolbar className={classes.footer} >
                <Typography>© 2020 Victoire Baron</Typography>
            </Toolbar>
        </div >
    )
}