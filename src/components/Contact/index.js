import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography, Box, Divider, Link } from "@material-ui/core";
import Title from "../Title";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#000",
        opacity: .9,
        paddingTop: theme.spacing(10),
        "& .MuiDivider-root": {
            background: "#fff"
        },
        "& .MuiLink-root": {
            textDecoration: "none",
            color: "#fff"
        }
    },
    networks: {
        display: "flex",
        justifyContent: "flex-end",
        "@media (max-width: 600px)": {
            justifyContent: "flex-start"
        }
    },
    networksItem: {
        marginLeft: theme.spacing(4),
        "@media (max-width: 600px)": {
            marginLeft: theme.spacing(0),
            marginRight: theme.spacing(4)
        }
    },
    footer: {
        background: "#000",
        opacity: .9,
        color: "#fff",
        display: "flex",
        justifyContent: "center"
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
                        <Box mt={5} className={classes.networks}>
                            <Link href="https://www.linkedin.com/in/victoirebaron/?locale=en_US" target="_blank">
                                <Typography variant="h6" className={classes.networksItem}>LinkedIn</Typography>
                            </Link>
                            <Link href="https://github.com/Victoire44" target="_blank">
                                <Typography variant="h6" className={classes.networksItem}>Github</Typography>
                            </Link>
                            <Link href="https://github.com/Victoire44" target="_blank">
                                <Typography variant="h6" className={classes.networksItem}>Resume</Typography>
                            </Link>
                        </Box>
                    </Box>
                    <Box pt={20} pb={5} className={classes.footer} >
                        <Typography>© 2020 Victoire Baron</Typography>
                    </Box>
                </Container>
            </AppBar>
        </div >
    )
}