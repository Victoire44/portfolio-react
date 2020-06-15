import React from "react";
import { makeStyles, Container, AppBar, Toolbar, Typography, Box, Divider, Link } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        background: "#19232f",
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
        background: "#252834",
        color: "white",
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
                    <Box mb={15}>
                        <Typography variant="h3" data-aos="fade-right" data-aos-duration="1000">Contact</Typography>
                        <Divider />
                    </Box>
                    <Box className={classes.contact}>
                        <Typography variant="h5">Victoire Baron</Typography>
                        <Typography variant="h6">+1 415-416-0428</Typography>
                        <Link href="mailto:victoirebaron@hotmail.fr" target="_blank">
                            <Typography variant="h6">victoirebaron@hotmail.fr</Typography>
                        </Link>
                    </Box>
                </Container>
            </AppBar>
            <Toolbar className={classes.footer} >
                <Typography>©2020 Victoire Baron</Typography>
            </Toolbar>
        </div >
    )
}